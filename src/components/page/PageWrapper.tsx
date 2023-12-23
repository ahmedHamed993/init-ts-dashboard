import React, { ReactNode } from 'react';
import { Container, Stack } from '@mui/material';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <Container>
        <Stack gap="24px" sx={{ paddingY: '24px' }}>
          {children}
        </Stack>
      </Container>
    </Stack>
  );
};

export default PageWrapper;
