import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


import "./Header.css";
import { Logout } from "@mui/icons-material";


function Header() {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (num) => {
    setAnchorEl(null);
    if (num === 1) {
      history.push("/");
    } else if (num === 2) {
      history.push("/order");
    } else if (num === 3) {
      history.push("/join-artist");
    } else if (num === 4) {
      history.push("/faq");
    } else if (num === 5) {
      
    } else if (num === 6) {
      history.push("/user");
    } else if (num === 7) {
      history.push(`/admin`);
    }
  };
 
  return (
    <div className="nav">

      <Link to="/home">
        <img className="nav-title" src="header-icon.png"></img>
      </Link>
      <div className="nav-right">
        <Link
          onClick={(e) => {
            if (user?.id) {
              e.preventDefault();
              dispatch({ type: "LOGOUT" });
            }
          }}
          className="nav-links"
          to="/login"
        >
          {user?.id? "Logout" : "Login"}
        </Link>
        <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose()}><img className="drawerHeaderBee" src="bee-button.png"></img></MenuItem>
            <MenuItem onClick={() => handleClose(1)}>Home</MenuItem>
            {user.id && (
              <div>
              <MenuItem onClick={() => handleClose(6)}>My Profile</MenuItem>
              </div>
            )}
            {user.id && user.class === 3 && (
              <div>
              <MenuItem onClick={() => handleClose(7)}>Admin Page</MenuItem>
              </div>
            )}
            <MenuItem onClick={() => handleClose(2)}>Start Your Song</MenuItem>
            <MenuItem onClick={() => handleClose(3)}>Artist Application</MenuItem>
            <MenuItem onClick={() => handleClose(4)}>FAQ</MenuItem>
            <MenuItem onClick={() => handleClose(5)}><a href="mailto:hello@songbee.com">Contact Us</a></MenuItem>
            {/* If a user is logged in, show these links */}
           
          </Menu>
      </div>
    </div>
  );
}

export default Header;
