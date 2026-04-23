import { createFileRoute } from '@tanstack/react-router';
import RootLayout from '../components/RootLayout';

export const Route = createFileRoute('/')({
  component: ArticleList,
});

function ArticleList() {
  return (
    <RootLayout>
      <div>Hello articles "/"!</div>
    </RootLayout>
  );
}
