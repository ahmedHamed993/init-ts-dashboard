import { Button } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  disabled?: boolean;
};

const SubmitButton = ({ label, disabled }: Props) => {
  return (
    <Button
      disabled={disabled}
      variant="contained"
      sx={{ fontSize: "1.1rem" }}
      type="submit"
    >
      {label}
    </Button>
  );
};

export default SubmitButton;
