import { useQuery } from '@apollo/client';

import {
  MoviePartsFragment,
  GetFavoriteMoviesQuery,
  GetManyMoviesByIdQuery,
  GetManyMoviesByIdQueryVariables,
} from '#generated/types';

import { GET_MANY_MOVIES_BY_ID, GET_FAVORITE_MOVIES } from '#apollo/operations';

import MovieCard from '#components/MovieCard/MovieCard';

import './FavoriteMoviesList.scss';

const FavoriteMoviesList = () => {
  const { data: favoriteMoviesData } =
    useQuery<GetFavoriteMoviesQuery>(GET_FAVORITE_MOVIES);

  const favoriteMovies = favoriteMoviesData?.auth?.user.favoriteMovies || [];

  const { data: getManyMoviesByIdData } = useQuery<
    GetManyMoviesByIdQuery,
    GetManyMoviesByIdQueryVariables
  >(GET_MANY_MOVIES_BY_ID, {
    variables: { movieIds: favoriteMovies as string[] },
  });

  if (!getManyMoviesByIdData?.movies) {
    return null;
  }
  const movies = getManyMoviesByIdData.movies.movies as MoviePartsFragment[];

  return (
    <div className="favorite-movies-list">
      {movies.map((movie) => (
        <MovieCard key={`${movie?.id}`} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMoviesList;
