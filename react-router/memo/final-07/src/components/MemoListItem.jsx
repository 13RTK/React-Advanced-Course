import { Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function MemoListItem({ memoItem, deleteMemo }) {
  const processedMemoBody =
    memoItem.body.length > 40
      ? memoItem.body.split(' ').slice(0, 9).join(' ') + '...'
      : memoItem.body;

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteMemo(memoItem.id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
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
