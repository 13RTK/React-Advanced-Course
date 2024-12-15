import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import ScoreList from './features/score/ScoreList';
import ScoreEdit from './features/score/ScoreEdit';
import StudentList from './features/student/StudentList';
import StudentEdit from './features/student/StudentEdit';
import Info from './features/user/Info';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import ScoreUpload from './features/score/ScoreUpload';
import StudentCreate from './features/student/StudentCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" element={<Navigate to="/home/score" />} />
          <Route path="home" element={<Home />}>
            <Route path="score">
              <Route path="" element={<ScoreList />} />
              <Route path=":id" element={<ScoreEdit />} />
              <Route path="upload" element={<ScoreUpload />} />
            </Route>
            <Route path="student">
              <Route path="" element={<StudentList />} />
              <Route path=":id" element={<StudentEdit />} />
              <Route path="create" element={<StudentCreate />} />
            </Route>
            <Route path="info" element={<Info />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
