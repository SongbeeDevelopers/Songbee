import React from "react";
import { useState } from "react";

import { Button } from "@mui/material"

import './JuniorGifting.css'

export default function JuniorGifting() {

    const sendGift = (amount) => {
        // stripe route
    }

  return (
    <div className="tab-body jrgifting">
      <div className="user-credit-tab">
        <h2>Send A Gift!</h2>
        <br/>
        <div className="giftingbuttons">
        <Button variant="contained"
          onClick={() => sendGift(25)}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        >
          $25
        </Button>
        <Button variant="contained"
          onClick={() => sendGift(55)}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        >
          $55
        </Button>
        <Button variant="contained"
          onClick={() => sendGift(80)}
          sx={{ height: 35, width: 80, backgroundColor: "#feaf17", color: "black" }}
        >
          $80
        </Button>
        </div>
        <p>Questions?<br />Please contact<br /><a href="mailto:hello@songbee.com">hello@songbee.com</a></p>
        <br/>
      </div>
    </div>
  )
}
