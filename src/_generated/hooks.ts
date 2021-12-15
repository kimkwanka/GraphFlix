import * as Types from './types';

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
export type LoginUserMutationFn = Apollo.MutationFunction<Types.LoginUserMutation, Types.LoginUserMutationVariables>;

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
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.LoginUserMutation, Types.LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.LoginUserMutation, Types.LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<Types.LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<Types.LoginUserMutation, Types.LoginUserMutationVariables>;
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
export type SilentRefreshMutationFn = Apollo.MutationFunction<Types.SilentRefreshMutation, Types.SilentRefreshMutationVariables>;

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
export function useSilentRefreshMutation(baseOptions?: Apollo.MutationHookOptions<Types.SilentRefreshMutation, Types.SilentRefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.SilentRefreshMutation, Types.SilentRefreshMutationVariables>(SilentRefreshDocument, options);
      }
export type SilentRefreshMutationHookResult = ReturnType<typeof useSilentRefreshMutation>;
export type SilentRefreshMutationResult = Apollo.MutationResult<Types.SilentRefreshMutation>;
export type SilentRefreshMutationOptions = Apollo.BaseMutationOptions<Types.SilentRefreshMutation, Types.SilentRefreshMutationVariables>;
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
export type LogoutUserMutationFn = Apollo.MutationFunction<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>;

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
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<Types.LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<Types.LogoutUserMutation, Types.LogoutUserMutationVariables>;
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
export type RegisterUserMutationFn = Apollo.MutationFunction<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>;

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
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<Types.RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<Types.RegisterUserMutation, Types.RegisterUserMutationVariables>;
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
export type UpdateUserMutationFn = Apollo.MutationFunction<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;

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
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<Types.UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<Types.UpdateUserMutation, Types.UpdateUserMutationVariables>;
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
export type DeleteUserMutationFn = Apollo.MutationFunction<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>;

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
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<Types.DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<Types.DeleteUserMutation, Types.DeleteUserMutationVariables>;
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
export type AddFavoriteMovieToUserMutationFn = Apollo.MutationFunction<Types.AddFavoriteMovieToUserMutation, Types.AddFavoriteMovieToUserMutationVariables>;

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
export function useAddFavoriteMovieToUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.AddFavoriteMovieToUserMutation, Types.AddFavoriteMovieToUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.AddFavoriteMovieToUserMutation, Types.AddFavoriteMovieToUserMutationVariables>(AddFavoriteMovieToUserDocument, options);
      }
export type AddFavoriteMovieToUserMutationHookResult = ReturnType<typeof useAddFavoriteMovieToUserMutation>;
export type AddFavoriteMovieToUserMutationResult = Apollo.MutationResult<Types.AddFavoriteMovieToUserMutation>;
export type AddFavoriteMovieToUserMutationOptions = Apollo.BaseMutationOptions<Types.AddFavoriteMovieToUserMutation, Types.AddFavoriteMovieToUserMutationVariables>;
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
export type RemoveFavoriteMovieFromUserMutationFn = Apollo.MutationFunction<Types.RemoveFavoriteMovieFromUserMutation, Types.RemoveFavoriteMovieFromUserMutationVariables>;

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
export function useRemoveFavoriteMovieFromUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.RemoveFavoriteMovieFromUserMutation, Types.RemoveFavoriteMovieFromUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.RemoveFavoriteMovieFromUserMutation, Types.RemoveFavoriteMovieFromUserMutationVariables>(RemoveFavoriteMovieFromUserDocument, options);
      }
export type RemoveFavoriteMovieFromUserMutationHookResult = ReturnType<typeof useRemoveFavoriteMovieFromUserMutation>;
export type RemoveFavoriteMovieFromUserMutationResult = Apollo.MutationResult<Types.RemoveFavoriteMovieFromUserMutation>;
export type RemoveFavoriteMovieFromUserMutationOptions = Apollo.BaseMutationOptions<Types.RemoveFavoriteMovieFromUserMutation, Types.RemoveFavoriteMovieFromUserMutationVariables>;
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
export function useDiscoverMoviesQuery(baseOptions: Apollo.QueryHookOptions<Types.DiscoverMoviesQuery, Types.DiscoverMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.DiscoverMoviesQuery, Types.DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
      }
export function useDiscoverMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.DiscoverMoviesQuery, Types.DiscoverMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.DiscoverMoviesQuery, Types.DiscoverMoviesQueryVariables>(DiscoverMoviesDocument, options);
        }
