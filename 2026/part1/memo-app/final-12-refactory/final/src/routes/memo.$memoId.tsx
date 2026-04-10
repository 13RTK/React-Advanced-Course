import { createFileRoute } from '@tanstack/react-router';
import MemoItem from '../features/edit/MemoItem';

export const Route = createFileRoute('/memo/$memoId')({
  component: MemoItem,
});
