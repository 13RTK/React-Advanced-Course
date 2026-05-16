import { editUpdateSignalAtom } from '@/atoms/editor';
import AppEditor from '@/components/AppEditor';
import { useCurrentArticle } from '@/components/article';
import Loading from '@/components/Loading';

import { Route } from '@/routes/_app/_protected/articles.edit.$articleId';
import { updateArticleById } from '@/services/apiArticle';
import { buildArticleInsert, isEditorEmpty } from '@/utils/editorHelper';
import { useCreateBlockNote } from '@blocknote/react';
import { useNavigate } from '@tanstack/react-router';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

function ArticleEdit() {
  const { articleId } = Route.useParams();
  const editor = useCreateBlockNote();

  const navigate = useNavigate();

  const { article, isLoading } = useCurrentArticle(articleId, editor);

  const [editUpdateSignal, setEditUpdateSignal] = useAtom(editUpdateSignalAtom);

  async function handleUpdate() {
    if (!article) {
      throw new Error('Article not found');
    }

    const insertArticleData = buildArticleInsert(editor, article.author_id);

    await updateArticleById(Number(articleId), {
      title: insertArticleData.title,
      content: insertArticleData.content,
      updated_at: new Date().toISOString(),
    });

    setEditUpdateSignal(0);

    navigate({ to: '/articles/$articleId', params: { articleId } });
  }

  useEffect(() => {
    if (!isLoading && editUpdateSignal && !isEditorEmpty(editor.document)) {
      handleUpdate();
    }
  }, [editUpdateSignal]);

  if (isLoading) {
    return <Loading />;
  }

  return <AppEditor editor={editor} />;
}

export default ArticleEdit;
