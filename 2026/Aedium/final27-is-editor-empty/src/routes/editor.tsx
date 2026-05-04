import { createFileRoute } from '@tanstack/react-router';
import ArticleEditor from '../components/ArticleEditor';

export const Route = createFileRoute('/editor')({
  component: ArticleEditor,
});
