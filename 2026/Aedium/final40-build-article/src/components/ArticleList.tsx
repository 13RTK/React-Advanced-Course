import { useEffect } from 'react';
import ArticleListItem from './ArticleListItem';
import { getAllArticles } from '../services/apiArticle';

function ArticleList() {
  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <ArticleListItem />
      <ArticleListItem />
      <ArticleListItem />
      <ArticleListItem />
      <ArticleListItem />
    </ul>
  );
}

export default ArticleList;
