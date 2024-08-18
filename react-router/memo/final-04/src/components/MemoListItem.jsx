import { Divider, ListItem, ListItemText } from '@mui/material';

function MemoListItem({ memoItem }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={<>{memoItem.body}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}
export default MemoListItem;
