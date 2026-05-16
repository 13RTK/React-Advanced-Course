import { createFileRoute } from '@tanstack/react-router';
import ArticleList from '@/features/home/ArticleList';

export const Route = createFileRoute('/_app/')({
  component: ArticleList,
});
