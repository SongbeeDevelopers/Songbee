import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './SongRequestPage.css'

function SongRequestPage() {

  const dispatch = useDispatch()
  const history = useHistory()

  const genres = useSelector(store => store.genres)
  const requestData = useSelector(store => store.requestData)
  const { id } = useParams()

  useEffect(() => {
    dispatch({type: 'FETCH_GENRES'})
  }, [])

  const handleInput = (key, value) => {
    dispatch({
      type: 'SET_REQUEST_DATA',
      payload: {...requestData, [key]: value}
    })
  }

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
    <div className="container">
      <form className='reqForm'>
        <h1 className='reqFormHeader'>Who is Creating the Song?</h1>
        <h4 className='reqFormSubHeader'>Who gets the creds for getting the song?</h4>
        <input 
          value={requestData.requester}
          className='reqFormInput' 
          placeholder='You, the family, the team, etc.'
          onChange={() => handleInput('requester', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Who is this Song For?</h1>
        <h4 className='reqFormSubHeader'>Our songs make amazing gifts, but they don't have to be only for gifting.</h4>
        <input
          value={requestData.recipient}
          className='reqFormInput'
          placeholder='Name or Nickname'
          onChange={() => handleInput('recipient', event.target.value)}
        ></input>
        <input
          value={requestData.pronunciation}
          className='reqFormInput'
          placeholder='Pronunciation'
          onChange={() => handleInput('pronunciation', event.target.value)}
        ></input>
        <input
          value={requestData.recipient_relationship}
          className='reqFormInput'
          placeholder='Relationship'
          onChange={() => handleInput('recipient_relationship', event.target.value)}

        ></input>

        <h1 className='reqFormHeader'>Is this song for a Special Occasion?</h1>
        <input
          value={requestData.occasion}
          className='reqFormInput'
          placeholder='Type the Occasion Here'
          onChange={() => handleInput('occasion', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Choose a Genre</h1>
        <select 
          value={requestData.genre}
          className='reqFormDropdown'
          onChange={() => handleInput('genre_id', event.target.value)}
        >
          <option selected disabled>Select Genre</option>
          {
            genres.map((genre) => (
              <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))
          }
        </select>

        <h1 className='reqFormHeader'>What Vocal Style Suits Your Song?</h1>
        <select
          value={requestData.vocal_type}
          className='reqFormDropdown'
          onChange={() => handleInput('vocal_type', event.target.value)}
        >
          <option selected disabled>Select Style</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <h1 className='reqFormHeader'>Set the Vibe</h1>
        <select
          value={requestData.vibe}
          className='reqFormDropdown'
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

        <h1 className='reqFormHeader'>Select a Tempo</h1>
        <select
          value={requestData.tempo}
          className='reqFormDropdown'
          onChange={() => handleInput('tempo', event.target.value)}
        >
          <option selected disabled>Select Tempo</option>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Up-Tempo</option>
        </select>

        <h1 className='reqFormHeader'>What inspired your song?</h1>
        <h4 className='reqFormSubHeader'>Tell your artist why you wanted to write this song. What emotions do you want your listener to feel?</h4>
        <input
          value={requestData.inspiration}
          className='reqFormInput'
          placeholder='Inspiration'
          onChange={() => handleInput('inspiration', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Share your story</h1>
        <h4 className='reqFormSubHeader'>Select two of our story prompts or just tell us memories and stories that you feel tell your story. </h4>
        <p className='reqFormPrompts'>
          a. What they mean to you?<br/>
          b. How did you meet?<br/>
          c. Inside Jokes<br/>
          d. Advice you have for them<br/>
          e. Describe a memory about your loved one that makes you laugh<br/>
          f. Describe or list things about them that makes them special to you.<br/>
          g. Other stories or memories<br/>
        </p>
        <input
          value={requestData.story1}
          className='reqFormInput'
          placeholder='Prompt 1'
          onChange={() => handleInput('story1', event.target.value)}
        ></input>
        <h5 className='reqFormSubHeader'>Tip: Include Descriptive language. Use your senses and really describe your feelings and emotions. Be sure it makes sense when someone outside of your relationship reads it. </h5>
        <input
          value={requestData.story2}
          className='reqFormInput'
          placeholder='Prompt 2'
          onChange={() => handleInput('story2', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Tell us what is most important to your song</h1>
        <input
          value={requestData.important_what}
          className='reqFormInput'
          placeholder='What?'
          onChange={() => handleInput('important_what', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Tell us why it is so important</h1>
        <input
          value={requestData.important_why}
          className='reqFormInput'
          placeholder='Why?'
          onChange={() => handleInput('important_why', event.target.value)}
        ></input>

        <h1 className='reqFormHeader'>Anything else we should know?</h1>
        <input
          value={requestData.additional_info}
          className='reqFormInput'
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

export default SongRequestPage;
