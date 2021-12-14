import { useQuery } from '@apollo/client';

import {
  SearchMoviesQuery,
  SearchMoviesQueryVariables,
} from '#generated/types';
import { SEARCH_MOVIES } from '#apollo/operations';

import { useQueryParams } from '#hooks';

import Pagination from '#components/Pagination/Pagination';
import MoviesList from '#components/MoviesList/MoviesList';

import './SearchView.scss';

const SearchView = () => {
  const queryParams = useQueryParams();

  const pageAsNumber = parseInt(queryParams.get('page') || '1', 10);
  const searchQuery = queryParams.get('query') || '';

  const { data } = useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(
    SEARCH_MOVIES,
    {
      variables: {
        query: searchQuery,
        page: pageAsNumber,
      },
    },
  );

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
      <MoviesList
        movies={
          movies as NonNullable<
            NonNullable<SearchMoviesQuery['search']>['movies'][0]
          >[]
        }
        // Works as well: movies={movies as MoviePartsFragment[]}
      />
      <Pagination
        baseUrl={`/search?query=${searchQuery}&`}
        initialPage={pageAsNumber}
        totalPages={totalPages}
      />
    </>
  );
};

export default SearchView;
