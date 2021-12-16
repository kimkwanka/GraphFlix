import { useSearchMoviesQuery } from '#generated/hooks';
import { TmdbMovie } from '#generated/types';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './SearchView.scss';

const SearchView = () => {
  const queryParams = useQueryParams();

  const pageAsNumber = parseInt(queryParams.get('page') || '1', 10);
  const searchQuery = queryParams.get('query') || '';

  const { data } = useSearchMoviesQuery({
    variables: {
      query: searchQuery,
      page: pageAsNumber,
    },
  });

  if (!data?.search) {
    return null;
  }

  const { movies, totalPages, totalResults } = data.search;

  return (
    <>
      <h1 className="search-heading">
        Search results for: &apos;{searchQuery}&apos;
      </h1>
      <h3 className="search-heading">({totalResults} total results)</h3>
      <Pagination
        baseUrl={`/search?query=${searchQuery}&`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
      <MoviesList movies={movies as TmdbMovie[]} />
      <Pagination
        baseUrl={`/search?query=${searchQuery}&`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default SearchView;
