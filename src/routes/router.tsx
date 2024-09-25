import { createBrowserRouter } from "react-router-dom";
import React, { lazy } from "react";
// layouts
import MainLayout from "../components/layout/MainLayout";
// protected routes
import ProtectedRoutes from "../components/protectedRoutes/ProtectedRoutes";
// pages
import Home from "../pages/home/Home";

// lazy pages
const Login = lazy(() => import("../pages/login/Login"));

// all routes
const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
