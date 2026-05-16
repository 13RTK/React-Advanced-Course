import { createFileRoute } from '@tanstack/react-router';
import ArticleDisplay from '@/components/ArticleDisplay';

export const Route = createFileRoute('/_app/articles/$articleId')({
  component: ArticleDisplay,
});
