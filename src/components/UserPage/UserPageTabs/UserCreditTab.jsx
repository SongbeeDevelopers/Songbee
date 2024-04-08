import React from 'react';
import { useSelector } from 'react-redux';

import '../UserPage.css'


// This function will display the user's credit Balance
function UserCreditTab() {

   const user = useSelector((store) => store.user);

   return (
      <div className='tab-body'>
         <h2>Credit Balance</h2>
         <p>Your current credit balance is: {user.credit === null ? "$0." : `$${user.credit}.`}</p>
      </div>
   )
}

export default UserCreditTab;
