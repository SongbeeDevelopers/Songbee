import * as React from "react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

import '../UserPage.css'


function UserProfileTab() {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  
  const passwordRef = useRef("");
  const emailRef = useRef(user.email);

  // Handle function for the cancel button
  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/user");
  };

  // Handle function for the edit button
  const handleEdit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: {
        email: emailRef.current,
        password: passwordRef.current,
      },
    });
    history.push("/user");
  };

  // Handle function for the delete button
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_USER',
      payload: {id:user.id}
    })
    history.push('/user')
  }

  // This is for the dialog
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



  return (
    <div className="tab-body">

      <h2>Personal info</h2>
      <h3>{user.email}</h3>


        <Button sx={{ color: "black" }} onClick={handleOpen}>
          Edit Info
        </Button>

        {/* edit info dialogue */}
        <Dialog
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            width: 800,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ml: 20,
          }}
        >
          <Box
            sx={{
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
            }}
          >
            <h3>Would you like to make an edit ?</h3>

            <TextField
              sx={{
                margin: "5px",
                border: "2px solid",
                borderColor: "orange",
                borderRadius: "5px",
              }}
              name="email"
              type="text"
              size="small"
              placeholder="Email"
              defaultValue={emailRef.current}
              onChange={(e) => {
                emailRef.current = e.target.value;
              }}
            />

            <br />

            <TextField
              sx={{
                margin: "5px",
                border: "2px solid",
                borderColor: "orange",
                borderRadius: "5px",
              }}
              name="password"
              type="password"
              size="small"
              placeholder="Password"
              onChange={(e) => {
                passwordRef.current = e.target.value;
              }}
            />

            <div className="modalBtns">
              <Button
                type="submit"
                onClick={handleEdit}
                variant="contained"
                color="success"
                size="small"
              >
                Save
              </Button>
              <Button
                type="submit"
                onClick={handleCancel}
                variant="contained"
                color="secondary"
                size="small"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Dialog>
    </div>
  )
}

export default UserProfileTab