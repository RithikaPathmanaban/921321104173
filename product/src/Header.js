import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer 
      variant="permanent"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f0f0f0'
        },
      }}
    >
      <Button onClick={toggleDrawer} style={{ marginLeft: 'auto', marginRight: '5px', marginTop: '5px' }}>X</Button>
      <h2>Pages</h2>
      <hr></hr>
      <List>
       
        <hr></hr>
        <ListItem button component={Link} to="/AllProducts">
          <ListItemText primary="All Products" />
        </ListItem>
        <hr></hr>
        <ListItem button component={Link} to="/SingleProduct">
          <ListItemText primary="SingleProduct" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Header;
