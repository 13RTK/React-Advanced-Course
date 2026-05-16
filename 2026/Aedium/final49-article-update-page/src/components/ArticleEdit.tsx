import AppEditor from '@/components/AppEditor';
import { useCurrentArticle } from '@/components/article';
import Loading from '@/components/Loading';

import { Route } from '@/routes/_app/_protected/articles.edit.$articleId';
import { useCreateBlockNote } from '@blocknote/react';

function ArticleEdit() {
  const { articleId } = Route.useParams();
  const editor = useCreateBlockNote();

  const { article, isLoading } = useCurrentArticle(articleId, editor);

  if (isLoading) {
    return <Loading />;
  }

  return <AppEditor editor={editor} />;
}

export default ArticleEdit;
