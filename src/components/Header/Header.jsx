import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

import './Header.css';


function Header() {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user);

  // persistent drawer logic

  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className="nav">

      {/* <Toolbar> */}

        <Link to="/home">
          <img className="nav-title" src='header-icon.png'></img>
        </Link>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }),
            position: "absolute",
            right: '1.75rem'
          }}
        >
          <MenuIcon />
        </IconButton>
      {/* </Toolbar> */}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </DrawerHeader>
    
        <Divider />

        <List>

          {!user.id && (
            <ListItem disablePadding>
              <ListItemButton onClick={() => history.push("/login")}>
                  <ListItemText primary={'Login'} />
              </ListItemButton>
            </ListItem>
          )}

          {user.id && !user.admin && (
            <ListItemButton onClick={() => history.push("/user")}>
                <ListItemText primary={'Account'} />
              <div className='navSpacer'></div>
            </ListItemButton>
          )}

          {user.id && user.admin && (
            <ListItemButton onClick={() => history.push("/admin")}>
                <ListItemText primary={'Admin Page'} />
              <div className='navSpacer'></div>
            </ListItemButton>
          )}

          <ListItemButton onClick={() => history.push("/order")}>
              <ListItemText primary={'Start a Song'} />
            <div className='navSpacer'></div>
          </ListItemButton>

          <ListItemButton onClick={() => history.push("/artists")}>
              <ListItemText primary={'Artists'} />
            <div className='navSpacer'></div>
          </ListItemButton>

          <ListItemButton onClick={() => history.push("/about")}>
              <ListItemText primary={'About'} />
            <div className='navSpacer'></div>
          </ListItemButton>

          {user.id && (
            <ListItemButton onClick={() => dispatch({type: 'LOGOUT'})}>
                <ListItemText primary={'Logout'} />
              <div className='navSpacer'></div>
            </ListItemButton>
          )}
        
        </List>
      </Drawer>

    </div>
  );
}

export default Header;