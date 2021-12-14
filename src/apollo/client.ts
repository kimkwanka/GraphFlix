import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { accessTokenVar, isRequestPending } from '#apollo/state';

import introspectionResult from '#generated/fragment-matcher';

const setPendingRequestLink = new ApolloLink((operation, forward) => {
  isRequestPending(true);

  return forward(operation).map((data) => {
    isRequestPending(false);
    return data;
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
  link: from([authLink, setPendingRequestLink, httpLink]),
});

export default apolloClient;
