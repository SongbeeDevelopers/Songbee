import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useMediaQuery } from "react-responsive";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Swal from "sweetalert2";

import './JrHeader.css'


function JrHeader() {

  const isMobile = useMediaQuery({ query: `(max-width: 900px)` })
  const isMobileSmall = useMediaQuery({ query: `(max-width: 700px)` })
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // dropdown logic
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (num) => {
    setAnchorEl(null);
    if (num === 1) {
      history.push("/songbeejr");
    } else if (num === 2) {
      history.push("/gifting");
    } else if (num === 3) {
      history.push("/jr-faq");
    } else if (num === 4) {
      history.push("/faq");
    } else if (num === 5) {
      history.push("/learning-packs")
    } else if (num === 6) {
      history.push("/schools");
    } else if (num === 7) {
      history.push("/jrcheckout");
    }
  };

  return (
    <div className="jr-nav-container">
      <div className="jr-nav-center">
        <Link to="/songbeejr"><img className="jr-nav-title" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076598/Songbee/jr-logo_f9dxxu.png" /></Link>
      </div>

      <div className="jr-nav">
        <div className="jr-nav-left">
          {!isMobileSmall &&
            <>
              <Link to="/learning-packs" className="jr-nav-links">Learning Packs</Link>
              |
            </>
          }
          {!isMobile &&
            <>
              <Link to="/gifting" className="jr-nav-links">Gifting</Link>
              |
            </>
          }
          {!isMobileSmall &&
            <>
              <Link to="/schools" className="jr-nav-links">Schools & Groups</Link>
            </>
          }
        </div>
        <div className="nav-right">
          {!isMobile && user.id && user.class === 3 &&
            <> <Link to="/admin" className="nav-links">Admin</Link> | </>
          }
          {!isMobile && user.id &&
            <> <Link to="/user" className="nav-links">Account</Link> | </>
          }
          <div className="jr-nav-right">
            {!isMobileSmall &&
              <button id="jr-header-btn" className="jr-landing-btn" onClick={() => history.push('/jrcheckout')}>
                Get Started
              </button>
            }
          </div>

          {/* login/logout */}
          <Link to="/login"
            className="jr-nav-links"
            onClick={(e) => {
              if (user?.id) {
                e.preventDefault();
                Swal.fire({
                  title: "Do you want to log out?",
                  showCancelButton: true,
                  confirmButtonText: "Yes",
                  icon: 'warning'
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch({ type: "LOGOUT" });
                  }
                });
              }
            }}
          >
          </Link>

          {/* dropdown menu for mobile users */}
          {isMobile &&
            <div>
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                sx={{ mr: -2, zIndex: 2000 }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenu}
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
                <MenuItem onClick={() => handleClose()}>
                  <img className="jr-drawerHeaderBee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070457/Songbee/bee-button_iwlxrg.png"></img>
                </MenuItem>
                <MenuItem onClick={() => handleClose(1)}>Home</MenuItem>
                {isMobileSmall &&
                  <>
                    <MenuItem onClick={() => handleClose(7)}>Get Started</MenuItem>
                    <MenuItem onClick={() => handleClose(5)}>Learning Packs</MenuItem>
                    <MenuItem onClick={() => handleClose(6)}>Schools & Groups</MenuItem>
                  </>
                }
                <MenuItem onClick={() => handleClose(2)}>Gifting</MenuItem>
                <MenuItem onClick={() => handleClose(3)}>FAQ</MenuItem>
                <MenuItem onClick={() => handleClose(4)}><a href="mailto:hello@songbee.com">Contact Us</a></MenuItem>
              </Menu>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default JrHeader
