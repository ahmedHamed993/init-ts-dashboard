import { Button, Divider, Stack } from '@mui/material';
import React from 'react';
type TProps = {
  title: string;
  description?: string;
  confirmFn: () => void;
  cancelFn: () => void;
};
const ConfirmationAlert = ({
  title,
  description = '',
  confirmFn,
  cancelFn,
}: TProps) => {
  return (
    <>
      <Stack pb={2}>
        <h4>{title}</h4>
        <p>{description}</p>
      </Stack>
      <Divider />
      <Stack direction="row" gap={2} pt={2}>
        <Button variant="outlined" onClick={confirmFn}>
          نعم
        </Button>
        <Button onClick={cancelFn}>لا</Button>
      </Stack>
    </>
  );
};

export default ConfirmationAlert;
