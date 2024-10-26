import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <PageLayout containerStyles={{ alignItems: "center" }}>
      <Avatar
        variant="square"
        src="/images/404.svg"
        sx={{ width: { xs: 300, md: 500 }, height: "auto" }}
      />
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        sx={{ width: "fit-content" }}
      >
        العودة الي الصفحة السابقة
      </Button>
    </PageLayout>
  );
};

export default NotFound;
