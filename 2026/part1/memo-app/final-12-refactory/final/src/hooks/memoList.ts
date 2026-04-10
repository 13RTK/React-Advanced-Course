import { useLocalStorage } from 'react-use';
import type { MemoItem } from '@/types/MemoItem';

export function useMemoList() {
  const [memoList, setMemoList] = useLocalStorage<MemoItem[]>('memo-list', []);

  return {
    memoList,
    setMemoList,
  };
}
