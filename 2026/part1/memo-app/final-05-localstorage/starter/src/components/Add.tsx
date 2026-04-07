import { Button, TextField } from '@mui/material';
import { useState } from 'react';

function Add() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <form style={{ textAlign: 'center' }}>
      <TextField
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        id="outlined-basic"
        label="title"
        variant="outlined"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <br />

      <TextField
        id="outlined-multiline-static"
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        label="content"
        multiline
        rows={4}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <br />
      <Button variant="contained" size="large">
        Add
      </Button>
    </form>
  );
}

export default Add;
