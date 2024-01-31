import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './UserDetails.css';

// This function will display the user's song request with a player so they can review 
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

    }, [ID.id])


    // This will display the user's requested song info
    return (
       <>
       
        <div className='container'>
          <h2 className='artistHeader'>Song Info:</h2>
            <p>{request.title}</p> 
            <p> By {request.artist}</p>   
           <audio controls src={request.url} ></audio>
           <h2 className='lyricsHeader'>Lyrics:</h2>
            <p>{request.lyrics}</p>
            <h2 className='detailsHeader'>The Basic Details:</h2>
            <p>Occasion: {request.occasion}</p>
            <p>Genre: {request.genre_id}</p>
            <p>Vibe: {request.vibe}</p>
            <p>Tempo: {request.tempo}</p>
        </div>
        <center>
        <h2 className='addOnHeader'>Add a custom keepsake</h2>
        </center>
       
      </>
    )


}

export default UserDetails;