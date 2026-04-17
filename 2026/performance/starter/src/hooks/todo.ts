import { useState } from 'react';
import type { Todo } from '../types/Todo';

export function useAddTodo(
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
) {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  function handleAddTodo() {
    const trimmedTitle = newTodoTitle.trim();

    if (!trimmedTitle) {
      return;
    }

    setTodos((currentTodos: Todo[]) => [
      ...currentTodos,
      {
        id: Date.now(),
        title: trimmedTitle,
        completed: false,
        content: 'New todo item',
      },
    ]);
    setNewTodoTitle('');
  }

  return {
    newTodoTitle,
    setNewTodoTitle,
    handleAddTodo,
  };
}
