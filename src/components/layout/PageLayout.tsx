import React, { ReactNode } from "react";
import { Stack, Container, SxProps } from "@mui/material";
type Props = {
  children: ReactNode;
  layoutStyles?: SxProps;
  containerStyles?: SxProps;
};

const PageLayout = ({
  children,
  layoutStyles = {},
  containerStyles = {},
}: Props) => {
  return (
    <Stack
      sx={{
        backgroundColor: "rgb(240 246 255)",
        width: "100%",
        minHeight: "100vh",
        padding: { xs: "5rem 1rem 1rem 1rem", lg: "1rem" },
        ...layoutStyles,
      }}
    >
      <Container
        sx={{
          // backgroundColor: "rgb(250,250,250)",
          minHeight: "calc(100vh - 2rem)",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          ...containerStyles,
        }}
      >
        {children}
      </Container>
    </Stack>
  );
};

export default PageLayout;
