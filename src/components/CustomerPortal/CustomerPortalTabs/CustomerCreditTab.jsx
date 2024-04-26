import React from "react";
import { useState } from "react";

import { Button } from "@mui/material"

import '../CustomerPortal.css'

function CustomerCreditTab() {

  const [referralEmail, setReferralEmail] = useState('')

  const handleReferral = () => {
    // walker this is where you put the stripe thingy ;]
  }

  return (
    <div className="tab-body">
      <div className="user-credit-tab">
        <div className="user-portal-inputs">
        <input
          placeholder="Email address"
          type="email"
          onChange={(e) => { setReferralEmail(e.target.value) }}
        />
        <Button variant="contained"
          onClick={() => onClick = {handleReferral}}
          sx={{ height: 35, width: 80, m: 'auto', backgroundColor: "#feaf17", color: "black" }}
        >
          Refer!
        </Button>
        <br />
        <p>Questions?<br />Please contact<br /><a href="mailto:hello@songbee.com">hello@songbee.com</a></p>

        </div>
      </div>
    </div>
  )
}

export default CustomerCreditTab;
