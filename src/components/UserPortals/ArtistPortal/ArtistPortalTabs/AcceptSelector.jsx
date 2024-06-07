import { useDispatch, useSelector } from "react-redux";
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

  const artistProfile = useSelector((store) => store.artistProfile);


  const handleAccept = (value) => {
    if (value === 1) {
      Swal.fire({
        icon: "warning",
        title: "Are you sure you want to accept this request?",
        showCancelButton: true,
        confirmButtonText: "Accept",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log('id:', request.details_id)
          console.log('artist:', request.artist_id)
          console.log('vocal_type:', artistProfile.vocal_type)
          dispatch({
            type: "ACCEPT_REQUEST",
            payload: {
              id: request.details_id,
              artist: artistProfile
            }
          })
          const templateParams1 = {
            to_email: request.email,
            to_name: request.email,
            message: "An artist has accepted your song request! We are now working hard on completing your song!"
          }
          emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams1)
          const templateParams2 = {
            to_email: "hello@songbee.com",
            to_name: "Songbee Admins",
            message: `${artistProfile.name} has accepted a request from ${request.email}! Log into the Admin Portal to view more details`
          }
          emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams2)
          Swal.fire("Done!", "", "success");
        }
      });
    } else if (value === 2) {
      Swal.fire("Denied!", "The request will disappear when another artist claims it.", "success");
      // Swal.fire({
      //   icon: "warning",
      //   title: "Are you sure you want to deny this request?",
      //   showCancelButton: true,
      //   confirmButtonText: "Deny",
      // }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        // if (result.isConfirmed) {
        //   dispatch({
        //     type: "DENY_REQUEST",
        //     payload: {
        //       id: request.details_id,
        //       artist: request.artist_id,
        //       vocal_type: artistProfile.vocal_type
        //     }
        //   })
          // Swal.fire("Done!", "", "success");
        // }
      // });
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
