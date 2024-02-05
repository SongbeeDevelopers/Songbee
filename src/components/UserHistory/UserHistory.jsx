import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserHistory.css';



// This function will display the user's order history
function UserHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userRequests = useSelector((store) => store.userRequests);
    // const user = useSelector((store) => store.user);

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
      
      {/* //Map over the request to display */}
      {/* // The handle click will bring the user to the details page where they can listen to their song
          */}
      <div>
        {userRequests.map((request, i) => (
          <>
           <h2 className='recipientTitle'>Here is your song for {request.recipient} 🐝</h2>
           <p key={i}> Ordered On {new Date(request.created_at).toLocaleString('en-us')}</p> 

           <button className='detailsBtn' onClick={() => handleSongRequest(request.id)}>Details</button>
           </>
              
        ))}
        
          

      </div>
     
      </> 
    )
}

export default UserHistory;