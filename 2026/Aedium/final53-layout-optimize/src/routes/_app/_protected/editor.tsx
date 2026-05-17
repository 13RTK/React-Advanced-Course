import { createFileRoute } from '@tanstack/react-router';
import ArticleEditor from '@/features/article/ArticleEditor';

export const Route = createFileRoute('/_app/_protected/editor')({
  component: ArticleEditor,
});
