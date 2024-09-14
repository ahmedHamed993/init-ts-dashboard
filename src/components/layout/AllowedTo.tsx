import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { UserSliceState } from "../../types/types";
import NoItems from "../alerts/NoItems";
import { Navigate } from "react-router";

type Props = {
  allowedTo: number[];
  children: ReactNode;
};
// 1 => super admin
// 2 => organizer
// 3 => exhibitor
// 4 => customer
const AllowedTo = ({ allowedTo, children }: Props) => {
  const userData = useSelector((state: UserSliceState) => state.user.userData);
  const userRoles: number[] = userData.roles;
  const isAllowed = userRoles.some((role) => allowedTo.includes(role));

  return isAllowed ? (
    <>{children}</>
  ) : userRoles.includes(2) ? (
    <Navigate to="/" />
  ) : userRoles.includes(3) ? (
    <Navigate to="/exhibitor/events" />
  ) : (
    <NoItems />
  );
};

export default AllowedTo;
