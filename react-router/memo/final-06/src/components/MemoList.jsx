import List from '@mui/material/List';
import MemoListItem from './MemoListItem';

import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';

export default function MemoList({ searchItem = '' }) {
  const [memoList] = useLocalStorage('memo-list', []);
  const [filteredMemoList, setFilteredMemoList] = useState(memoList);

  useEffect(() => {
    if (searchItem === '') {
      setFilteredMemoList(memoList);
      return;
    }

    setFilteredMemoList(
      memoList.filter((memoItem) =>
        memoItem.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    );
  }, [searchItem]);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {filteredMemoList.map((memoItem) => (
        <MemoListItem memoItem={memoItem} key={memoItem.id} />
      ))}
    </List>
  );
}
