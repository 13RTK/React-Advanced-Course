import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import ScoreList from './features/score/ScoreList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<ScoreList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
