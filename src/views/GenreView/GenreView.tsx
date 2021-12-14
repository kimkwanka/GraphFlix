import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';

import {
  MoviePartsFragment,
  DiscoverMoviesQuery,
  DiscoverMoviesQueryVariables,
} from '#generated/types';

import { DISCOVER_MOVIES } from '#apollo/operations';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './GenreView.scss';

const GenreView = () => {
  const { genreId } = useParams();
  const queryParams = useQueryParams();

  const pageAsNumber = parseInt(queryParams.get('page') || '1', 10);

  const { data } = useQuery<DiscoverMoviesQuery, DiscoverMoviesQueryVariables>(
    DISCOVER_MOVIES,
    {
      variables: {
        options: {
          page: pageAsNumber,
        },
      },
    },
  );

  if (!data?.discover) {
    return null;
  }

  const { movies, totalPages } = data.discover;

  const genreName = movies[0]
    ? movies[0].genres[parseInt(genreId || '', 10)].name
    : '';
  return (
    <>
      <h1 className="genre-heading">{genreName} Movies</h1>
      <Pagination
        baseUrl={`/genres/${genreId}?`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
      <MoviesList movies={movies as MoviePartsFragment[]} />
      <Pagination
        baseUrl={`/genres/${genreId}?`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default GenreView;
