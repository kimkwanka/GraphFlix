import { memo } from 'react';

import { MoviePartsFragment } from '#generated/types';

import MovieModal from './MovieModal/MovieModal';

import './MovieCard.scss';

interface IMovieCardProps {
  movie: MoviePartsFragment;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  return (
    <div className="movie-card">
      <MovieModal movie={movie} />
    </div>
  );
};

export default memo(MovieCard);
