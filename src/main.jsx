import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './views/home';
import List from './views/list';
import Population from './views/population';
import GDP from './views/gdp';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/list',
    element: <List />,
  },
  {
    path: '/population',
    element: <Population />,
  },
  {
    path: '/gdp',
    element: <GDP />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
