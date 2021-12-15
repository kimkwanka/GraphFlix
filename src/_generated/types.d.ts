import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectId: any;
};

export type Auth = {
  __typename?: 'Auth';
  isLoggedIn: Scalars['Boolean'];
  user: User;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  errors: Array<Maybe<Error>>;
  jwtToken?: Maybe<Scalars['String']>;
  statusCode: Scalars['Int'];
  user?: Maybe<User>;
};

export type DiscoverOptions = {
  page?: InputMaybe<Scalars['Int']>;
  with_cast?: InputMaybe<Scalars['String']>;
  with_crew?: InputMaybe<Scalars['String']>;
  with_genres?: InputMaybe<Scalars['String']>;
  with_keywords?: InputMaybe<Scalars['String']>;
  with_people?: InputMaybe<Scalars['String']>;
  with_watch_monetization_types?: InputMaybe<Scalars['String']>;
  with_watch_providers?: InputMaybe<Scalars['String']>;
  without_genres?: InputMaybe<Scalars['String']>;
  without_keywords?: InputMaybe<Scalars['String']>;
};

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type MoviesPayload = {
  __typename?: 'MoviesPayload';
  movies: Array<Maybe<TmdbMovie>>;
  totalPages: Scalars['Int'];
  totalResults: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addFavoriteMovieToUser?: Maybe<UserPayload>;
  deleteUser?: Maybe<UserPayload>;
  loginUser?: Maybe<AuthPayload>;
  logoutUser?: Maybe<UserPayload>;
  registerUser?: Maybe<UserPayload>;
  removeFavoriteMovieFromUser?: Maybe<UserPayload>;
  silentRefresh?: Maybe<AuthPayload>;
  updateUser?: Maybe<UserPayload>;
};


export type MutationAddFavoriteMovieToUserArgs = {
  movieId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  newUserData: UserInput;
};


