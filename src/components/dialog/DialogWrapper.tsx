import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Dialog, DialogContent } from "@mui/material";
type TProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};

const DialogWrapper = ({ open, setOpen, children }: TProps) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
    >
      <DialogContent
        sx={{ minWidth: { xs: "300px", sm: "400px", md: "550px" } }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
