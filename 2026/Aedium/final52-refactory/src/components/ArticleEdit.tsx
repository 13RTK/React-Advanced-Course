import AppEditor from '@/components/AppEditor';
import { useCurrentArticle, useUpdateArticle } from '@/components/article';
import Loading from '@/components/Loading';

import { Route as articleEditRoute } from '@/routes/_app/_protected/articles.edit.$articleId';
import { isEditorEmpty } from '@/utils/editorHelper';
import { useCreateBlockNote } from '@blocknote/react';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

function ArticleEdit() {
  const { articleId } = articleEditRoute.useParams();
  const editor = useCreateBlockNote();
  const navigate = useNavigate();

  const { article, isLoading } = useCurrentArticle(articleId, editor);
  const { updateArticle, isUpdating, editUpdateSignal } = useUpdateArticle();

  useEffect(() => {
    if (
      !isLoading &&
      article &&
      editUpdateSignal &&
      !isEditorEmpty(editor.document)
    ) {
      updateArticle(
        { article, editor },
        {
          onSuccess: () => {
            navigate({
              to: '/articles/$articleId',
              params: { articleId: articleId },
            });
          },
        },
      );
    }
  }, [editUpdateSignal]);

  if (isLoading && isUpdating) {
    return <Loading />;
  }

  return <AppEditor editor={editor} />;
}

export default ArticleEdit;
