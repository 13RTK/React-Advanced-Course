import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Add from './components/Add';
import Search from './components/Search';
import MemoList from './components/MemoList';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemoList />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
          {/* TODO: Add Search route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
