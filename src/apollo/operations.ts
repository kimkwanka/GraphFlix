import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
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

export const SILENT_REFRESH = gql`
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

export const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      errors {
        message
      }
      statusCode
    }
  }
`;

export const REGISTER_USER = gql`
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

export const UPDATE_USER = gql`
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

export const DELETE_USER = gql`
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

export const ADD_MOVIE_TO_FAVORITES = gql`
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

export const REMOVE_MOVIE_FROM_FAVORITES = gql`
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

const MOVIE_PARTS = gql`
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

export const DISCOVER_MOVIES = gql`
  ${MOVIE_PARTS}
  query DiscoverMovies($options: DiscoverOptions!) {
    discover(options: $options) {
      movies {
        ...MovieParts
      }
      totalPages
    }
  }
`;

export const SEARCH_MOVIES = gql`
  ${MOVIE_PARTS}
  query SearchMovies($query: String!, $page: Int) {
    search(query: $query, page: $page) {
      movies {
        ...MovieParts
      }
      totalPages
      totalResults
    }
  }
`;

export const GET_MOVIE_BY_ID = gql`
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

export const GET_MANY_MOVIES_BY_ID = gql`
  ${MOVIE_PARTS}
  query GetManyMoviesById($movieIds: [String!]!) {
    movies(movieIds: $movieIds) {
      movies {
        ...MovieParts
      }
      totalPages
      totalResults
    }
  }
`;

export const GET_AUTH = gql`
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

export const GET_FAVORITE_MOVIES = gql`
  query GetFavoriteMovies {
    auth @client {
      user {
        favoriteMovies
      }
    }
  }
`;

export const GET_IS_LOGGED_IN = gql`
  query GetIsLoggedIn {
    auth @client {
      isLoggedIn
    }
  }
`;
