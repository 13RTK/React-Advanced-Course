import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/Login';
import ScoreList from './features/score/ScoreList';
import StudentList from './features/student/StudentList';

import AppLayout from './ui/AppLayout';
import Signup from './features/auth/Signup';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Navigate to="/home/score" />} />
          <Route path="home" element={<Home />}>
            <Route path="score" element={<ScoreList />} />
            <Route path="student" element={<StudentList />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
