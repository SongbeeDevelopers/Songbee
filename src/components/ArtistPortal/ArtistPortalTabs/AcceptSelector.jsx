import { useDispatch } from "react-redux";
import { useState } from 'react';

import {
  MenuItem,
  Select,
} from "@mui/material"
import Swal from "sweetalert2";

export default function AcceptSelector({ request }) {

  const dispatch = useDispatch()

  const handleAccept = (value) => {
    if (value === 1){
        Swal.fire({
            icon: "warning" ,
            title: "Are you sure you want to accept this request?",
            showCancelButton: true,
            confirmButtonText: "Accept",
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
    } else if (value === 2){
        Swal.fire({
            icon: "warning" ,
            title: "Are you sure you want to deny this request?",
            showCancelButton: true,
            confirmButtonText: "Deny",
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
    }
  };

  return (
    <Select
      label="Accept/Deny"
      onChange={(event) => handleAccept(event.target.value)}
    >
      <MenuItem value={1}>Accept</MenuItem>
      <MenuItem value={2}>Deny</MenuItem>
    </Select>
  )
}
