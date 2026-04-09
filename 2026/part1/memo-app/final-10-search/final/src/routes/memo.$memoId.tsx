import { createFileRoute } from '@tanstack/react-router';
import MemoItem from '../components/MemoItem';

export const Route = createFileRoute('/memo/$memoId')({
  component: MemoItem,
});
