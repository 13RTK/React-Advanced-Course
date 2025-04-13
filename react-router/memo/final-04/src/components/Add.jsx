import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { useLocalStorage } from 'react-use';

function Add() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [memoList, setMemoList] = useLocalStorage('memo-list');

  function appendMemo() {
    const newMemoList = [...memoList, { id: Date.now(), title, body: content }];

    setMemoList(newMemoList);
  }

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        id="outlined-basic"
        label="title"
        variant="outlined"
        style={{ marginBottom: '10px' }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="content"
        multiline
        rows={4}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <br />
      <Button variant="contained" onClick={appendMemo}>
        Add
      </Button>
    </form>
  );
}
export default Add;
