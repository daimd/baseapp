// routes.js

import React from 'react';
import LoginPage from '../pages/Login/LoginPage';
import DashboardPage from '..//pages/Dashboard/DashboardPage';
import ProtectedRoute from '../hocs/ProtectedRoutes';
import HomePage from '../pages/Home/HomePage';
import AppLayout from '../components/layouts/AppLayout';
import ProductPage from '..//pages/Product/ProductPage';
import Unauthorized from '../components/common/Unauthorized';

const appRoutes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          { path: '/dashboard', element: <ProtectedRoute component={DashboardPage} roles={['admin']} /> },
          { path: '/home', element: <ProtectedRoute component={HomePage} roles={['user']} /> },
          { path: '/product', element: <ProtectedRoute component={ProductPage} roles={['admin']} /> },
          { path: '/unauthorized', element: <Unauthorized /> },
        ],
      },
    ],
  },
  
];
console.log('appRoutes=============>:', appRoutes); // Log the appRoutes configuration
export default appRoutes;



