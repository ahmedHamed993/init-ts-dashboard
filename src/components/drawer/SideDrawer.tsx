import React, { ReactElement, useState } from "react";
// mui
import {
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  AppBar,
} from "@mui/material";
// icons
import { CgMenuRight } from "react-icons/cg";
// components
import LinksDrawer from "./LinksDrawer";
import LogoutButton from "../buttons/LogoutButton";
import AppLogo from "./AppLogo";
// utils
import { APP_NAME } from "../../utils/app-info";

const drawerWidth = 280;
const SideDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Remove this const when copying and pasting into your project.
  return (
    <Box sx={{ display: "flex" }}>
      {/* app bar appears in small screen  */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          display: { xs: "flex", md: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <CgMenuRight />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
      {/* side bar in large screen  */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={<Container />}
          variant="temporary"
          SlideProps={{
            direction: "left",
          }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
            },
          }}
        >
          <AppLogo />
          <LinksDrawer />
          <LogoutButton />
        </Drawer>

        <Drawer
          variant="permanent"
          SlideProps={{
            direction: "left",
          }}
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "primary.main",
            },
          }}
          open
        >
          <AppLogo />
          <LinksDrawer />
          <LogoutButton />
        </Drawer>
      </Box>
    </Box>
  );
};

export default SideDrawer;
