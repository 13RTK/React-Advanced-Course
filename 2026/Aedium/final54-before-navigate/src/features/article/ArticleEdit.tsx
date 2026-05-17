import AppEditor from '@/ui/AppEditor';
import {
  useCurrentArticle,
  useUpdateArticle,
} from '@/features/article/article';
import Loading from '@/ui/Loading';

import { Route as articleEditRoute } from '@/routes/_app/_protected/articles.edit.$articleId';
import { buildArticleInsert, isEditorEmpty } from '@/utils/editorHelper';
import { useCreateBlockNote } from '@blocknote/react';
import { useBlocker, useNavigate } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

function ArticleEdit() {
  const { articleId } = articleEditRoute.useParams();
  const editor = useCreateBlockNote();
  const navigate = useNavigate();

  const initialArticle = useRef<string | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  function handleEditorChange() {
    if (!article || !initialArticle.current) {
      return;
    }

    const currentArticleData = buildArticleInsert(editor, article.author_id);

    const currentArticle = JSON.stringify({
      title: currentArticleData.title,
      content: currentArticleData.content,
    });

    if (currentArticle !== initialArticle.current) {
      setIsDirty(true);
    }
  }

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

  useEffect(() => {
    if (!isLoading && article) {
      initialArticle.current = JSON.stringify({
        title: article.title,
        content: article.content,
      });

      setIsDirty(false);
    }
  }, [isLoading, article]);

  useBlocker({
    shouldBlockFn: () => {
      if (!isDirty) {
        return false;
      }

      const shouldBlock = !window.confirm(
        'You have unsaved changes. Are you sure you want to leave?',
      );

      return shouldBlock;
    },
  });

  if (isLoading && isUpdating) {
    return <Loading />;
  }

  return <AppEditor editor={editor} onChange={handleEditorChange} />;
}

export default ArticleEdit;
