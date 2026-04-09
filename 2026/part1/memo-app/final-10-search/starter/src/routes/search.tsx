import { TextField } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import MemoList from '../components/MemoList';

export const Route = createFileRoute('/search')({
  component: Search,
});

function Search() {
  const [search, setSearch] = useState('');

  return (
    <main style={{ textAlign: 'center' }}>
      <TextField
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <MemoList search={search} />
    </main>
  );
}
