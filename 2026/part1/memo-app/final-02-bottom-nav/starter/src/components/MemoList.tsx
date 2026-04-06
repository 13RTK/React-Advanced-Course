import List from '@mui/material/List';
import type { MemoItem } from '../types/MemoItem';
import MemoListItem from './MemoListItem';

export default function MemoList() {
  const mockMemoList: MemoItem[] = [
    {
      id: 1,
      title: 'Brunch this weekend?',
      content:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      id: 2,
      title: 'Brunch this weekend?',
      content:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      id: 3,
      title: 'Brunch this weekend?',
      content:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      id: 4,
      title: 'Brunch this weekend?',
      content:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    {
      id: 5,
      title: 'Brunch this weekend?',
      content:
        "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {mockMemoList.map((memoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} />
      ))}
    </List>
  );
}
