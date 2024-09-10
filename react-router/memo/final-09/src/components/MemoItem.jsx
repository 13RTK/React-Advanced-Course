import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Button, Fab, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import { useLocalStorage } from 'react-use';

function MemoItem() {
  const { memoId } = useParams();
  const navigate = useNavigate();

  const [memoList, setMemoList] = useLocalStorage('memo-list');

  const currentMemoItem = memoList.find(
    (memoItem) => Number(memoItem.id) === Number(memoId)
  );

  const [title, setTitle] = useState(currentMemoItem.title);
  const [content, setContent] = useState(currentMemoItem.body);

  function updateMemoList() {
    const newMemoList = memoList.map((memoItem) => {
      if (Number(memoItem.id) === Number(memoId)) {
        return {
          ...memoItem,
          title,
          body: content,
        };
      }

      return memoItem;
    });

    setMemoList(newMemoList);
    setTitle('');
    setContent('');

    toast.success('Successfully updated!');
    navigate('/');
  }

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
      <Button variant="contained" onClick={updateMemoList}>
        Update
      </Button>

      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 80, right: 40 }}
        onClick={() => navigate('/')}
      >
        <HomeIcon />
      </Fab>
    </form>
  );
}
export default MemoItem;
