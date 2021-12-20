import { useParams } from 'react-router-dom';

import { useDiscoverMoviesQuery } from '#generated/hooks';
import { TmdbMovie } from '#generated/types';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './GenreView.scss';

const GenreView = () => {
  const { genreId } = useParams();
  const queryParams = useQueryParams();

  const pageAsNumber = parseInt(queryParams.get('page') || '1', 10);

  const { data } = useDiscoverMoviesQuery({
    variables: {
      options: {
        page: pageAsNumber,
        with_genres: genreId,
      },
    },
  });

  if (!data?.discover) {
    return null;
  }

  const { movies, totalPages } = data.discover;

  const genreName =
    movies?.[0]?.genres.find((genre) => genre.id.toString() === genreId)
      ?.name || '';

  return (
    <>
      <h1 className="genre-heading">{genreName} Movies</h1>
      <Pagination
        baseUrl={`/genres/${genreId}?`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
      <MoviesList movies={movies as TmdbMovie[]} />
      <Pagination
        baseUrl={`/genres/${genreId}?`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default GenreView;
