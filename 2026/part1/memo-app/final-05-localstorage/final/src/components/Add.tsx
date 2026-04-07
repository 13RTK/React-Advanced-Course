import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useMemoList } from '../hooks/memoList';

function Add() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { memoList, setMemoList } = useMemoList();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const newMemoList = [
      ...(memoList || []),
      {
        id: Date.now(),
        title,
        content,
      },
    ];
    setMemoList(newMemoList);

    setTitle('');
    setContent('');
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
        Add
      </Button>
    </form>
  );
}

export default Add;
