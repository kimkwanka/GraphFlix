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
        passwordHash
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
        passwordHash
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
        passwordHash
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
        passwordHash
        username
      }
    }
  }
`;

const MOVIE_PARTS = gql`
  fragment MovieParts on TMDBMovieSimple {
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
  query GetMovieById($id: String!) {
    movie(id: $id) {
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

export const GET_AUTH = gql`
  query GetAuth {
    auth @client {
      user {
        _id
        birthday
        email
        favoriteMovies
        passwordHash
        username
      }
      jwtToken
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
