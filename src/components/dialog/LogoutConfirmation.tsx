import React, { Dispatch, SetStateAction, useState } from "react";
import DialogWrapper from "./DialogWrapper";
import { Button, Divider, Stack } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  confirmFn: () => void;
};

const LogoutConfirmation = ({ open, setOpen, confirmFn }: Props) => {
  return (
    <DialogWrapper open={open} setOpen={setOpen}>
      <h1>Are you sure you want to logout</h1>
      <Divider />
      <Stack direction="row" gap={2}>
        <Button onClick={confirmFn}>Logout</Button>
        <Button onClick={() => setOpen(false)}>Cancle</Button>
      </Stack>
    </DialogWrapper>
  );
};

export default LogoutConfirmation;
