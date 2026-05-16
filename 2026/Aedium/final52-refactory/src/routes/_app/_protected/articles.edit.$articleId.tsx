import ArticleEdit from '@/components/ArticleEdit';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_app/_protected/articles/edit/$articleId',
)({
  component: ArticleEdit,
});
