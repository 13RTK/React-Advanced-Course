import { ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import type { MemoItem } from '../types/MemoItem';
import DeleteIcon from '@mui/icons-material/Delete';

function MemoListItem({
  memoItem,
  onDelete,
}: {
  memoItem: MemoItem;
  onDelete: (deleteId: number) => void;
}) {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            onClick={() => onDelete(memoItem.id)}
            edge="end"
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        }
        alignItems="flex-start"
      >
        <ListItemText primary={memoItem.title} secondary={memoItem.content} />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

export default MemoListItem;
