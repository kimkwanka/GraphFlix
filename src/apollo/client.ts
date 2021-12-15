import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  from,
  fromPromise,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { onError } from '@apollo/client/link/error';
import { accessTokenVar, isRequestPending } from '#apollo/state';

import introspectionResult from '#generated/fragment-matcher';

let tokenRefreshPromise: Promise<void> | null = null;

const silentRefresh = () =>
  fetch(`${import.meta.env.VITE_MOVIE_API_URL as string}/graphql`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation SilentRefresh {
        silentRefresh {
          jwtToken
          errors {
            message
          }
          statusCode
        }
      }`,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      accessTokenVar(json.data.silentRefresh.jwtToken);
    });

const refreshTokenOnErrorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ graphQLErrors, operation, forward }) => {
    if (
      graphQLErrors?.some((err) => err.extensions.code === 'UNAUTHENTICATED')
    ) {
      if (!tokenRefreshPromise) {
        tokenRefreshPromise = silentRefresh();
        tokenRefreshPromise.then(() => {
          tokenRefreshPromise = null;
        });
      }

      return fromPromise(tokenRefreshPromise).flatMap(() => {
        return forward(operation);
      });
    }
  },
);

const setPendingRequestLink = new ApolloLink((operation, forward) => {
  isRequestPending(true);

  return forward(operation).map((response) => {
    isRequestPending(false);
    return response;
  });
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessTokenVar()}`,
    },
  };
});

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_MOVIE_API_URL as string}/graphql`,
  credentials: 'include',
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
  }),
  link: from([
    refreshTokenOnErrorLink,
    authLink,
    setPendingRequestLink,
    httpLink,
  ]),
});

export default apolloClient;
