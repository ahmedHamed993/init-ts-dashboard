import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  label: string;
  to: string;
};

const LinkButton = ({ label, to }: Props) => {
  return (
    <Button
      component={Link}
      to={to}
      variant="contained"
      sx={{ width: "fit-content" }}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
