import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import validator from "validator";
import Swal from 'sweetalert2';

import { Modal, Box } from "@mui/material"


function EditUserModal({ user, open, handleClose }) {

  const dispatch = useDispatch()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(user.email)

  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  // submit changes
  const handleEdit = (event) => {
    event.preventDefault();

    // email invalid
    if (!validator.isEmail(email)) {
      setInvalidEmail(true)
    } else {
      setInvalidEmail(false)
    }
    // password invalid
    if (password.length < 8) {
      setInvalidPassword(true)
    } else {
      setInvalidPassword(false)
    }
    // success
    if (validator.isEmail(email) && password.length > 7 || validator.isEmail(email) && !password) {
      setInvalidEmail(false)
      setInvalidPassword(false)
      handleClose()
      Swal.fire({
        title: "Confirm Changes?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "UPDATE_USER",
            payload: {
              email: email,
              password: password,
            },
          });
          Swal.fire({
            title: "Changed!",
            text: "Your account has been updated.",
            icon: "success"
          });
        }
      });
    }
  };
 
  // delete account
  const handleDelete = (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_USER',
      payload: { id: user.id }
    })
    history.push('/user')
  }

  // modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="user-dialog-contents">
          <h2>Edit Your Info</h2>

          <input
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          {invalidEmail && <p>Please enter a valid email address.</p>}
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
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
      </Box>
    </Modal>
  )
}

export default EditUserModal
