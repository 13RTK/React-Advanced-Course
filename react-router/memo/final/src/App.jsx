import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Add from './features/add/Add';
import Search from './features/search/Search';
import AppLayout from './ui/AppLayout';
import Home from './features/home/Home';
import Edit from './features/edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="/memo/:memoId" element={<Edit />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}
export default App;
