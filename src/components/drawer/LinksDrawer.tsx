import React from 'react';
import { adminLinks } from './adminLinks';
// mui
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
const LinksDrawer = () => {
  return (
    <div>
      <List>
        {adminLinks.map((link, index) => (
          <ListItem key={link.path} disablePadding sx={{ color: 'white' }}>
            <ListItemButton component={Link} to={link.path}>
              <ListItemIcon
                sx={{ fontSize: '22px', minWidth: '32px', color: 'inherit' }}
              >
                {<link.icon />}
              </ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LinksDrawer;
