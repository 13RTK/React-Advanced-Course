import { createFileRoute } from '@tanstack/react-router';
import Search from '../components/Search';

type SearchType = {
  keyword: string;
};

export const Route = createFileRoute('/search')({
  component: Search,

  validateSearch: (search: Record<string, unknown>): SearchType => {
    // validate and parse the search params into a typed state
    return {
      keyword: (search.keyword as string) || '',
    };
  },
});
