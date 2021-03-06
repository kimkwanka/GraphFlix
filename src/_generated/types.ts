export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
