import React from 'react';
import {useSelector} from 'react-redux';
import UserPageTabs from '../UserPageTabs/UserPageTabs';


function UserPage() {
  const user = useSelector((store) => store.user);
  
  // In here will source in MUI tabs for profile info, order history and credit balance
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <UserPageTabs />  
    </div>
  );

  
  
}

// this allows us to use <App /> in index.js
export default UserPage;
