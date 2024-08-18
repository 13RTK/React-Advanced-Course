import List from '@mui/material/List';
import MemoListItem from './MemoListItem';

import { useLocalStorage } from 'react-use';

export default function MemoList() {
  const [memoList] = useLocalStorage('memo-list', []);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {memoList.map((memoItem) => (
        <MemoListItem memoItem={memoItem} key={memoItem.id} />
      ))}
    </List>
  );
}
