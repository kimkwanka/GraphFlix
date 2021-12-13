import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

export const accessTokenVar = makeVar('');

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
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export { apolloClient };
