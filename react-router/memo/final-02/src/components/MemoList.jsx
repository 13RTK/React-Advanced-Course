import List from '@mui/material/List';
import MemoListItem from './MemoListItem';

export default function MemoList() {
  const memoList = [
    {
      id: 1,
      title: 'Brunch this weekend?',
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to?",
    },
    {
      id: 2,
      title: 'Summer BBQ',
      body: "Wish I could come, but I'm out of town this weekend.",
    },
    {
      id: 3,
      title: 'Oui Oui',
      body: 'Do you have Paris recommendations? Have you ever been?',
    },
    {
      id: 11,
      title: 'Brunch this weekend?',
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to?",
    },
    {
      id: 21,
      title: 'Summer BBQ',
      body: "Wish I could come, but I'm out of town this weekend.",
    },
    {
      id: 31,
      title: 'Oui Oui',
      body: 'Do you have Paris recommendations? Have you ever been?',
    },
    {
      id: 13,
      title: 'Brunch this weekend?',
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to?",
    },
    {
      id: 23,
      title: 'Summer BBQ',
      body: "Wish I could come, but I'm out of town this weekend.",
    },
    {
      id: 33,
      title: 'Oui Oui',
      body: 'Do you have Paris recommendations? Have you ever been?',
    },
    {
      id: 113,
      title: 'Brunch this weekend?',
      body: "I'll be in your neighborhood doing errands this weekend. Do you want to?",
    },
    {
      id: 213,
      title: 'Summer BBQ',
      body: "Wish I could come, but I'm out of town this weekend.",
    },
    {
      id: 313,
      title: 'Oui Oui',
      body: 'Do you have Paris recommendations? Have you ever been?',
    },
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {memoList.map((memoItem) => (
        <MemoListItem memoItem={memoItem} key={memoItem.id} />
      ))}
    </List>
  );
}
