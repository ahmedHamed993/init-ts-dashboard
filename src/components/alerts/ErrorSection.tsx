import React from "react";
import { Stack, Typography } from "@mui/material";
import { MdErrorOutline } from "react-icons/md";

type Props = {
  errorMsg?: string;
};

const ErrorSection = ({ errorMsg = "" }: Props) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap="16px"
      marginTop="3rem"
    >
      <MdErrorOutline size={128} color="#d32f2f" />
      <Typography variant="h3" color="#d32f2f">
        حدث خطأ
      </Typography>
      <Typography variant="h4">{errorMsg}</Typography>
    </Stack>
  );
};

export default ErrorSection;
