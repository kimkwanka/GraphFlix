import { memo } from 'react';

import { TmdbMovie } from '#generated/types';

import MovieModal from './MovieModal/MovieModal';

import './MovieCard.scss';

interface IMovieCardProps {
  movie: TmdbMovie;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <div className="movie-card">
      <MovieModal movie={movie} />
    </div>
  );
};

export default memo(MovieCard);
