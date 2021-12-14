import { memo, MouseEvent } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import {
  GetAuthQuery,
  AddFavoriteMovieToUserMutation,
  AddFavoriteMovieToUserMutationVariables,
  RemoveFavoriteMovieFromUserMutation,
  RemoveFavoriteMovieFromUserMutationVariables,
} from '#generated/types';

import {
  ADD_MOVIE_TO_FAVORITES,
  GET_AUTH,
  REMOVE_MOVIE_FROM_FAVORITES,
} from '#apollo/operations';

import './FavoriteButton.scss';

interface IFavoriteButtonProps {
  movieId?: string;
  showText?: boolean;
  clear?: boolean;
}

const FavoriteButton = ({ movieId, showText, clear }: IFavoriteButtonProps) => {
  if (!movieId) {
    return null;
  }

  const [addMovieToFavorites] = useMutation<
    AddFavoriteMovieToUserMutation,
    AddFavoriteMovieToUserMutationVariables
  >(ADD_MOVIE_TO_FAVORITES, {
    update: (cache, { data }) => {
      // Only update cache if we had no errors
      if (data?.addFavoriteMovieToUser?.errors.length) {
        return;
      }
      cache.writeQuery({
        query: GET_AUTH,
        data: {
          auth: {
            user: data?.addFavoriteMovieToUser?.user,
            isLoggedIn: true,
          },
        },
      });
    },
  });

  const [removeMovieFromFavorites] = useMutation<
    RemoveFavoriteMovieFromUserMutation,
    RemoveFavoriteMovieFromUserMutationVariables
  >(REMOVE_MOVIE_FROM_FAVORITES, {
    update: (cache, { data }) => {
      // Only update cache if we had no errors
      if (data?.removeFavoriteMovieFromUser?.errors.length) {
        return;
      }
      cache.writeQuery({
        query: GET_AUTH,
        data: {
          auth: {
            user: data?.removeFavoriteMovieFromUser?.user,
            isLoggedIn: true,
          },
        },
      });
    },
  });

  const { data } = useQuery<GetAuthQuery>(GET_AUTH);

  if (!data?.auth?.user) {
    return null;
  }

  const { _id: userId, favoriteMovies } = data.auth.user;

  const isFavorite = favoriteMovies.indexOf(movieId) !== -1;

  const addToFavorites = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    addMovieToFavorites({ variables: { userId, movieId } });
  };

  const removeFromFavorites = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    removeMovieFromFavorites({ variables: { userId, movieId } });
  };

  return !isFavorite ? (
    <button
      type="button"
      className={`favorite-button ${clear ? 'clear' : ''}`}
      onClick={(e) => addToFavorites(e)}
    >
      &#10010;
      {showText ? ' Add to Favorites ' : ' '}
      &#x2661;
    </button>
  ) : (
    <button
      type="button"
      className={`favorite-button secondary ${clear ? 'clear--secondary' : ''}`}
      onClick={(e) => removeFromFavorites(e)}
    >
      &#8722;
      {showText ? ' Remove from Favorites ' : ' '}
      &#x2661;
    </button>
  );
};

export default memo(FavoriteButton);
