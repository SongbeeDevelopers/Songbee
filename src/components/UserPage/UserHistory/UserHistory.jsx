import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RequestItem from '../../RequestItem/RequestItem';

import './UserHistory.css';


// This function will display the user's order history
function UserHistory() {

    const dispatch = useDispatch();
    const history = useHistory();

    const userRequests = useSelector((store) => store.userRequests);

    // Will useEffect and dispatch call to the store
    useEffect(() => {
        dispatch({type: 'FETCH_USER_REQUESTS' })
    },[]);

    // will need to get the user's song request
    return (
      <div className='historyBody'>
        {/* Map over the request to display */}
        {/* The handle click will bring the user to the details page where they can listen to their song */}
        {/* displays text if no requests exist */}

        {
          userRequests.length > 0 ?
          <div className='requestContainer'>
            {userRequests.map((request, i) => (
              <RequestItem song={request} key={i} />
            ))}
          </div>
          :
          <>
            <h1 className='noRequests'>You have no song requests!</h1>
            <button onClick={() => {history.push('/order')}} className='userStartSong'>Start Your Song</button>
          </>
        }
      </div> 
    )
}

export default UserHistory;