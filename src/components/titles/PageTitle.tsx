import React from "react";
import { Typography } from "@mui/material";
type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <Typography variant="h3" sx={{ textAlign: "center" }}>
      {title}
    </Typography>
  );
};

export default PageTitle;
