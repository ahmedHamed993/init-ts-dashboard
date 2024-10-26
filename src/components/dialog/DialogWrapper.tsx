import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
};

const DialogWrapper = ({ open, setOpen, children }: TProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      sx={{ ".MuiPaper-root": { minWidth: { xs: "290px", sm: "500px" } } }}
    >
      {children}
    </Dialog>
  );
};

export default DialogWrapper;

// sx={{ minWidth: { xs: "300px", sm: "400px", md: "550px" } }}
