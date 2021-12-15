import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export const MoviePartsFragmentDoc = gql`
    fragment MovieParts on TMDBMovie {
  id
  backdropUrl
  genres {
    id
    name
  }
  overview
  posterUrl
  title
  vote_average
}
    `;
export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    jwtToken
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const SilentRefreshDocument = gql`
    mutation SilentRefresh {
  silentRefresh {
    jwtToken
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type SilentRefreshMutationFn = Apollo.MutationFunction<SilentRefreshMutation, SilentRefreshMutationVariables>;

/**
 * __useSilentRefreshMutation__
 *
 * To run a mutation, you first call `useSilentRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSilentRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [silentRefreshMutation, { data, loading, error }] = useSilentRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useSilentRefreshMutation(baseOptions?: Apollo.MutationHookOptions<SilentRefreshMutation, SilentRefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SilentRefreshMutation, SilentRefreshMutationVariables>(SilentRefreshDocument, options);
      }
export type SilentRefreshMutationHookResult = ReturnType<typeof useSilentRefreshMutation>;
export type SilentRefreshMutationResult = Apollo.MutationResult<SilentRefreshMutation>;
export type SilentRefreshMutationOptions = Apollo.BaseMutationOptions<SilentRefreshMutation, SilentRefreshMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser {
    errors {
      message
    }
    statusCode
  }
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($newUserData: UserInput!) {
  registerUser(newUserData: $newUserData) {
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      newUserData: // value for 'newUserData'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($userId: ID!, $newUserData: UserInput!) {
  updateUser(userId: $userId, newUserData: $newUserData) {
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      newUserData: // value for 'newUserData'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: ID!) {
  deleteUser(userId: $userId) {
    errors {
      message
    }
    statusCode
    user {
      _id
    }
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const AddFavoriteMovieToUserDocument = gql`
    mutation AddFavoriteMovieToUser($userId: ID!, $movieId: ID!) {
  addFavoriteMovieToUser(userId: $userId, movieId: $movieId) {
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type AddFavoriteMovieToUserMutationFn = Apollo.MutationFunction<AddFavoriteMovieToUserMutation, AddFavoriteMovieToUserMutationVariables>;

/**
 * __useAddFavoriteMovieToUserMutation__
 *
 * To run a mutation, you first call `useAddFavoriteMovieToUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteMovieToUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteMovieToUserMutation, { data, loading, error }] = useAddFavoriteMovieToUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useAddFavoriteMovieToUserMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteMovieToUserMutation, AddFavoriteMovieToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteMovieToUserMutation, AddFavoriteMovieToUserMutationVariables>(AddFavoriteMovieToUserDocument, options);
      }
export type AddFavoriteMovieToUserMutationHookResult = ReturnType<typeof useAddFavoriteMovieToUserMutation>;
export type AddFavoriteMovieToUserMutationResult = Apollo.MutationResult<AddFavoriteMovieToUserMutation>;
export type AddFavoriteMovieToUserMutationOptions = Apollo.BaseMutationOptions<AddFavoriteMovieToUserMutation, AddFavoriteMovieToUserMutationVariables>;
export const RemoveFavoriteMovieFromUserDocument = gql`
    mutation RemoveFavoriteMovieFromUser($userId: ID!, $movieId: ID!) {
  removeFavoriteMovieFromUser(userId: $userId, movieId: $movieId) {
    errors {
      message
    }
    statusCode
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
  }
}
    `;
export type RemoveFavoriteMovieFromUserMutationFn = Apollo.MutationFunction<RemoveFavoriteMovieFromUserMutation, RemoveFavoriteMovieFromUserMutationVariables>;

/**
 * __useRemoveFavoriteMovieFromUserMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteMovieFromUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteMovieFromUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteMovieFromUserMutation, { data, loading, error }] = useRemoveFavoriteMovieFromUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useRemoveFavoriteMovieFromUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteMovieFromUserMutation, RemoveFavoriteMovieFromUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteMovieFromUserMutation, RemoveFavoriteMovieFromUserMutationVariables>(RemoveFavoriteMovieFromUserDocument, options);
      }
export type RemoveFavoriteMovieFromUserMutationHookResult = ReturnType<typeof useRemoveFavoriteMovieFromUserMutation>;
export type RemoveFavoriteMovieFromUserMutationResult = Apollo.MutationResult<RemoveFavoriteMovieFromUserMutation>;
export type RemoveFavoriteMovieFromUserMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteMovieFromUserMutation, RemoveFavoriteMovieFromUserMutationVariables>;
export const DiscoverMoviesDocument = gql`
    query DiscoverMovies($options: DiscoverOptions!) {
  discover(options: $options) {
    movies {
      ...MovieParts
    }
    totalPages
  }
}
    ${MoviePartsFragmentDoc}`;

/**
 * __useDiscoverMoviesQuery__
 *
 * To run a query within a React component, call `useDiscoverMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoverMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscoverMoviesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useDiscoverMoviesQuery(baseOptions: Apollo.QueryHookOptions<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
      }
export function useDiscoverMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
        }
export type DiscoverMoviesQueryHookResult = ReturnType<typeof useDiscoverMoviesQuery>;
export type DiscoverMoviesLazyQueryHookResult = ReturnType<typeof useDiscoverMoviesLazyQuery>;
export type DiscoverMoviesQueryResult = Apollo.QueryResult<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>;
export const SearchMoviesDocument = gql`
    query SearchMovies($query: String!, $page: Int) {
  search(query: $query, page: $page) {
    movies {
      ...MovieParts
    }
    totalPages
    totalResults
  }
}
    ${MoviePartsFragmentDoc}`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const GetMovieByIdDocument = gql`
    query GetMovieById($movieId: String!) {
  movie(movieId: $movieId) {
    id
    backdropUrl
    genres {
      id
      name
    }
    overview
    posterUrl
    title
    vote_average
  }
}
    `;

/**
 * __useGetMovieByIdQuery__
 *
 * To run a query within a React component, call `useGetMovieByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieByIdQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMovieByIdQuery, GetMovieByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
      }
export function useGetMovieByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieByIdQuery, GetMovieByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
        }
export type GetMovieByIdQueryHookResult = ReturnType<typeof useGetMovieByIdQuery>;
export type GetMovieByIdLazyQueryHookResult = ReturnType<typeof useGetMovieByIdLazyQuery>;
export type GetMovieByIdQueryResult = Apollo.QueryResult<GetMovieByIdQuery, GetMovieByIdQueryVariables>;
export const GetManyMoviesByIdDocument = gql`
    query GetManyMoviesById($movieIds: [String!]!) {
  movies(movieIds: $movieIds) {
    movies {
      ...MovieParts
    }
    totalPages
    totalResults
  }
}
    ${MoviePartsFragmentDoc}`;

/**
 * __useGetManyMoviesByIdQuery__
 *
 * To run a query within a React component, call `useGetManyMoviesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetManyMoviesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetManyMoviesByIdQuery({
 *   variables: {
 *      movieIds: // value for 'movieIds'
 *   },
 * });
 */
export function useGetManyMoviesByIdQuery(baseOptions: Apollo.QueryHookOptions<GetManyMoviesByIdQuery, GetManyMoviesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetManyMoviesByIdQuery, GetManyMoviesByIdQueryVariables>(GetManyMoviesByIdDocument, options);
      }
export function useGetManyMoviesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetManyMoviesByIdQuery, GetManyMoviesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetManyMoviesByIdQuery, GetManyMoviesByIdQueryVariables>(GetManyMoviesByIdDocument, options);
        }
export type GetManyMoviesByIdQueryHookResult = ReturnType<typeof useGetManyMoviesByIdQuery>;
export type GetManyMoviesByIdLazyQueryHookResult = ReturnType<typeof useGetManyMoviesByIdLazyQuery>;
export type GetManyMoviesByIdQueryResult = Apollo.QueryResult<GetManyMoviesByIdQuery, GetManyMoviesByIdQueryVariables>;
export const GetAuthDocument = gql`
    query GetAuth {
  auth @client {
    user {
      _id
      birthday
      email
      favoriteMovies
      username
    }
    isLoggedIn
  }
}
    `;

/**
 * __useGetAuthQuery__
 *
 * To run a query within a React component, call `useGetAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAuthQuery(baseOptions?: Apollo.QueryHookOptions<GetAuthQuery, GetAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthQuery, GetAuthQueryVariables>(GetAuthDocument, options);
      }
export function useGetAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthQuery, GetAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthQuery, GetAuthQueryVariables>(GetAuthDocument, options);
        }
export type GetAuthQueryHookResult = ReturnType<typeof useGetAuthQuery>;
export type GetAuthLazyQueryHookResult = ReturnType<typeof useGetAuthLazyQuery>;
export type GetAuthQueryResult = Apollo.QueryResult<GetAuthQuery, GetAuthQueryVariables>;
export const GetFavoriteMoviesDocument = gql`
    query GetFavoriteMovies {
  auth @client {
    user {
      favoriteMovies
    }
  }
}
    `;

/**
 * __useGetFavoriteMoviesQuery__
 *
 * To run a query within a React component, call `useGetFavoriteMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoriteMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoriteMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoriteMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoriteMoviesQuery, GetFavoriteMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoriteMoviesQuery, GetFavoriteMoviesQueryVariables>(GetFavoriteMoviesDocument, options);
      }
export function useGetFavoriteMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoriteMoviesQuery, GetFavoriteMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoriteMoviesQuery, GetFavoriteMoviesQueryVariables>(GetFavoriteMoviesDocument, options);
        }
export type GetFavoriteMoviesQueryHookResult = ReturnType<typeof useGetFavoriteMoviesQuery>;
export type GetFavoriteMoviesLazyQueryHookResult = ReturnType<typeof useGetFavoriteMoviesLazyQuery>;
export type GetFavoriteMoviesQueryResult = Apollo.QueryResult<GetFavoriteMoviesQuery, GetFavoriteMoviesQueryVariables>;
export const GetIsLoggedInDocument = gql`
    query GetIsLoggedIn {
  auth @client {
    isLoggedIn
  }
}
    `;

/**
 * __useGetIsLoggedInQuery__
 *
 * To run a query within a React component, call `useGetIsLoggedInQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIsLoggedInQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIsLoggedInQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIsLoggedInQuery(baseOptions?: Apollo.QueryHookOptions<GetIsLoggedInQuery, GetIsLoggedInQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIsLoggedInQuery, GetIsLoggedInQueryVariables>(GetIsLoggedInDocument, options);
      }
export function useGetIsLoggedInLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIsLoggedInQuery, GetIsLoggedInQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIsLoggedInQuery, GetIsLoggedInQueryVariables>(GetIsLoggedInDocument, options);
        }
export type GetIsLoggedInQueryHookResult = ReturnType<typeof useGetIsLoggedInQuery>;
export type GetIsLoggedInLazyQueryHookResult = ReturnType<typeof useGetIsLoggedInLazyQuery>;
export type GetIsLoggedInQueryResult = Apollo.QueryResult<GetIsLoggedInQuery, GetIsLoggedInQueryVariables>;