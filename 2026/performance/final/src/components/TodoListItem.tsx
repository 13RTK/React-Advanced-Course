import type { Todo } from '../types/Todo';

function calculateExpensiveScore(todo: Todo) {
  let score = 0;

  for (let index = 0; index < 12000; index += 1) {
    score = (score + ((index * (todo.id + 11)) % 97)) % 100000;
  }

  return score;
}

function TodoListItem({ todo }: { todo: Todo }) {
  const expensiveScore = calculateExpensiveScore(todo);

  return (
    <li
      style={{
        marginBottom: '12px',
        border: '1px solid black',
        padding: '12px',
      }}
    >
      <strong>{todo.title}</strong>
      <div>score: {expensiveScore}</div>
    </li>
  );
}

export default TodoListItem;
