import { createBrowserRouter } from 'react-router';
import Home from '../components/Home';
import About from '../components/About';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/about',
    Component: About,
  },
]);

export default router;
