import React, { ReactElement, useState } from 'react';
// react router
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const [isAuth, setIsAuth] = useState(true);
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
