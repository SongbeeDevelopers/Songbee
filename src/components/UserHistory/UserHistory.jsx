import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



// This function will display the user's order history
function UserHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userRequests = useSelector((store) => store.userRequests);
    const user = useSelector((store) => store.user);

// Will useEffect and dispatch t call to the store
useEffect(() => {
    dispatch({type: 'FETCH_USER_REQUESTS' })
},[]);

const handleSongRequest = (id) => {
  history.push(`/details/${id}`)
}

// will need to get the user's song request
    return (
        <>
      <h2>Here is your status {user.username}</h2>
      
      {/* //Map over the request to display */}
      <div>
        {userRequests.map((request, i) => (
          <>
           <p key={i}> Your Song {new Date(request.created_at).toLocaleString('en-us')}</p> 
           <button className='detailsBtn' onClick={ () => handleSongRequest(request.id)}>Details</button>
           </>
              
        ))}
        {/* // The handle click will bring the user to the details page  where they can listen to their song
          // Also will have the ability purchase add ons
          */}
         
      </div>
     
      </> 
    )
}

export default UserHistory;