import { TextField } from '@mui/material';
import MemoList from './MemoList';
import { useState } from 'react';

function Search() {
  const [searchItem, setSearchItem] = useState('');

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Memo Title"
        variant="outlined"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
      />
      <MemoList searchItem={searchItem} />
    </>
  );
}
export default Search;
