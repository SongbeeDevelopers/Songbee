import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import validator from "validator";
import Swal from "sweetalert2"

import '../UserPortal.css'


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
    if (validator.isEmail(email) && password.length > 7) {
      setInvalidEmail(false)
      setInvalidPassword(false)
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


  return (
    <div className="tab-body">
      <div className="user-portal-inputs">

        <div>
          <p>Email Address</p>
          <input
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          {invalidEmail && <p className="user-invalid-text">Please enter a valid email address.</p>}
        </div>

        <div>
          <p>Password</p>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          {invalidPassword && <p className="user-invalid-text">Password must be at least 8 characters.</p>}
        </div>

        <button className="user-portal-save" onClick={handleEdit}>
          Save
        </button>

      </div>
    </div>
  )
}

export default UserProfileTab
