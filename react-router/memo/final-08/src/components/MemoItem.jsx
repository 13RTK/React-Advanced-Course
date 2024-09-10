import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

function MemoItem() {
  const { memoId } = useParams();
  const [memoList] = useLocalStorage('memo-list');

  const currentMemoItem = memoList.find(
    (memoItem) => Number(memoItem.id) === Number(memoId)
  );

  const [title, setTitle] = useState(currentMemoItem.title);
  const [content, setContent] = useState(currentMemoItem.body);

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        value={title}
        style={{ marginBottom: '10px' }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        value={content}
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <br />
      <Button variant="contained">Update</Button>
    </form>
  );
}
export default MemoItem;
