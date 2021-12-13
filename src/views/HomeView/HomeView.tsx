import { useQuery } from '@apollo/client';

import {
  DiscoverMoviesQuery,
  DiscoverMoviesQueryVariables,
} from '#generated/types';
import { DISCOVER_MOVIES } from '#apollo/operations';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './HomeView.scss';

const HomeView = () => {
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

  return (
    <>
      <Pagination
        baseUrl="/?"
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
      <MoviesList
        movies={
          movies as NonNullable<
            NonNullable<DiscoverMoviesQuery['discover']>['movies'][0]
          >[]
        }
        // Works as well: movies={movies as MoviePartsFragment[]}
      />
      <Pagination
        baseUrl="/?"
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomeView;
