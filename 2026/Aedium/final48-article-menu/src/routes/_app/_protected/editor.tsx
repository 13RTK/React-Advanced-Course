import { createFileRoute } from '@tanstack/react-router';
import ArticleEditor from '../../../components/ArticleEditor';

export const Route = createFileRoute('/_app/_protected/editor')({
  component: ArticleEditor,
});
