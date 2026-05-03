import { createFileRoute } from '@tanstack/react-router';
import RootLayout from '../components/RootLayout';
import ArticleList from '../components/ArticleList';

export const Route = createFileRoute('/')({
  component: ArticleListComponent,
});

function ArticleListComponent() {
  return (
    <RootLayout>
      <ArticleList />
    </RootLayout>
  );
}
