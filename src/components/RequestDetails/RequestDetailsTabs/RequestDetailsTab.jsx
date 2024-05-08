import React from "react";

export default function RequestDetailsTab({ request }) {
  return (
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
  )
}
