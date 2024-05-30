import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validator from 'validator';

import { Button } from "@mui/material";
import Swal from "sweetalert2";


function JrNewsletterSection() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')

  const submitEmail = () => {
    // checks if email is valid
    if (validator.isEmail(email)) {
      // adds email to list
      dispatch({type: 'ADD_EMAIL', payload: {email_address: email}})
      Swal.fire({
        title: "Subscribed!",
        text: "You are now on the mailing list.",
        icon: "success"
      });
    } else {
      // error message if invalid
      Swal.fire({
        title: 'Invalid email',
        icon: 'error'
      })
    }
  }

  return (
    <div className="jr-newsletter">
      <h2>Easy as 1, 2, 3...</h2>
      <p>Sign up for 15% off your first order!</p>
      <div className="newsletter-input-button">
        <input
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(event.target.value)}
        ></input>
        <Button 
          variant="contained"
          onClick={submitEmail}
          sx={{ height: 35, width: 90, backgroundColor: "#feaf17", color: "black" }}
        > Sign Up
        </Button>
      </div>
    </div>
  );
}

export default JrNewsletterSection;
