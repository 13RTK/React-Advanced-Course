import TodoList from './components/TodoList';
import { useTick } from './hooks/tick';

function App() {
  const tick = useTick();

  return (
    <main>
      <div
        style={{
          marginBottom: '16px',
          padding: '12px 16px',
          border: '1px solid #999',
        }}
      >
        <strong>Parent re-render tick:</strong> {tick}
      </div>

      <TodoList />
    </main>
  );
}

export default App;
