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
- Jest
- Cypress
- React / Cypress Testing Library

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

### Testing (Unit / Integration)
Use ``yarn test`` or ``npm run test`` to run the test suite ([Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)) once or
``yarn test --watch`` or ``npm run test -- --watch`` to run it in watch mode.

Check the [Jest CLI docs](https://jestjs.io/docs/cli) for more options.
### Testing (E2E)
Use ``yarn test:e2e`` or ``npm run test:e2e`` to run the end-to-end test suite ([Cypress](https://www.cypress.io/) + [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)) headlessly or ``yarn test:e2e --headed`` or ``npm run test:e2e -- --headed`` to force the browser to show.

Check the [Cypress CLI docs](https://docs.cypress.io/guides/guides/command-line) for more CLI options.

Alternatively you can run ``yarn cy:open`` or ``npm run cy:open`` to open Cypress and run the tests manually.
