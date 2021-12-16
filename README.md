## GraphFlix
React app that allows you to discover old and upcoming movies alike and let's you save them in a "favorite movies list".

GraphFlix utilizes [Apollo Client](https://www.apollographql.com/docs/react/) to communicate with [flix-backend](https://github.com/kimkwanka/flix-backend)'s `/graphql` API endpoint that acts as a [GraphQL](https://graphql.org/) wrapper for the [TMDb's REST API](https://developers.themoviedb.org/3/getting-started/introduction) and also provides access to the backend's User Management (CRUD) functionality.

[GraphQL Code Generator](https://www.graphql-code-generator.com/) is used to generate the [TypeScript typings](https://www.graphql-code-generator.com/plugins/typescript), [React Hooks](https://www.graphql-code-generator.com/plugins/typescript-react-apollo) and ["Possible Types"](https://www.graphql-code-generator.com/plugins/fragment-matcher) directly from flix-backend's GraphQL schema.

State management is achieved through Apollo's [Client-side schema](https://www.apollographql.com/docs/react/local-state/client-side-schema/) and [Reactive variables](https://www.apollographql.com/docs/react/local-state/reactive-variables).

### REST Version

To see the REST API version of this app, check out [RESTFlix](https://github.com/kimkwanka/RESTFlix).

## Built With
- React
- GraphQL
- GraphQL Code Generator
- Apollo Client
- TypeScript

## Live Version
Check out the [live version](https://graphflix.netlify.app/) to see the app in action.

## Getting Started

### Install
After cloning the repository run either
``yarn`` or ``npm install`` to install all dependencies.

### Environment Variables
The app depends on the following environment variable (supplied via a [.env file](https://www.npmjs.com/package/react-native-dotenv) or natively by your OS environment):

  ***VITE_MOVIE_API_URL**=https://flix.kimkwanka.io*

(Just create a file named ``.env`` in the project root, copy the above line into it and you're good to go.)


### Development
Use ``yarn dev`` or ``npm run dev`` to run app in development mode.

### Build
Use ``yarn build`` or ``npm run build`` to build for production.
