import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import { Button } from "@mui/material"

import '../../AdminPortal.css'

import Swal from 'sweetalert2';


export default function AdminDetaisDialog({ setDetailsOpen }) {

  const dispatch = useDispatch()
  const { id } = useParams()
  
  const edit = useSelector(store => store.edit)
  const genres = useSelector(store => store.genres)

  // stores changes
  const handleInput = (key, value) => {
    dispatch({type: 'EDIT_INPUT', payload: {key, value}})
  }

  const submitRequest = (event) => {
    event.preventDefault()
    // confirmation message
    Swal.fire({
      title: "Save changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      setDetailsOpen(false)
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        dispatch({
          type: 'SUBMIT_REQUEST_EDIT',
          payload: edit
        })
      }
    });
  }


  return (
    <div className='admin-req-details-edit'>
      <h2>Edit Song Request Details</h2>

      <form>

        <div className='admin-details-edit-row'>
          <label> Requester
            <input
              value={edit.requester}
              className='admin-portal-inputs'
              placeholder='You, the family, the team, etc.'
              onChange={() => handleInput('requester', event.target.value)}
            ></input>
          </label>

          <label> Recipient
            <input
              value={edit.recipient}
              className='admin-portal-inputs'
              placeholder='Name or Nickname'
              onChange={() => handleInput('recipient', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Occasion
            <input
              value={edit.occasion}
              className='admin-portal-inputs'
              placeholder='Type the Occasion Here'
              onChange={() => handleInput('occasion', event.target.value)}
            ></input>
          </label>

          <label> Pronunciation
            <input
              value={edit.pronunciation}
              className='admin-portal-inputs'
              placeholder='Pronunciation'
              onChange={() => handleInput('pronunciation', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Inspiration
            <input
              value={edit.inspiration}
              className='admin-portal-inputs'
              placeholder='Inspiration'
              onChange={() => handleInput('inspiration', event.target.value)}
            ></input>
          </label>

          <label> Relationship
            <input
              value={edit.recipient_relationship}
              className='admin-portal-inputs'
              placeholder='Relationship'
              onChange={() => handleInput('recipient_relationship', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Genre
            <select className='admin-portal-inputs'
              value={edit.genre}
              onChange={() => handleInput('genre', Number(event.target.value))}
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
              value={edit.vocal_type}
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
              value={edit.vibe}
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
              value={edit.tempo}
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
              value={edit.important_what}
              className='admin-portal-textarea'
              placeholder='What?'
              onChange={() => handleInput('important_what', event.target.value)}
            ></textarea>
          </label>

          <label> Why it's important
            <textarea
              value={edit.important_why}
              className='admin-portal-textarea'
              placeholder='Why?'
              onChange={() => handleInput('important_why', event.target.value)}
            ></textarea>
          </label>
        </div>

        <label>Prompt Answers</label>
        <div className='admin-details-edit-row'>
          <textarea
            value={edit.story1}
            className='admin-portal-textarea'
            placeholder='Prompt 1'
            onChange={() => handleInput('story1', event.target.value)}
          ></textarea>
          <textarea
            value={edit.story2}
            className='admin-portal-textarea'
            placeholder='Prompt 2'
            onChange={() => handleInput('story2', event.target.value)}
          ></textarea>
        </div>

        <label> Additional info
          <textarea
            className='admin-portal-textarea'
            value={edit.additional_info}
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
