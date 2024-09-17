import { TextField } from '@mui/material';
import MemoList from '../memo-list/MemoList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchItem, setSearchItem] = useState(searchParams.get('q') || '');

  function onChange(event) {
    const { value } = event.target;

    setSearchItem(value);
    setSearchParams({ q: value });
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Memo Title"
        variant="outlined"
        onChange={onChange}
        value={searchItem}
      />
      <MemoList searchItem={searchItem} />
    </>
  );
}
export default Search;
