import { ApolloClient, InMemoryCache, from } from '@apollo/client';

import introspectionResult from '#generated/fragment-matcher';

import {
  authLink,
  httpLink,
  refreshTokenOnErrorLink,
  setPendingRequestLink,
} from '#apollo/links';

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
