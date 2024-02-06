import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import "./Header.css";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // persistent drawer logic

  const [open, setOpen] = useState(false);
  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
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
        <img className="nav-title" src="header-icon.png"></img>
      </Link>

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{
          ...(open && { display: "none" }),
          position: "absolute",
          right: "2rem",
        }}
      >
        <MenuIcon />
      </IconButton>
      {/* </Toolbar> */}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader
          sx={{
            bgcolor: "#feaf17",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <img className="drawerHeaderBee" src="bee-button.png"></img>
        </DrawerHeader>

        <Divider />

        <List
          sx={{
            bgcolor: "#fff4df",
          }}
        >
          {!user.id && (
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleDrawerClose();
                  history.push("/login");
                }}
              >
                <ListItemText primary={"Login"} />
              </ListItemButton>
            </ListItem>
          )}

          {user.id && user.class === 2 && (
            <ListItemButton
              onClick={() => {
                handleDrawerClose();
                history.push("/artistpage");
              }}
            >
              <ListItemText primary={"Artist Page"} />
              <div className="navSpacer"></div>
            </ListItemButton>
          )}

          {user.id && user.class === 3 && (
            <ListItemButton
              onClick={() => {
                handleDrawerClose();
                history.push("/admin");
              }}
            >
              <ListItemText primary={"Admin Page"} />
              <div className="navSpacer"></div>
            </ListItemButton>
          )}

          {user.id && (
            <>
              <ListItemButton
                onClick={() => {
                  handleDrawerClose();
                  history.push("/user");
                }}
              >
                <ListItemText primary={"User Page"} />
                <div className="navSpacer"></div>
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  handleDrawerClose();
                  history.push("/join-artist");
                }}
              >
                <ListItemText primary={"Join as Artist"} />
                <div className="navSpacer"></div>
              </ListItemButton>
            </>
          )}

          <ListItemButton
            onClick={() => {
              handleDrawerClose();
              history.push("/order");
            }}
          >
            <ListItemText primary={"Start a Song"} />
            <div className="navSpacer"></div>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              handleDrawerClose();
              history.push("/artists");
            }}
          >
            <ListItemText primary={"Artists"} />
            <div className="navSpacer"></div>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              handleDrawerClose();
              history.push("/faq");
            }}
          >
            <ListItemText primary={"FAQ"} />
            <div className="navSpacer"></div>
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              handleDrawerClose();
              history.push("/about");
            }}
          >
            <ListItemText primary={"About"} />
            <div className="navSpacer"></div>
          </ListItemButton>

          {user.id && (
            <ListItemButton
              sx={{
                position: "fixed",
                bottom: 0,
                width: drawerWidth,
                bgcolor: "#feaf17",
              }}
              onClick={() => {
                handleDrawerClose();
                dispatch({ type: "LOGOUT" });
              }}
            >
              <ListItemText primary={"Logout"} />
              <div className="navSpacer"></div>
            </ListItemButton>
          )}
        </List>
      </Drawer>
    </div>
  );
}

export default Header;
