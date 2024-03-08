import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import { motion } from 'framer-motion';

function JrEditRequestPage({ routeVariants }) {

  const dispatch = useDispatch()
  const history = useHistory()

  const genres = useSelector(store => store.genres)
  const jrRequestData = useSelector(store => store.jrRequestData)
  const { id } = useParams()

  useEffect(() => {
    dispatch({
        type: 'JR_LOAD_EDIT_PAGE',
        payload: id})
  }, [id])


  useEffect(() => {
    dispatch({
        type: 'CLEAR_JR_REQUEST_DATA',
       })
  }, [])

  const handleInput = (key, value) => {
    dispatch({
      type: 'SET_JR_REQUEST_DATA',
      payload: {...jrRequestData, [key]: value}
    })
  }

  const submitRequest = (event) => {
    event.preventDefault()
    dispatch({
        type: 'UPDATE_JR_SONG_REQUEST',
        payload: {
          id: id,
          history: history,
          data: jrRequestData,
        }
      })
    }

  return (
    <motion.div
      className="reqFormPage"
      variants={routeVariants}
      initial='initial'
      animate='final'
    >
      <h1>Edit Song Request Details</h1>

      <form className='reqForm'>

      <h2>Your Details</h2>

        <div className='reqFormGroup'>
          <div className='reqFormInput'>
            <label>Who is Creating the Song?</label>
            <input 
              value={jrRequestData.requester}
              className='reqFormInput'
              placeholder='You, the family, the team, etc.'
              onChange={() => handleInput('requester', event.target.value)}
            ></input>
          </div>

          <div className='reqFormInput'>
            <label>What is the name of the Child?</label>
            <input
              value={jrRequestData.child}
              className='reqFormInput'
              placeholder='Type the Child Name Here'
              onChange={() => handleInput('child', event.target.value)}
            ></input>
          </div>
        </div>

        <div className='reqFormGroup'>
          

          <div className='reqFormInput'>
              <label>Name Pronunciation</label>
              <input
                value={jrRequestData.pronunciation}
                className='reqFormInput'
                placeholder='Zoe (pronounced `zo-ee`)'
                onChange={() => handleInput('pronunciation', event.target.value)}
              ></input>
          </div>

          <div className='reqFormInput'>
              <label>What is the Age?</label>
              <input
                value={jrRequestData.age}
                className='reqFormInput'
                placeholder='Age'
                onChange={() => handleInput('age', event.target.value)}
              ></input>
          </div>
        </div>

      <h2>Specifications</h2>

        <div className='reqFormGroup'>
          

          <div className='reqFormSelect'>
            <label>Set the Emotion</label>
            <select
              value={jrRequestData.emotion}
              onChange={() => handleInput('emotion', event.target.value)}
            >
              <option selected disabled>Select Emotion</option>
              <option value="happy">Happy</option>
              <option value="lighthearted">Lighthearted</option>
              <option value="heartfelt">Heartfelt</option>
              <option value="romantic">Romantic</option>
              <option value="reflective">Reflective</option>
              <option value="somber">Somber</option>
            </select>
          </div>
        </div>

        <div className='reqFormGroup'>
          <div className='reqFormSelect'>
            <label>What Vocal Style Suits Your Song?</label>
            <select
              value={jrRequestData.vocal_type}
              onChange={() => handleInput('vocal_type', event.target.value)}
            >
              <option selected disabled>Select Style</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>

          <div className='reqFormSelect'>
            <label>Select a Tempo</label>
            <select
              value={jrRequestData.tempo}
              onChange={() => handleInput('tempo', event.target.value)}
            >
              <option selected disabled>Select Tempo</option>
              <option value="slow">Slow</option>
              <option value="medium">Medium</option>
              <option value="fast">Up-Tempo</option>
            </select>
          </div>
        </div>

        <h2>Share your story</h2>

        <div className='reqFormGroup'>
          <div className='reqFormInput'>
            <label>Tell us what is most important to your song</label>
            <input
              value={jrRequestData.description}
              className='reqFormInput'
              placeholder='What?'
              onChange={() => handleInput('description', event.target.value)}
            ></input>
          </div>

          <div className='reqFormInput'>
            <label>Tell us why it is so important</label>
            <input
              value={jrRequestData.goals}
              className='reqFormInput'
              placeholder='Why?'
              onChange={() => handleInput('goals', event.target.value)}
            ></input>
          </div>
        </div>

       
      

        <button
          className='reqFormSubmit'
          onClick={submitRequest}
        >
          Submit
        </button>

      </form>
    </motion.div>
  );
}

export default JrEditRequestPage;