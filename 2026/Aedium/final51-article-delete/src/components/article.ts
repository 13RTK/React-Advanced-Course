import { editUpdateSignalAtom } from '@/atoms/editor';
import { getArticleById, updateArticleById } from '@/services/apiArticle';
import type { Article } from '@/types/Article';
import { buildArticleInsert } from '@/utils/editorHelper';
import type { BlockNoteEditor } from '@blocknote/core';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { toast } from 'sonner';

export function useCurrentArticle(articleId: string, editor: BlockNoteEditor) {
  const { data: article, isLoading } = useQuery({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const article = await getArticleById(Number(articleId));

      editor.replaceBlocks(editor.document, [
        { type: 'heading', content: article.title, level: 1 },
        ...JSON.parse(article.content),
      ]);

      return article;
    },
  });

  return {
    article,
    isLoading,
  };
}

export function useUpdateArticle() {
  const [editUpdateSignal, setEditUpdateSignal] = useAtom(editUpdateSignalAtom);

  const { mutate: updateArticle, isPending: isUpdating } = useMutation({
    mutationKey: ['update-article'],
    mutationFn: async ({
      article,
      editor,
    }: {
      article: Article;
      editor: BlockNoteEditor;
    }) => {
      if (!article) {
        throw new Error('Article not found');
      }

      const insertArticleData = buildArticleInsert(editor, article.author_id);

      await updateArticleById(article.id, {
        title: insertArticleData.title,
        content: insertArticleData.content,
        updated_at: new Date().toISOString(),
      });
      setEditUpdateSignal(0);
    },

    onSuccess: () => {
      toast.success('Article updated successfully!');
    },

    onError: (error) => {
      toast.error(error.message || 'Error while updating article');
    },
  });

  return {
    updateArticle,
    isUpdating,
    editUpdateSignal,
  };
}
