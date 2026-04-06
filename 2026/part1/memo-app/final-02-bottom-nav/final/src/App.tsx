import BottomNav from './components/BottomNav';
import MemoList from './components/MemoList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main
        style={{
          marginBottom: '56px',
          marginTop: '56px',
        }}
      >
        <MemoList />
      </main>
      <BottomNav />
    </>
  );
}

export default App;
