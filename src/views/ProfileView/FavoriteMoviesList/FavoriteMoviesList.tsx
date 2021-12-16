import {
  useGetFavoriteMoviesQuery,
  useGetManyMoviesByIdQuery,
} from '#generated/hooks';
import { TmdbMovie } from '#generated/types';

import MovieCard from '#components/MovieCard/MovieCard';

import './FavoriteMoviesList.scss';

const FavoriteMoviesList = () => {
  const { data: favoriteMoviesData } = useGetFavoriteMoviesQuery();

  const favoriteMovies = favoriteMoviesData?.auth?.user.favoriteMovies || [];

  const { data: getManyMoviesByIdData } = useGetManyMoviesByIdQuery({
    variables: { movieIds: favoriteMovies as string[] },
  });

  if (!getManyMoviesByIdData?.movies) {
    return null;
  }
  const movies = getManyMoviesByIdData.movies.movies as TmdbMovie[];

  return (
    <div className="favorite-movies-list">
      {movies.map((movie) => (
        <MovieCard key={`${movie?.id}`} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMoviesList;
