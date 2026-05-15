import { useCreateBlockNote } from '@blocknote/react';
import { Route as ArticleRoute } from '../routes/_app/articles.$articleId';
import { useQuery } from '@tanstack/react-query';
import { getArticleById } from '../services/apiArticle';
import Loading from './Loading';
import AppEditor from './AppEditor';
import {
  BookmarkIcon,
  PencilCircleIcon,
  ThumbsUpIcon,
  TrashIcon,
} from '@phosphor-icons/react';
import { SignedIn } from '@neondatabase/neon-js/auth/react';

function Article() {
  const { articleId } = ArticleRoute.useParams();

  const editor = useCreateBlockNote();

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const article = await getArticleById(Number(articleId));

      editor.replaceBlocks(editor.document, JSON.parse(article.content));

      return article;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1 className="text-center text-7xl font-serif mb-8">{article?.title}</h1>

      <SignedIn>
        <div className="divider"></div>

        <div className="flex justify-center">
          <ul className="menu menu-horizontal rounded-box">
            <li>
              <a className="tooltip mx-1" data-tip="Like">
                <ThumbsUpIcon size={24} weight="thin" />
              </a>
            </li>
            <li>
              <a className="tooltip mx-1" data-tip="Bookmark">
                <BookmarkIcon size={24} weight="thin" />
              </a>
            </li>
            <li>
              <a className="tooltip bg-blue-600 mx-1" data-tip="Edit">
                <PencilCircleIcon size={24} weight="thin" />
              </a>
            </li>
            <li>
              <a className="tooltip bg-red-600 mx-1" data-tip="Delete">
                <TrashIcon size={24} weight="thin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
      </SignedIn>

      <AppEditor editor={editor} editable={false} />
    </>
  );
}

export default Article;
