import { createFileRoute } from '@tanstack/react-router';
import Add from '@/features/add/Add';

export const Route = createFileRoute('/add')({
  component: Add,
});
