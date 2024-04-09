import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { motion } from 'framer-motion';

import './RequestDetails.css'


// This function will display the user's song request with a player so they can review their song
function RequestDetails({ routeVariants }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  // call to the store to the currentRequest reducer
  const request = useSelector((store) => store.currentRequest);

  useEffect(() => {
    console.log('expecting to get the id of song(s)', ID);
    dispatch({
      type: 'FETCH_CURRENT_REQUEST',
      payload: ID.id
    })
  }, [ID.id])

  
  return (
    <motion.div
      className='container'
      variants={routeVariants}
      initial="initial"
      animate="final"
    >
      <div className='songDetails'>
        {
          request.recipient && request.requester &&
          <h1>To {request.recipient}, from {request.requester}</h1>
        }

        {
          request.title && request.artist_name && request.url && request.lyrics ?
            <>
              <Typography sx={{ fontSize: 5 }} variant="h2" gutterBottom>
                <p className='songTitle'>{request.title}</p>
              </Typography>

              <Typography variant="h5" component="div">
                <p className='artistTitle'> By {request.artist_name}</p>
              </Typography>
              {request.url && <audio controls src={request.url} ></audio>}

              <div>
                {request.lyrics && <h2 className='lyricsHeader'>Lyrics:</h2>}
                {request.lyrics && <p>{`${request.lyrics}`}</p>}
              </div>
            </>
            :
            <p>Song in progress!</p>
        }
      </div>

      <div className='detailsContainer'>
        <h2 className='detailsHeader'>Your Song Details:</h2>
        <div className='detailsRow'>
          <div className='detailsItem'>
            <h2>Occasion:</h2>
            {
              request.occasion ?
                <p>{request.occasion}</p>
                :
                <p>No Occasion!</p>
            }
          </div>
          <div className='detailsItem2'>
            <h2>Inspiration:</h2>
            {request.inspiration ?
              <p>{request.inspiration}</p>
              :
              <p>No inspiration provided. Sad!</p>
            }
          </div>
        </div>

        <div className='detailsRow'>
          <div className='detailsItem'>
            <h2>Your story:</h2>
            {
              request.story1 ?
                <p>{request.story1}</p>
                :
                <p>First story not provided.</p>
            }
            {
              request.story2 ?
                <p>{request.story2}</p>
                :
                <p>Second story not provided.</p>
            }
          </div>

          <div className='detailsItem2'>
            <h2>The Importance:</h2>
            {
              request.important_what ?
                <p>{request.important_what}</p>
                :
                <p>What is important was not described.</p>
            }
            {
              request.important_why ?
                <p>{request.important_why}</p>
                :
                <p>Why it's imporant was not described.</p>
            }
          </div>
        </div>

        <div className='detailsRow'>
          <div className='detailsItem'>
            <h2>Song Parameters:</h2>
            {request.genre ?
              <p>Genre: {request.genre}</p>
              :
              <p>No genre provided.</p>
            }
            {
              request.vocal_type ?
                <p>Vocal type: {request.vocal_type}</p>
                :
                <p>No vocal type provided.</p>
            }
            {
              request.vibe ?
                <p>Vibe: {request.vibe}</p>
                :
                <p>No vibe provided.</p>
            }
            {
              request.tempo ?
                <p>Tempo: {request.tempo}</p>
                :
                <p>No tempo provided.</p>
            }
          </div>
          <div className='detailsItem2'>
            <h2>Additional Details:</h2>
            {
              request.additional_info ?
                <p>{request.additional_info}</p>
                :
                <p>Nope!</p>
            }
          </div>
        </div>
      </div>
      <button className="back-btn" onClick={() => history.goBack()}>Back</button>
    </motion.div>
  )
}

export default RequestDetails;
