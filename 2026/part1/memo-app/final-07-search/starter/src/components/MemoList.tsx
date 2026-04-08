import List from '@mui/material/List';
import MemoListItem from './MemoListItem';
import { useMemoList } from '../hooks/memoList';
import { Link } from '@tanstack/react-router';

export default function MemoList() {
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

  const { memoList } = useMemoList();

  return (
    <>
      {memoList?.length === 0 && (
        <h1 style={{ textAlign: 'center' }}>
          There's no memo, try to
          <Link to="/add"> Add </Link>
          one
        </h1>
      )}

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {memoList?.map((memoItem) => (
          <MemoListItem key={memoItem.id} memoItem={memoItem} />
        ))}
      </List>
    </>
  );
}
