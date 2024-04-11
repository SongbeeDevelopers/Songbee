import React from 'react';
import { useSelector } from 'react-redux';

import { Card, CardContent } from "@mui/material"

import '../UserPage.css'


// This function will display the user's credit Balance
function UserCreditTab() {

   const user = useSelector((store) => store.user);

   return (
      <div className='tab-body'>
         <h2>Credit Balance</h2>
         <Card
         sx={{
            minWidth: 900,
            display: "flex",
            flexDirection: "row",
            outline: "#feaf17 solid 4px",
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
            backgroundColor: "#fff4df",
            p: 2
         }}
         >
         <CardContent sx={{m: "auto"}}>
            <div className="user-profile">
               <p>Your current credit balance is: {user.credit === null ? "$0." : `$${user.credit}.`}</p>
            </div>
         </CardContent>
         </Card>
      </div>
   )
}

export default UserCreditTab;
