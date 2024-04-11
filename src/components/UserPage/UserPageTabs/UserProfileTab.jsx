import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2"

import { Box } from "@mui/material"

import '../UserPage.css'


function UserProfileTab() {

  const dispatch = useDispatch()

  const user = useSelector((store) => store.user);

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(user.email)

  // changes validation
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

  return (
    <div className="tab-body">
      <div className="user-dialog-contents">
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

      </div>

      <div className="modalBtns">
        <button className="modal-save" onClick={handleEdit}>
          Save
        </button>
      </div>

      <p className="user-portal-credit">Credit balance: {user.credit === null ? "$0." : `$${user.credit}.`}</p>
    </div>
  )
}

export default UserProfileTab
