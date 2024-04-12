import React from "react";
import { useSelector } from "react-redux";

import '../UserPortal.css'

function UserCreditTab() {

  const user = useSelector(store => store.user)

  return (
    <div className="tab-body">
      <div className="user-credit-tab">
        <p className="user-portal-credit">Credit balance: {user.credit === null ? "$0." : `$${user.credit}`}</p>
        <br/>
        <p>Questions?<br/>Please contact<br/><a href="mailto:hello@songbee.com">hello@songbee.com</a></p>
      </div>
    </div>
  )
}

export default UserCreditTab;
