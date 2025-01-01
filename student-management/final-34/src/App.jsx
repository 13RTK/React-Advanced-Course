import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { DevTools } from 'jotai-devtools';
import 'jotai-devtools/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Login from './features/auth/Login';
import Signup from './features/auth/Signup';

import ScoreList from './features/score/ScoreList';
import ScoreEdit from './features/score/ScoreEdit';
import ScoreUpload from './features/score/ScoreUpload';

import StudentList from './features/student/StudentList';
import StudentEdit from './features/student/StudentEdit';
import StudentCreate from './features/student/StudentCreate';

import Info from './features/user/Info';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import PageNotFound from './ui/PageNotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Navigate to="/home/score" />} />
            <Route path="home" element={<Home />}>
              <Route path="" element={<Navigate to="/home/score" />} />
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
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <DevTools />

      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
export default App;
