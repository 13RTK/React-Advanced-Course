import { useQuery } from '@tanstack/react-query';
import ArticleListItem from './ArticleListItem';
import { getAllArticles } from '../services/apiArticle';
import Loading from './Loading';

function ArticleList() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ['article-list'],
    queryFn: getAllArticles,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {articles?.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}

export default ArticleList;
