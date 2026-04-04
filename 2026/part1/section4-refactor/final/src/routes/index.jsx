import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../features/home/Home';
import Forecast from '../features/forecast/Forecast';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'forecast',
        Component: Forecast,
      },
    ],
  },
]);

export default router;
