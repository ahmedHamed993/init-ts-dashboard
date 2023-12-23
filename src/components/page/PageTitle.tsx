import React from 'react';
import { Typography } from '@mui/material';

const PageTitle = ({ title }: { title: string }) => {
  return (
    <Typography variant="h1" textAlign="center" fontSize="3rem">
      {title}
    </Typography>
  );
};

export default PageTitle;
