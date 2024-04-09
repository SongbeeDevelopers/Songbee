import React from "react";
import { useRef, useState } from "react";
import validator from "validator";

import { Dialog, Slide } from "@mui/material"


function EditUserModal({ user, open, handleClose }) {

  const passwordRef = useRef("");
  const emailRef = useRef(user.email);

  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  // Handle function for the edit button
  const handleEdit = (event) => {
    event.preventDefault();

    if (validator.isEmail(emailRef)) {
      console.log('nice')
    }
    // dispatch({
    //   type: "UPDATE_USER",
    //   payload: {
    //     email: emailRef.current,
    //     password: passwordRef.current,
    //   },
    // });
    // history.push("/user");
  };
 
  // Handle function for the delete button
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_USER',
      payload: { id: user.id }
    })
    history.push('/user')
  }

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  return (
    <Dialog
      open={open}
      keepMounted
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="user-dialog-contents">
        <h2>Edit Your Info</h2>

        <input
          placeholder="Email"
          defaultValue={emailRef.current}
          onChange={(e) => { emailRef.current = e.target.value }}
        />
        {invalidEmail && <p>Please enter a valid email address.</p>}
        <input
          placeholder="Password"
          onChange={(e) => { passwordRef.current = e.target.value }}
        />
        {invalidPassword && <p>Password must be at least 8 characters.</p>}

        <div className="modalBtns">
          <button className="modal-save" onClick={handleEdit}>
            Save
          </button>

          <button className="modal-cancel" onClick={handleClose}>
            Cancel
          </button>
        </div>

      </div>
    </Dialog>
  )
}

export default EditUserModal
