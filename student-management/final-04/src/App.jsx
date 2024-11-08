import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ScoreList from './features/score/ScoreList';
import StudentList from './features/student/StudentList';

import AppLayout from './ui/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Navigate to="/score" />} />
          <Route path="/score" element={<ScoreList />} />
          <Route path="/student" element={<StudentList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
