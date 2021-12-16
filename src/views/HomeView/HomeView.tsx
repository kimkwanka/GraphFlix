import { useDiscoverMoviesQuery } from '#generated/hooks';
import { TmdbMovie } from '#generated/types';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './HomeView.scss';

const HomeView = () => {
  const queryParams = useQueryParams();

  const pageAsNumber = parseInt(queryParams.get('page') || '1', 10);

  const { data } = useDiscoverMoviesQuery({
    variables: {
      options: {
        page: pageAsNumber,
      },
    },
  });

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
      <MoviesList movies={movies as TmdbMovie[]} />
      <Pagination
        baseUrl="/?"
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default HomeView;
