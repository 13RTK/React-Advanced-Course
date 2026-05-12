import { useEffect } from 'react';
import ArticleListItem from './ArticleListItem';
import { useSetAtom } from 'jotai';
import { userAtom } from '../atoms/user';
import { useUserProfile } from './userProfile';

function ArticleList() {
  const setUser = useSetAtom(userAtom);
  const { user } = useUserProfile();

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

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
