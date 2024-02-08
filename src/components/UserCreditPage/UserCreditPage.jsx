import React from 'react';
import { useSelector } from 'react-redux';
import './UserCreditPage.css';


// This function will display the user's credit Balance
function UserCreditPage() {

 const user = useSelector((store) => store.user);

 return (
    <div className='creditBody'>
     <h2>Hello, {user.username}</h2>
     <p>Your current credit balance is: {user.credit === null ? "$0" : user.credit }</p>
    </div>
 )
}

export default UserCreditPage;