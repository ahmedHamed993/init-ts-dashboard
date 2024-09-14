import { Divider, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
type Props = {};

const MainLayout = (props: Props) => {
  return (
    <Stack direction="row">
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default MainLayout;
