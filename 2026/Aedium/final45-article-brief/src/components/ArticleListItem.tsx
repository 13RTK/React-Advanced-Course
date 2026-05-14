import { HeartIcon } from '@phosphor-icons/react';
import type { Article } from '../types/Article';

function ArticleListItem({ article }: { article: Article }) {
  return (
    <li className="list-row h-40">
      <div>
        <img
          className="size-30 rounded-box"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
      </div>
      <div>
        {/* Title */}
        <div className="text-2xl sm:text-5xl font-bold font-serif">
          {article.title}
        </div>

        {/* Content brief */}
        <div className="sm:text-2xl text-sm font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>

      <button className="btn btn-secondary btn-square btn-ghost">
        <div className="sm:tooltip" data-tip="like">
          <HeartIcon size={24} />
        </div>
      </button>
    </li>
  );
}

export default ArticleListItem;
