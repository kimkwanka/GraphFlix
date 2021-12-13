import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import { MoviePartsFragment, GetFavoriteMoviesQuery } from '#generated/types';

import { GET_FAVORITE_MOVIES } from '#apollo/operations';

import FavoriteButton from '#components/FavoriteButton/FavoriteButton';

import './MovieModal.scss';

interface MovieModalProps {
  movie: MoviePartsFragment;
}

const MovieModal = ({ movie }: MovieModalProps) => {
  const { data } = useQuery<GetFavoriteMoviesQuery>(GET_FAVORITE_MOVIES);

  const favoriteMovies = data?.auth?.user.favoriteMovies || [];
  const isFavorite = favoriteMovies.indexOf(movie.id) !== -1;

  const movieImageUrl = movie.backdropUrl || movie.posterUrl;

  return (
    <div className="movie-modal">
      {isFavorite && <span className="movie-modal__favorite-heart" />}
      <Link className="movie-modal__wrapper-link" to={`/movies/${movie.id}`}>
        {movieImageUrl ? (
          <img
            className="movie-modal__img"
            crossOrigin="anonymous"
            src={movieImageUrl}
            alt={movie.title}
          />
        ) : (
          <div className="movie-modal__img-placeholder">No image available</div>
        )}
      </Link>
      <div className="movie-modal__content">
        <div className="movie-modal__upper">
          <div className="movie-modal__title">{movie.title}</div>
          <FavoriteButton movieId={movie.id} clear />
        </div>
        <div className="movie-modal__body">
          <div className="movie-modal__description">{movie.overview}</div>
          <div className="movie-modal__details">
            <div className="movie-modal__genre">
              {movie.genres.map(({ name }) => name).join(', ')}
            </div>
            <div className="movie-modal__rating">
              &#9733;
              {movie.vote_average}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MovieModal);
