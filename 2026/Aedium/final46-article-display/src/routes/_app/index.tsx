import { createFileRoute } from '@tanstack/react-router';
import ArticleList from '../../components/ArticleList';

export const Route = createFileRoute('/_app/')({
  component: ArticleList,
});
