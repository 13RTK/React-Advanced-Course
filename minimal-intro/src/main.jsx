import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
