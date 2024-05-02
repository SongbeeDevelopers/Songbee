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
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import "./Header.css";
import LearningPacksHeader from "./LearningPacksHeader";

function Header() {
  const location = useLocation();

  const isMobile = useMediaQuery({ query: `(max-width: 815px)` });
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
      history.push("/");
    } else if (num === 2) {
      history.push("/order");
    } else if (num === 3) {
      history.push("/artist-community");
    } else if (num === 4) {
      history.push("/faq");
    } else if (num === 5) {
      // ?
    } else if (num === 6) {
      history.push("/user");
    } else if (num === 7) {
      history.push("/admin");
    } else if (num === 8) {
      history.push("/songbeejr");
    } else if (num === 9) {
      history.push("/faqSbJR");
    }
  };

  return location?.pathname === "/learning-packs" ? (
    <LearningPacksHeader />
  ) : (
    <>

      <div className="nav">

        <div className="nav-left">
          <Link to="/home"><img className="nav-title" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070470/Songbee/header-icon_gzi9s3.png"/></Link>
          |
          {/* <Link to="/songbeejr" className="nav-links">Songbee Junior</Link>
          | */}
          <Link to="/artists" className="nav-links">Artists</Link>
        </div>

       
        <div className="nav-right">

          {!isMobile &&
            <> <Link to="/order" className="start-your-song">Start your song</Link> | </>
          }
        
          {!isMobile && user.id && user.class === 3 &&
            <> <Link to="/admin" className="nav-links">Admin</Link> | </>
          }

          {!isMobile && user.id && user.class > 1 &&
            <> <Link to="/artist" className="nav-links">Artist</Link> | </>
          }

          {!isMobile && user.id && 
            <> <Link to="/user" className="nav-links">Account</Link> | </>
          }

          {!isMobile &&
            <> <Link to="/faq" className="nav-links">FAQ</Link> | </>
          }


          {/* login/logout */}
          <Link to="/login"

            className="nav-links"
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
             {user?.id ? "Logout" : "Login"}
          </Link>

          {/* admin, profile, FAQ */}

          {/* dropdown menu for mobile users */}
          {isMobile &&

            <>
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                sx={{ mr: -2 }}
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
                  <img className="drawerHeaderBee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070457/Songbee/bee-button_iwlxrg.png"></img>
                </MenuItem>

                <MenuItem onClick={() => handleClose(1)}>Home</MenuItem>

                {user.id && <MenuItem onClick={() => handleClose(6)}>My Profile</MenuItem>}
                
                {user.id && user.class === 3 && <MenuItem onClick={() => handleClose(7)}>Admin Page</MenuItem>}
                
                <MenuItem onClick={() => handleClose(2)}>Start Your Song</MenuItem>
                
                <MenuItem onClick={() => handleClose(3)}>Artist Application</MenuItem>
                
                <MenuItem onClick={() => handleClose(4)}>FAQ</MenuItem>
                
                <MenuItem onClick={() => handleClose(8)}>Songbee Jr</MenuItem>
                
                <MenuItem onClick={() => handleClose(9)}>FAQ Songbee JR</MenuItem>
                
                <MenuItem onClick={() => handleClose(5)}><a href="mailto:hello@songbee.com">Contact Us</a></MenuItem>
              </Menu>
            </>
          }
        </div>

      </div>
    </>
  );
}

export default Header;