export type MutationRemoveFavoriteMovieFromUserArgs = {
  movieId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  newUserData: UserInput;
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  auth?: Maybe<Auth>;
  discover?: Maybe<MoviesPayload>;
  movie?: Maybe<TmdbMovieDetailed>;
  movies?: Maybe<MoviesPayload>;
  search?: Maybe<MoviesPayload>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryDiscoverArgs = {
  options: DiscoverOptions;
};


export type QueryMovieArgs = {
  movieId: Scalars['String'];
};


export type QueryMoviesArgs = {
  movieIds: Array<Scalars['String']>;
};


export type QuerySearchArgs = {
  page?: InputMaybe<Scalars['Int']>;
  query: Scalars['String'];
};

export type RefreshTokenData = {
  __typename?: 'RefreshTokenData';
  expiresAt: Scalars['Date'];
  passwordHash: Scalars['String'];
  refreshToken: Scalars['String'];
  userId: Scalars['String'];
};

export type TmdbConfiguration = {
  __typename?: 'TMDBConfiguration';
  backdrop_sizes: Array<Scalars['String']>;
  base_url: Scalars['String'];
  logo_sizes: Array<Scalars['String']>;
  poster_sizes: Array<Scalars['String']>;
  profile_sizes: Array<Scalars['String']>;
  secure_base_url: Scalars['String'];
  still_sizes: Array<Scalars['String']>;
};

export type TmdbGenre = {
  __typename?: 'TMDBGenre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TmdbMovie = {
  adult: Scalars['Boolean'];
  backdropUrl?: Maybe<Scalars['String']>;
  backdrop_path: Scalars['String'];
  genres: Array<TmdbGenre>;
  id: Scalars['ID'];
  original_language: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  posterUrl?: Maybe<Scalars['String']>;
  poster_path: Scalars['String'];
  release_date: Scalars['String'];
  title: Scalars['String'];
  video: Scalars['Boolean'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
};

export type TmdbMovieDetailed = TmdbMovie & {
  __typename?: 'TMDBMovieDetailed';
  adult: Scalars['Boolean'];
  backdropUrl?: Maybe<Scalars['String']>;
  backdrop_path: Scalars['String'];
  budget: Scalars['Int'];
  genres: Array<TmdbGenre>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imdb_id?: Maybe<Scalars['String']>;
  original_language: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  popularity: Scalars['Float'];
  posterUrl?: Maybe<Scalars['String']>;
  poster_path: Scalars['String'];
  production_companies: Array<TmdbProductionCompany>;
  production_countries: Array<TmdbProductionCountry>;
  release_date: Scalars['String'];
  revenue: Scalars['Int'];
  runtime?: Maybe<Scalars['Int']>;
  spoken_languages: Array<TmdbProductionSpokenLanguaeges>;
  status: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  video: Scalars['Boolean'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
};

export type TmdbMovieSimple = TmdbMovie & {
  __typename?: 'TMDBMovieSimple';
  adult: Scalars['Boolean'];
  backdropUrl?: Maybe<Scalars['String']>;
  backdrop_path: Scalars['String'];
  genre_ids: Array<Scalars['String']>;
  genres: Array<TmdbGenre>;
  id: Scalars['ID'];
  original_language: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  posterUrl?: Maybe<Scalars['String']>;
  poster_path: Scalars['String'];
  release_date: Scalars['String'];
  title: Scalars['String'];
  video: Scalars['Boolean'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
};

export type TmdbProductionCompany = {
  __typename?: 'TMDBProductionCompany';
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin_country: Scalars['String'];
};

export type TmdbProductionCountry = {
  __typename?: 'TMDBProductionCountry';
  iso_3166_1: Scalars['String'];
  name: Scalars['String'];
};

export type TmdbProductionSpokenLanguaeges = {
  __typename?: 'TMDBProductionSpokenLanguaeges';
  iso_639_1: Scalars['String'];
  name: Scalars['String'];
};

export type TmdbImageBaseUrls = {
  __typename?: 'TmdbImageBaseUrls';
  backdropBaseUrl: Scalars['String'];
  posterBaseUrl: Scalars['String'];
  profileBaseUrl: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ObjectId'];
  birthday?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  favoriteMovies: Array<Maybe<Scalars['String']>>;
  passwordHash: Scalars['String'];
  username: Scalars['String'];
};

export type UserInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  email: Scalars['String'];
  favoriteMovies?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  errors: Array<Maybe<Error>>;
  statusCode: Scalars['Int'];
  user?: Maybe<User>;
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'AuthPayload', jwtToken?: string | null | undefined, statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

export type SilentRefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type SilentRefreshMutation = { __typename?: 'Mutation', silentRefresh?: { __typename?: 'AuthPayload', jwtToken?: string | null | undefined, statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined> } | null | undefined };

export type RegisterUserMutationVariables = Exact<{
  newUserData: UserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

export type UpdateUserMutationVariables = Exact<{
  userId: Scalars['ID'];
  newUserData: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any } | null | undefined } | null | undefined };

export type AddFavoriteMovieToUserMutationVariables = Exact<{
  userId: Scalars['ID'];
  movieId: Scalars['ID'];
}>;


export type AddFavoriteMovieToUserMutation = { __typename?: 'Mutation', addFavoriteMovieToUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

export type RemoveFavoriteMovieFromUserMutationVariables = Exact<{
  userId: Scalars['ID'];
  movieId: Scalars['ID'];
}>;


export type RemoveFavoriteMovieFromUserMutation = { __typename?: 'Mutation', removeFavoriteMovieFromUser?: { __typename?: 'UserPayload', statusCode: number, errors: Array<{ __typename?: 'Error', message: string } | null | undefined>, user?: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } | null | undefined } | null | undefined };

type MovieParts_TmdbMovieDetailed_Fragment = { __typename?: 'TMDBMovieDetailed', id: string, backdropUrl?: string | null | undefined, overview?: string | null | undefined, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> };

type MovieParts_TmdbMovieSimple_Fragment = { __typename?: 'TMDBMovieSimple', id: string, backdropUrl?: string | null | undefined, overview: string, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> };

export type MoviePartsFragment = MovieParts_TmdbMovieDetailed_Fragment | MovieParts_TmdbMovieSimple_Fragment;

export type DiscoverMoviesQueryVariables = Exact<{
  options: DiscoverOptions;
}>;


export type DiscoverMoviesQuery = { __typename?: 'Query', discover?: { __typename?: 'MoviesPayload', totalPages: number, movies: Array<{ __typename?: 'TMDBMovieDetailed', id: string, backdropUrl?: string | null | undefined, overview?: string | null | undefined, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | { __typename?: 'TMDBMovieSimple', id: string, backdropUrl?: string | null | undefined, overview: string, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | null | undefined> } | null | undefined };

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
}>;


export type SearchMoviesQuery = { __typename?: 'Query', search?: { __typename?: 'MoviesPayload', totalPages: number, totalResults: number, movies: Array<{ __typename?: 'TMDBMovieDetailed', id: string, backdropUrl?: string | null | undefined, overview?: string | null | undefined, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | { __typename?: 'TMDBMovieSimple', id: string, backdropUrl?: string | null | undefined, overview: string, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | null | undefined> } | null | undefined };

export type GetMovieByIdQueryVariables = Exact<{
  movieId: Scalars['String'];
}>;


export type GetMovieByIdQuery = { __typename?: 'Query', movie?: { __typename?: 'TMDBMovieDetailed', id: string, backdropUrl?: string | null | undefined, overview?: string | null | undefined, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | null | undefined };

export type GetManyMoviesByIdQueryVariables = Exact<{
  movieIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetManyMoviesByIdQuery = { __typename?: 'Query', movies?: { __typename?: 'MoviesPayload', totalPages: number, totalResults: number, movies: Array<{ __typename?: 'TMDBMovieDetailed', id: string, backdropUrl?: string | null | undefined, overview?: string | null | undefined, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | { __typename?: 'TMDBMovieSimple', id: string, backdropUrl?: string | null | undefined, overview: string, posterUrl?: string | null | undefined, title: string, vote_average: number, genres: Array<{ __typename?: 'TMDBGenre', id: number, name: string }> } | null | undefined> } | null | undefined };

export type GetAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAuthQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', isLoggedIn: boolean, user: { __typename?: 'User', _id: any, birthday?: any | null | undefined, email: string, favoriteMovies: Array<string | null | undefined>, username: string } } | null | undefined };

export type GetFavoriteMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavoriteMoviesQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', user: { __typename?: 'User', favoriteMovies: Array<string | null | undefined> } } | null | undefined };

export type GetIsLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIsLoggedInQuery = { __typename?: 'Query', auth?: { __typename?: 'Auth', isLoggedIn: boolean } | null | undefined };

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