import { useDispatch } from "react-redux";
import { useState } from 'react';

import {
  MenuItem,
  Select,
} from "@mui/material"
import Swal from "sweetalert2";

export default function UserClassSelector({ user }) {

  const dispatch = useDispatch()

  const [userClass, setUserClass] = useState(user.class)

  const updateUserClass = (value) => {
    Swal.fire({
      icon: "warning" ,
      title: "Reassign this user's class?",
      showCancelButton: true,
      confirmButtonText: "Reassign",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch({
          type: "UPDATE_USER_CLASS",
          payload: {
            id: user.id,
            data: value
          }
        })
        Swal.fire("Done!", "", "success");
      }
    });
  };

  return (
    <Select
      value={userClass}
      label="User Class"
      onChange={(event) => updateUserClass(event.target.value)}
    >
      <MenuItem value={1}>Customer</MenuItem>
      <MenuItem value={2}>Artist</MenuItem>
      <MenuItem value={3}>Admin</MenuItem>
    </Select>
  )
}
