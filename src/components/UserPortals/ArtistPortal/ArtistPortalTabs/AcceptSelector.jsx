import { useDispatch } from "react-redux";
import { useState } from 'react';
import emailjs from '@emailjs/browser'

import {
  MenuItem,
  Select,
} from "@mui/material"
import Swal from "sweetalert2";

export default function AcceptSelector({ request }) {

  const dispatch = useDispatch()
  emailjs.init({
    publicKey: 'kh8qhjYSE2KhcvUoT'
  })

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
                type: "ACCEPT_REQUEST",
                payload: {id: request.details_id,
                        artist: request.artist_id}
              })
              const templateParams = {
                to_email: "walkerneudorff@gmail.com",
                to_name: "Walker Neudorff",
                message: "An artist has accepted your song request! We are now working hard on completing your song!"
              }
              emailjs.send('service_ttmod9n', 'template_mhzl217', templateParams).then(
                (response) => {
                  console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                  console.log('FAILED...', error);
                },
              );
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
                type: "DENY_REQUEST",
                payload: {id: request.details_id,
                    artist: request.artist_id}
              })
              Swal.fire("Done!", "", "success");
            }
          });
    }
  };

  return (
    <Select
      value={''}
      label="Accept/Deny"
      onChange={(event) => handleAccept(event.target.value)}
    >
      <MenuItem value={1}>Accept</MenuItem>
      <MenuItem value={2}>Deny</MenuItem>
    </Select>
  )
}
