import List from '@mui/material/List';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useMemoList } from '@/hooks/memoList';
import type { MemoItem } from '@/types/MemoItem';

import MemoListItem from './MemoListItem';

export default function MemoList({ search = '' }) {
  const { memoList, setMemoList } = useMemoList();
  const [processedMemoList, setProcessedMemoList] = useState<MemoItem[]>([]);

  function handleDelete(deleteId: number) {
    const deletedMemoList = memoList?.filter(
      (memoItem) => memoItem.id !== deleteId,
    );

    setMemoList(deletedMemoList);
    toast.success('memo deleted');
  }

  useEffect(() => {
    if (!search) {
      setProcessedMemoList(memoList || []);
    }

    const filteredMemoList = memoList?.filter((memo) => {
      return memo.title.toLowerCase().includes(search.toLowerCase());
    });
    setProcessedMemoList(filteredMemoList || []);
  }, [search, memoList]);

  return (
    <>
      {processedMemoList.length === 0 && (
        <h1 style={{ textAlign: 'center' }}>
          There's no memo, try to
          <Link to="/add"> Add </Link>
          one
        </h1>
      )}

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {processedMemoList.map((memoItem) => (
          <MemoListItem
            key={memoItem.id}
            memoItem={memoItem}
            onDelete={handleDelete}
          />
        ))}
      </List>
    </>
  );
}
