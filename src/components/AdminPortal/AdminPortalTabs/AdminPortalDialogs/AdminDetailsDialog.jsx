import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { Button } from "@mui/material"

import '../../AdminPortal.css'


export default function AdminDetaisDialog({ request }) {

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

      <form>

        <div className='admin-details-edit-row'>
          <label> Requester
            <input
              value={request.requester}
              className='admin-portal-inputs'
              placeholder='You, the family, the team, etc.'
              onChange={() => handleInput('requester', event.target.value)}
            ></input>
          </label>

          <label> Recipient
            <input
              value={request.recipient}
              className='admin-portal-inputs'
              placeholder='Name or Nickname'
              onChange={() => handleInput('recipient', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Occasion
            <input
              value={request.occasion}
              className='admin-portal-inputs'
              placeholder='Type the Occasion Here'
              onChange={() => handleInput('occasion', event.target.value)}
            ></input>
          </label>

          <label> Pronunciation
            <input
              value={request.pronunciation}
              className='admin-portal-inputs'
              placeholder='Pronunciation'
              onChange={() => handleInput('pronunciation', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Inspiration
            <input
              value={request.inspiration}
              className='admin-portal-inputs'
              placeholder='Inspiration'
              onChange={() => handleInput('inspiration', event.target.value)}
            ></input>
          </label>

          <label> Relationship
            <input
              value={request.recipient_relationship}
              className='admin-portal-inputs'
              placeholder='Relationship'
              onChange={() => handleInput('recipient_relationship', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Genre
            <select className='admin-portal-inputs'
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
          </label>

          <label> Vocal Style
            <select className='admin-portal-inputs'
              value={request.vocal_type}
              onChange={() => handleInput('vocal_type', event.target.value)}
            >
              <option selected disabled>Select Style</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Vibe
            <select className='admin-portal-inputs'
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
          </label>

          <label> Tempo
            <select className='admin-portal-inputs'
              value={request.tempo}
              onChange={() => handleInput('tempo', event.target.value)}
            >
              <option selected disabled>Select Tempo</option>
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Up-Tempo</option>
            </select>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Most important
            <textarea
              value={request.important_what}
              className='admin-portal-textarea'
              placeholder='What?'
              onChange={() => handleInput('important_what', event.target.value)}
            ></textarea>
          </label>

          <label> Why it's important
            <textarea
              value={request.important_why}
              className='admin-portal-textarea'
              placeholder='Why?'
              onChange={() => handleInput('important_why', event.target.value)}
            ></textarea>
          </label>
        </div>

        <label>Prompt Answers</label>
        <div className='admin-details-edit-row'>
          <textarea
            value={request.story1}
            className='admin-portal-textarea'
            placeholder='Prompt 1'
            onChange={() => handleInput('story1', event.target.value)}
          ></textarea>
          <textarea
            value={request.story2}
            className='admin-portal-textarea'
            placeholder='Prompt 2'
            onChange={() => handleInput('story2', event.target.value)}
          ></textarea>
        </div>

        <label> Additional info
          <textarea
            className='admin-portal-textarea'
            value={request.additional_info}
            placeholder='Additional Details'
            onChange={() => handleInput('additional_info', event.target.value)}
          ></textarea>
        </label>

        <Button variant="contained"
          onClick={submitRequest}
          sx={{m: 'auto', mt: 2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
        >
          SAVE
        </Button>

      </form>
    </div>
  );
}
