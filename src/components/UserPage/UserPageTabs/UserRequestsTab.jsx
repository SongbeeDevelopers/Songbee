import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Card, CardContent } from '@mui/material'

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

  const startSong = () => {
    history.push('/order')
  }


  return (
    <div className='tab-body'>

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
         <Card
            sx={{
            minWidth: 900,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 2,
            mb: 3,
            p: 2
         }}
         >
         <CardContent sx={{m: "auto"}}>
            <h2>You have no song requests!</h2>
            <button onClick={startSong} className='user-button'>Start Your Song</button>
         </CardContent>
         </Card>
      </div>
      }
    </div>
  )
}

export default UserHistory;
