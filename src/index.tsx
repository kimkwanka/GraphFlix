import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import apolloClient from '#apollo/client';

import App from './App';

if (!process.env.VITE_MOVIE_API_URL) {
  throw new Error(
    'Environment variable MOVIE_API_URL is not set. Either provide it via a .env file or natively in your OS.',
  );
}

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
