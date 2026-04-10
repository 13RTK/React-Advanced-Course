import { ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import type { MemoItem } from '@/types/MemoItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from '@tanstack/react-router';

function MemoListItem({
  memoItem,
  onDelete,
}: {
  memoItem: MemoItem;
  onDelete: (deleteId: number) => void;
}) {
  const navigate = useNavigate();

  return (
    <>
      <ListItem
        onClick={() =>
          navigate({
            to: '/memo/$memoId',
            params: {
              memoId: `${memoItem.id}`,
            },
          })
        }
        secondaryAction={
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              onDelete(memoItem.id);
            }}
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
