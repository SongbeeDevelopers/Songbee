import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// This function will display the user's song details with a player so they can review 
// their song

function UserDetails() {
    const dispatch = useDispatch();
    const ID = useParams();
    // call to the store to the currentRequest reducer, request = useSelector store.currentRequest
    const request = useSelector((store) => store.currentRequest)

    useEffect(() => {
        console.log('expecting to get the id of song(s)', ID);
        dispatch({
            type: 'FETCH_CURRENT_REQUEST',
            payload: ID.id
        })

    }, [])

    // Also will links for the user to have the ability to purchase add ons
    return (
        <div className='audioPlayer'>
           <audio controls src={request.url}></audio>  

        </div>
    )


}

export default UserDetails;