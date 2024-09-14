import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
// pages
import Home from '../pages/home/Home';
import Cities from '../pages/news/News';
// layouts
import MainLayout from "../components/layout/MainLayout"
// protected routes
import ProtectedRoutes from '../components/protectedRoutes/ProtectedRoutes';

// all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'news/',
        children: [
          {
            index: true,
            element: <Cities />,
          },
          {
            path: ':id',
            element: <p>edit NEWS</p>,
          },
          {
            path: 'add',
            element: <p>Add NEWS</p>,
          },
        ],
      },
      {
        path: 'users/',
        children: [
          {
            index: true,
            element: <p>users</p>,
          },
          {
            path: ':id',
            element: <p>edit user</p>,
          },
          {
            path: 'add',
            element: <p>Add user</p>,
          },
        ],
      },
      {
        path: 'hosts/',
        children: [
          {
            index: true,
            element: <p>hosts</p>,
          },
          {
            path: ':id',
            element: <p>edit host</p>,
          },
          {
            path: 'add',
            element: <p>Add host</p>,
          },
        ],
      },
      {
        path: 'programs/',
        children: [
          {
            index: true,
            element: <p>programs</p>,
          },
          {
            path: ':id',
            element: <p>edit program</p>,
          },
          {
            path: 'add',
            element: <p>Add program</p>,
          },
        ],
      },
      {
        path: 'banners/',
        children: [
          {
            index: true,
            element: <p>banners</p>,
          },
          {
            path: ':id',
            element: <p>edit banner</p>,
          },
          {
            path: 'add',
            element: <p>Add banner</p>,
          },
        ],
      },
      {
        path: 'settings/',
        children: [
          {
            index: true,
            element: <p>settings</p>,
          },
        ],
      },
    ],
  },
]);
export default router;
