import List from '@mui/material/List';
import MemoListItem from './MemoListItem';
import { useMemoList } from '../hooks/memoList';
import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import type { MemoItem } from '../types/MemoItem';
import { toast } from 'sonner';

export default function MemoList({ search = '' }) {
  // const mockMemoList: MemoItem[] = [
  //   {
  //     id: 1,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 2,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 3,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 4,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 5,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 11,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 21,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 31,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 41,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  //   {
  //     id: 51,
  //     title: 'Brunch this weekend?',
  //     content:
  //       "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
  //   },
  // ];

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
