import { Avatar } from "@mui/material";
import React from "react";

type Props = {};

const AppLogo = (props: Props) => {
  return (
    <Avatar
      sx={{
        width: 150,
        height: 150,
        mx: "auto",
        backgroundColor: "#fff",
        color: "primary.main",
      }}
      src="/images/logo.svg"
      alt="company logo"
    />
  );
};

export default AppLogo;