export type DiscoverMoviesQueryHookResult = ReturnType<typeof useDiscoverMoviesQuery>;
export type DiscoverMoviesLazyQueryHookResult = ReturnType<typeof useDiscoverMoviesLazyQuery>;
export type DiscoverMoviesQueryResult = Apollo.QueryResult<Types.DiscoverMoviesQuery, Types.DiscoverMoviesQueryVariables>;
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
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<Types.SearchMoviesQuery, Types.SearchMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.SearchMoviesQuery, Types.SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.SearchMoviesQuery, Types.SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.SearchMoviesQuery, Types.SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<Types.SearchMoviesQuery, Types.SearchMoviesQueryVariables>;
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
export function useGetMovieByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetMovieByIdQuery, Types.GetMovieByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetMovieByIdQuery, Types.GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
      }
export function useGetMovieByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetMovieByIdQuery, Types.GetMovieByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetMovieByIdQuery, Types.GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
        }
export type GetMovieByIdQueryHookResult = ReturnType<typeof useGetMovieByIdQuery>;
export type GetMovieByIdLazyQueryHookResult = ReturnType<typeof useGetMovieByIdLazyQuery>;
export type GetMovieByIdQueryResult = Apollo.QueryResult<Types.GetMovieByIdQuery, Types.GetMovieByIdQueryVariables>;
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
export function useGetManyMoviesByIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetManyMoviesByIdQuery, Types.GetManyMoviesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetManyMoviesByIdQuery, Types.GetManyMoviesByIdQueryVariables>(GetManyMoviesByIdDocument, options);
      }
export function useGetManyMoviesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetManyMoviesByIdQuery, Types.GetManyMoviesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetManyMoviesByIdQuery, Types.GetManyMoviesByIdQueryVariables>(GetManyMoviesByIdDocument, options);
        }
export type GetManyMoviesByIdQueryHookResult = ReturnType<typeof useGetManyMoviesByIdQuery>;
export type GetManyMoviesByIdLazyQueryHookResult = ReturnType<typeof useGetManyMoviesByIdLazyQuery>;
export type GetManyMoviesByIdQueryResult = Apollo.QueryResult<Types.GetManyMoviesByIdQuery, Types.GetManyMoviesByIdQueryVariables>;
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
export function useGetAuthQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetAuthQuery, Types.GetAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetAuthQuery, Types.GetAuthQueryVariables>(GetAuthDocument, options);
      }
export function useGetAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetAuthQuery, Types.GetAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetAuthQuery, Types.GetAuthQueryVariables>(GetAuthDocument, options);
        }
export type GetAuthQueryHookResult = ReturnType<typeof useGetAuthQuery>;
export type GetAuthLazyQueryHookResult = ReturnType<typeof useGetAuthLazyQuery>;
export type GetAuthQueryResult = Apollo.QueryResult<Types.GetAuthQuery, Types.GetAuthQueryVariables>;
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
export function useGetFavoriteMoviesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetFavoriteMoviesQuery, Types.GetFavoriteMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetFavoriteMoviesQuery, Types.GetFavoriteMoviesQueryVariables>(GetFavoriteMoviesDocument, options);
      }
export function useGetFavoriteMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetFavoriteMoviesQuery, Types.GetFavoriteMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetFavoriteMoviesQuery, Types.GetFavoriteMoviesQueryVariables>(GetFavoriteMoviesDocument, options);
        }
export type GetFavoriteMoviesQueryHookResult = ReturnType<typeof useGetFavoriteMoviesQuery>;
export type GetFavoriteMoviesLazyQueryHookResult = ReturnType<typeof useGetFavoriteMoviesLazyQuery>;
export type GetFavoriteMoviesQueryResult = Apollo.QueryResult<Types.GetFavoriteMoviesQuery, Types.GetFavoriteMoviesQueryVariables>;
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
export function useGetIsLoggedInQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetIsLoggedInQuery, Types.GetIsLoggedInQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetIsLoggedInQuery, Types.GetIsLoggedInQueryVariables>(GetIsLoggedInDocument, options);
      }
export function useGetIsLoggedInLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetIsLoggedInQuery, Types.GetIsLoggedInQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetIsLoggedInQuery, Types.GetIsLoggedInQueryVariables>(GetIsLoggedInDocument, options);
        }
export type GetIsLoggedInQueryHookResult = ReturnType<typeof useGetIsLoggedInQuery>;
export type GetIsLoggedInLazyQueryHookResult = ReturnType<typeof useGetIsLoggedInLazyQuery>;
export type GetIsLoggedInQueryResult = Apollo.QueryResult<Types.GetIsLoggedInQuery, Types.GetIsLoggedInQueryVariables>;