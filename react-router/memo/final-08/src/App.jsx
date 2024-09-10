import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Add from './components/Add';
import Search from './components/Search';
import MemoList from './components/MemoList';
import AppLayout from './components/AppLayout';
import MemoItem from './components/MemoItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/memo/:memoId" element={<MemoItem />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
