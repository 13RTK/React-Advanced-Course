import { Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function MemoListItem({ memoItem, deleteMemo }) {
  const processedMemoBody =
    memoItem.body.length > 40
      ? memoItem.body.split(' ').slice(0, 9).join(' ') + '...'
      : memoItem.body;

  const navigate = useNavigate();

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
        onClick={() => navigate(`/memo/${memoItem.id}`)}
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
