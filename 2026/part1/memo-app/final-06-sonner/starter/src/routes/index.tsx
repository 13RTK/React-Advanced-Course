import { createFileRoute } from '@tanstack/react-router';
import MemoList from '../components/MemoList';

export const Route = createFileRoute('/')({
  component: MemoList,
});
