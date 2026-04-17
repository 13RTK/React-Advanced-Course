import { useState } from 'react';
import type { Todo } from '../types/Todo';
import TodoListItem from './TodoListItem';
import { useAddTodo } from '../hooks/todo';

const TOTAL_INITIAL_TODOS = 120;

function createInitialTodos(): Todo[] {
  return Array.from({ length: TOTAL_INITIAL_TODOS }, (_, index) => {
    const id = index + 1;

    return {
      id,
      title: `Todo ${id}`,
      completed: id % 4 === 0,
      content: `Demo item ${id} with stable props for compiler testing.`,
    };
  });
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(() => createInitialTodos());
  const { newTodoTitle, setNewTodoTitle, handleAddTodo } = useAddTodo(setTodos);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <input
          type="text"
          placeholder="Add a todo title"
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleAddTodo();
            }
          }}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul style={{ paddingLeft: '20px' }}>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
