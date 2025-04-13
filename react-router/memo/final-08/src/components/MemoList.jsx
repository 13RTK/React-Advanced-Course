import List from '@mui/material/List';
import toast from 'react-hot-toast';

import MemoListItem from './MemoListItem';

import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';

export default function MemoList({ searchItem = '' }) {
  const [memoList, setMemoList] = useLocalStorage('memo-list', []);
  const [filteredMemoList, setFilteredMemoList] = useState(memoList);

  function deleteMemo(id) {
    // Error version because of react-use
    // setMemoList((memoList) =>
    //   memoList.filter((memoItem) => memoItem.id !== id)
    // );
    const newMemoList = memoList.filter((memoItem) => memoItem.id !== id);
    setMemoList(newMemoList);

    toast.error('Successfully deleted!');
  }

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

  useEffect(() => {
    setFilteredMemoList(memoList);
  }, [memoList]);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {filteredMemoList.map((memoItem) => (
        <MemoListItem
          memoItem={memoItem}
          key={memoItem.id}
          deleteMemo={deleteMemo}
        />
      ))}
    </List>
  );
}
