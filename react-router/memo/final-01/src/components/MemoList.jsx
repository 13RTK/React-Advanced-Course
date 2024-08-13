import List from '@mui/material/List';
import MemoListItem from './MemoListItem';

export default function AlignItemsList() {
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
  ];

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {memoList.map((memoItem) => (
        <MemoListItem memoItem={memoItem} key={memoItem.id} />
      ))}
    </List>
  );
}
