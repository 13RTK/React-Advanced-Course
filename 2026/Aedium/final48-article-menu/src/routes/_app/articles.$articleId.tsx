import { createFileRoute } from '@tanstack/react-router';
import Article from '../../components/Article';

export const Route = createFileRoute('/_app/articles/$articleId')({
  component: Article,
});
