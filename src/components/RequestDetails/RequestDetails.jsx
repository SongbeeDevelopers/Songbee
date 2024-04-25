import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { motion } from 'framer-motion';

import './RequestDetails.css'


// This function will display the user's song request with a player so they can review their song
function RequestDetails({ routeVariants }) {

  const history = useHistory();
  const dispatch = useDispatch();
  const ID = useParams();

  // call to the store to the currentRequest reducer
  const request = useSelector((store) => store.currentRequest);
  console.log(request)

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
        {request.is_complete ?
        // displays when request is comlete
        <>
          <img className='bee-deco' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070457/Songbee/bee-button_iwlxrg.png'/>
          <h1>{request.title}</h1>
          <img className='bee-deco' src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070455/Songbee/bee-button-reversed_faxbyx.png'/>
          <img className='song-underline' src='junior/underline.png'/>
          <h3>Dedicated to <span>{request.recipient}</span> from {request.requester}</h3>
          <img className='artist-photo' src={request.photo}></img>
          <p>By {request.artist_name}</p>
          <audio controls src={request.url}/>
          <h2 className='lyricsHeader'>Lyrics:</h2>
          <p>{`${request.lyrics}`}</p>
        </>
        :
        // displays before completion
        <>
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
        </>
        }
        <button className="back-btn" onClick={() => history.goBack()}>Back</button>
      </div>

    </motion.div>
  )
}

export default RequestDetails;
