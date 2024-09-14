import React, { ReactElement, ReactNode, useState } from 'react';
// react router
import { Outlet } from 'react-router';
// components
import SideDrawer from '../../components/drawer/SideDrawer';
// mui
import { Container, Stack } from '@mui/material';

const MainLayout = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  return (
    <Stack direction="row">
      {/* <Sidebar hideNavbar={hideNavbar} setHideNavbar={setHideNavbar} /> */}
      <SideDrawer />
      <Stack
        flex="1"
        sx={{
          maxHeigth: '100vh',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container>
          <Stack sx={{ paddingTop: { xs: '80px', md: '10px' } }}>
            <Outlet />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
