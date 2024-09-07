import { Divider, ListItem, ListItemText } from '@mui/material';

function MemoListItem({ memoItem }) {
  const processedMemoBody =
    memoItem.body.length > 40
      ? memoItem.body.split(' ').slice(0, 10).join(' ') + '...'
      : memoItem.body;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={<>{processedMemoBody}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}
export default MemoListItem;
