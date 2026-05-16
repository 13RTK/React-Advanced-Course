import { getArticleById } from '@/services/apiArticle';
import type { BlockNoteEditor } from '@blocknote/core';

import { useQuery } from '@tanstack/react-query';

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
