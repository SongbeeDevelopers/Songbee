import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import RequestItem from './RequestItem';

import '../UserPage.css'


// This function will display the user's order history
function UserHistory() {

  const dispatch = useDispatch();
  const history = useHistory();

  const userRequests = useSelector((store) => store.userRequests);

  // retrieves request history on mount
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_REQUESTS' })
  }, []);


  return (
    <div className='tab-body'>
      <h2>Order History</h2>

      { userRequests.length > 0 ?
        // if requests exist
        <div>
          {userRequests.map((request, i) => (
            <RequestItem song={request} key={i} />
          ))}
        </div>
        :
        // if no requests
        <div>
          <h1 className='noRequests'>You have no song requests!</h1>
          <button onClick={() => { history.push('/order') }} className='userStartSong'>Start Your Song</button>
        </div>
      }
    </div>
  )
}

export default UserHistory;
