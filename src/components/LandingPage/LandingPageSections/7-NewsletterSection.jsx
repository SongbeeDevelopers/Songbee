import React from "react";

import { Button } from "@mui/material";

function NewsletterSection() {
  return (
    <div className="main-newsletter">
      <h2>Stay in the Loop!</h2>
      <p>Sign up for  15% off your first order!</p>
      <div className="main-newsletter-input">
        <input placeholder="email address"></input>
        <Button 
          variant="contained"
          sx={{ height: 35, width: 90, backgroundColor: "#feaf17", color: "black" }}
        > Sign Up
        </Button>
      </div>
    </div>
  )
}

export default NewsletterSection
