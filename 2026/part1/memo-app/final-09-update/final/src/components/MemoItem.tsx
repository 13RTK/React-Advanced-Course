import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { toast } from 'sonner';
import { useMemoList } from '../hooks/memoList';
import { Route } from '../routes/memo.$memoId';
import { useNavigate } from '@tanstack/react-router';

function MemoItem() {
  const { memoId } = Route.useParams();
  const navigate = useNavigate();

  const { memoList, setMemoList } = useMemoList();
  const currentMemoItem = memoList?.find(
    (memoItem) => memoItem.id === Number(memoId),
  );

  const [title, setTitle] = useState(currentMemoItem?.title || '');
  const [content, setContent] = useState(currentMemoItem?.content || '');

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedMemoList = memoList?.map((memoItem) => {
      if (memoItem.id === Number(memoId)) {
        return {
          id: memoItem.id,
          title,
          content,
        };
      }

      return memoItem;
    });
    setMemoList(updatedMemoList);

    toast.success('memo updated');

    navigate({
      to: '/',
    });
  }

  return (
    <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
      <TextField
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        id="outlined-basic"
        label="title"
        variant="outlined"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />

      <TextField
        id="outlined-multiline-static"
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        label="content"
        multiline
        rows={4}
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <br />
      <Button type="submit" variant="contained" size="large">
        Update
      </Button>
    </form>
  );
}

export default MemoItem;
