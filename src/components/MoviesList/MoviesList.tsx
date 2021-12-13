import { MoviePartsFragment } from '#generated/types';

import MovieCard from '#components/MovieCard/MovieCard';

import './MoviesList.scss';

interface IMoviesListProps {
  movies: MoviePartsFragment[];
}

const MoviesList = ({ movies }: IMoviesListProps) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard key={`${movie.id}`} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
