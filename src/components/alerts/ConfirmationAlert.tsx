import React, { Dispatch, ReactNode, SetStateAction } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
  DialogActionNodes?: ReactNode;
};

const ConfirmationAlert = ({
  open,
  setOpen,
  children,
  title = "",
  DialogActionNodes = undefined,
}: Props) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="md"
    >
      {title && (
        <>
          <DialogTitle>{title}</DialogTitle>
          <Divider flexItem />
        </>
      )}
      <DialogContent
        sx={{ minWidth: { xs: "300px", sm: "400px", md: "550px" } }}
      >
        {children}
      </DialogContent>
      <Divider />
      {DialogActionNodes && <DialogActions>{DialogActionNodes}</DialogActions>}
    </Dialog>
  );
};

export default ConfirmationAlert;
