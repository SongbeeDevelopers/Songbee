import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import '../../AdminPortal.css'


function AdminDetaisDialog({ request }) {

  const dispatch = useDispatch()
  const history = useHistory()

  const genres = useSelector(store => store.genres)
  const requestData = useSelector(store => store.requestData)
  const { id } = useParams()

  const submitRequest = (event) => {
    event.preventDefault()
    dispatch({
      type: 'UPDATE_SONG_REQUEST',
      payload: {
        id: id,
        history: history,
        data: requestData,
      }
    })
  }

  return (
    <div className='admin-req-details-edit'>
      <h2>Edit Song Request Details</h2>

      <form className=''>
        <label>Who is Creating the Song?</label>
        <input
          value={request.requester}
          className='admin-portal-inputs'
          placeholder='You, the family, the team, etc.'
          onChange={() => handleInput('requester', event.target.value)}
        ></input>

        <label>Is this song for a Special Occasion?</label>
        <input
          value={request.occasion}
          className='admin-portal-inputs'
          placeholder='Type the Occasion Here'
          onChange={() => handleInput('occasion', event.target.value)}
        ></input>

        <label>Who is this Song For?</label>
        <input
          value={request.recipient}
          className='admin-portal-inputs'
          id='reqFormNameInput'
          placeholder='Name or Nickname'
          onChange={() => handleInput('recipient', event.target.value)}
        ></input>

        <input
          value={request.pronunciation}
          className='admin-portal-inputs'
          id='reqFormNameInput'
          placeholder='Pronunciation'
          onChange={() => handleInput('pronunciation', event.target.value)}
        ></input>

        <input
          value={request.recipient_relationship}
          className='admin-portal-inputs'
          placeholder='Relationship'
          onChange={() => handleInput('recipient_relationship', event.target.value)}
        ></input>

        <label>What inspired your song?</label>
        <input
          value={request.inspiration}
          className='admin-portal-inputs'
          placeholder='Inspiration'
          onChange={() => handleInput('inspiration', event.target.value)}
        ></input>

        <label>Choose a Genre</label>
        <select className='.admin-portal-inputs'
          value={request.genre}
          onChange={() => handleInput('genre_id', event.target.value)}
        >
          <option selected disabled>Select Genre</option>
          {
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))
          }
        </select>

        <label>Set the Vibe</label>
        <select className='.admin-portal-inputs'
          value={request.vibe}
          onChange={() => handleInput('vibe', event.target.value)}
        >
          <option selected disabled>Select Vibe</option>
          <option value="happy">Happy</option>
          <option value="lighthearted">Lighthearted</option>
          <option value="heartfelt">Heartfelt</option>
          <option value="romantic">Romantic</option>
          <option value="reflective">Reflective</option>
          <option value="somber">Somber</option>
        </select>

        <label>What Vocal Style Suits Your Song?</label>
        <select className='.admin-portal-inputs'
          value={request.vocal_type}
          onChange={() => handleInput('vocal_type', event.target.value)}
        >
          <option selected disabled>Select Style</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <label>Select a Tempo</label>
        <select className='.admin-portal-inputs'
          value={request.tempo}
          onChange={() => handleInput('tempo', event.target.value)}
        >
          <option selected disabled>Select Tempo</option>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Up-Tempo</option>
        </select>

        <label>Tell us what is most important to your song</label>
        <input
          value={request.important_what}
          className='admin-portal-inputs'
          placeholder='What?'
          onChange={() => handleInput('important_what', event.target.value)}
        ></input>

        <label>Tell us why it is so important</label>
        <input
          value={request.important_why}
          className='admin-portal-inputs'
          placeholder='Why?'
          onChange={() => handleInput('important_why', event.target.value)}
        ></input>

        <input
          value={request.story1}
          className='admin-portal-inputs'
          placeholder='Prompt 1'
          onChange={() => handleInput('story1', event.target.value)}
        ></input>
        <input
          value={request.story2}
          className='admin-portal-inputs'
          placeholder='Prompt 2'
          onChange={() => handleInput('story2', event.target.value)}
        ></input>

        <input
          className='.admin-portal-inputs'
          value={request.additional_info}
          placeholder='Additional Details'
          onChange={() => handleInput('additional_info', event.target.value)}
        ></input>

        <button
          className='reqFormSubmit'
          onClick={submitRequest}
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default AdminDetaisDialog;