import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Typography, TextField } from "@mui/material"
import Swal from 'sweetalert2';

import '../../AdminPortal.css'


export default function LearningPackDialog({ setDetailsOpen }) {

  const dispatch = useDispatch()
  
  const edit = useSelector(store => store.edit)

  const [songFile1, setSongFile1] = useState('')
  const [songFile2, setSongFile2] = useState('')
  const [songFile3, setSongFile3] = useState('')
  const [songFile4, setSongFile4] = useState('')
  const [songFile5, setSongFile5] = useState('')
  const [songFile6, setSongFile6] = useState('')
  const [songFile7, setSongFile7] = useState('')
  const [songFile8, setSongFile8] = useState('')
  const [songFile9, setSongFile9] = useState('')
  const [songFile10, setSongFile10] = useState('')
  const [songFile11, setSongFile11] = useState('')
  const [songFile12, setSongFile12] = useState('')
  const [songFile13, setSongFile13] = useState('')
  const [playGuide, setPlayGuide] = useState('')

  const detailsForm = new FormData();

  // stores changes in edit reducer
  const handleInput = (key, value) => {
    dispatch({type: 'EDIT_INPUT', payload: {key, value}})
  }

  const submitPack = (event) => {
    event.preventDefault()
    let files = []
    // confirmation message
    Swal.fire({
      icon: "question",
      title: "Save changes?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        // if confirmed, updates db with edit reducer data
        if (songFile1 === '' || null) {
            detailsForm.append("url1", edit.song1)
          } else {
            files.push(songFile1)
          }
          if (songFile2 === '' || null) {
            detailsForm.append("url2", edit.song2)
          } else {
            files.push(songFile2)
          }
          if (songFile3 === '' || null) {
            detailsForm.append("url3", edit.song3)
          } else {
            files.push(songFile3)
          }
          detailsForm.append("files", files)
          console.log("files", files)
        dispatch({
          type: 'UPDATE_LEARNING_PACK',
          payload: {id: edit.id, data: detailsForm}
        })
        setDetailsOpen(false)
      }
    })
  }


  return (
    <div className='admin-req-details-edit'>
      <h3>Edit Learning Pack Details</h3>

   

        <div className='admin-details-edit-row'>
          <label> Learning Pack Name
            <input
              value={edit.title}
              className='admin-portal-inputs'
              placeholder='Learning Pack Name'
              onChange={() => handleInput('title', event.target.value)}
            ></input>
          </label>

          <label> Description
          <textarea
            className='admin-portal-textarea'
            value={edit.description}
            placeholder='Pack Description'
            onChange={() => handleInput('description', event.target.value)}
          ></textarea>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Song 1 Title
            <input
              value={edit.song1_name}
              className='admin-portal-inputs'
              placeholder='Song 1 Title'
              onChange={() => handleInput('song1_name', event.target.value)}
            ></input>
          </label>

         <label> Song 1:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile1(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 2 Title
            <input
              value={edit.song2_name}
              className='admin-portal-inputs'
              placeholder='Song 2 Title'
              onChange={() => handleInput('song2_name', event.target.value)}
            ></input>
          </label>

          <label> Song 2:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile2(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 3 Title
            <input
              value={edit.song3_name}
              className='admin-portal-inputs'
              placeholder='Song 2 Title'
              onChange={() => handleInput('song3_name', event.target.value)}
            ></input>
          </label>

          <label> Song 3:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile3(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 4 Title
            <input
              value={edit.song4_name}
              className='admin-portal-inputs'
              placeholder='Song 4 Title'
              onChange={() => handleInput('song4_name', event.target.value)}
            ></input>
          </label>

          <label> Song 4:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile4(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 5 Title
            <input
              value={edit.song5_name}
              className='admin-portal-inputs'
              placeholder='Song 5 Title'
              onChange={() => handleInput('song5_name', event.target.value)}
            ></input>
          </label>

          <label> Song 5:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile5(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 6 Title
            <input
              value={edit.song6_name}
              className='admin-portal-inputs'
              placeholder='Song 6 Title'
              onChange={() => handleInput('song6_name', event.target.value)}
            ></input>
          </label>

          <label> Song 6:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile6(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 7 Title
            <input
              value={edit.song7_name}
              className='admin-portal-inputs'
              placeholder='Song 7 Title'
              onChange={() => handleInput('song7_name', event.target.value)}
            ></input>
          </label>

          <label> Song 7:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile7(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 8 Title
            <input
              value={edit.song8_name}
              className='admin-portal-inputs'
              placeholder='Song 8 Title'
              onChange={() => handleInput('song8_name', event.target.value)}
            ></input>
          </label>

          <label> Song 8:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile8(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 9 Title
            <input
              value={edit.song9_name}
              className='admin-portal-inputs'
              placeholder='Song 9 Title'
              onChange={() => handleInput('song9_name', event.target.value)}
            ></input>
          </label>

          <label> Song 9:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile9(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 10 Title
            <input
              value={edit.song10_name}
              className='admin-portal-inputs'
              placeholder='Song 10 Title'
              onChange={() => handleInput('song10_name', event.target.value)}
            ></input>
          </label>

          <label> Song 10:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile10(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 11 Title
            <input
              value={edit.song11_name}
              className='admin-portal-inputs'
              placeholder='Song 11 Title'
              onChange={() => handleInput('song11_name', event.target.value)}
            ></input>
          </label>

          <label> Song 11:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile11(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 12 Title
            <input
              value={edit.song12_name}
              className='admin-portal-inputs'
              placeholder='Song 12 Title'
              onChange={() => handleInput('song12_name', event.target.value)}
            ></input>
          </label>

          <label> Song 12:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile12(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
          <label> Song 13 Title
            <input
              value={edit.song13_name}
              className='admin-portal-inputs'
              placeholder='Song 13 Title'
              onChange={() => handleInput('song13_name', event.target.value)}
            ></input>
          </label>

          <label> Song 13:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setSongFile13(evt.target.files[0])}
              ></input>
              </label>
        </div>
        <div className='admin-details-edit-row'>
        <label> Play Guide PDF:
              <input
                className='admin-portal-inputs'
                type="file"
                onChange={(evt) => setPlayGuide(evt.target.files[0])}
              ></input>
              </label>

        <Button variant="contained"
          onClick={submitPack}
          sx={{m: 'auto', mt: 2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
        >
          SAVE
        </Button>
        </div>

    </div>
  );
}
