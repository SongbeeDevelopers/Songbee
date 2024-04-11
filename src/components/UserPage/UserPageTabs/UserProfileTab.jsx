import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import EditUserModal from "./EditUserModal";

import { Card, CardContent } from '@mui/material';

import '../UserPage.css'


function UserProfileTab() {

  const user = useSelector((store) => store.user);

  // modal state
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return (
    <div className="tab-body">

      <Card
        sx={{
          minWidth: 900,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          mb: 3,
          p: 2,
          backgroundColor: "#fff4df",
        }}
      >
        <CardContent sx={{ m: "auto" }}>
          <div className="user-profile">
            <p>Email: {user.email}</p>
            <button className="user-button" onClick={handleOpen}>Edit Info</button>
          </div>
        </CardContent>
      </Card>

      <EditUserModal
        user={user}
        open={open} 
        handleClose={handleClose}
      />
    </div>
  )
}

export default UserProfileTab
