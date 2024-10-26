import { Stack } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FiltersContainer = ({ children }: Props) => {
  return (
    <Stack direction="row" gap="16px" flexWrap="wrap">
      {children}
    </Stack>
  );
};

export default FiltersContainer;
