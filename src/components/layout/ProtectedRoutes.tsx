import React, { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
// react router
import { Navigate } from "react-router";
import { type UserSliceState } from "../../types/types";

const ProtectedRoutes = ({ children }: { children: ReactElement }) => {
  const userToken = useSelector(
    (state: UserSliceState) => state.user.userToken
  );
  return userToken ? <>{children}</> : <Navigate to="/auth/login" />;
};

export default ProtectedRoutes;
