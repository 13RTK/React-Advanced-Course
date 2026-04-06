import { ListItem, ListItemText, Divider } from '@mui/material';
import type { MemoItem } from '../types/MemoItem';

function MemoListItem({ memoItem }: { memoItem: MemoItem }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText primary={memoItem.title} secondary={memoItem.content} />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
