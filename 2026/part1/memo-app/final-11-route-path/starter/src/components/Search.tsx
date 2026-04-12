import { TextField } from '@mui/material';
import { useState } from 'react';
import MemoList from './MemoList';
import { useNavigate } from '@tanstack/react-router';
import { Route } from '../routes/search';

function Search() {
  const { keyword } = Route.useSearch();
  const navigate = useNavigate();

  const [search, setSearch] = useState(keyword);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearch = event.target.value;

    setSearch(newSearch);
    navigate({
      to: '.',
      search: () => ({ keyword: newSearch }),
    });
  }

  return (
    <main style={{ textAlign: 'center' }}>
      <TextField
        sx={{ marginBottom: '10px', marginTop: '10px' }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleChange}
      />

      <MemoList search={search} />
    </main>
  );
}

export default Search;
