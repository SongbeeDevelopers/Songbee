import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, TextField, Dialog } from "@mui/material"
import Swal from 'sweetalert2';

import UploadArtistDetailsDialog from './UploadArtistDetailsDialog';
import AudioButton from '../../../../ArtistPages/AudioButton';

import '../../AdminPortal.css'


export default function AdminArtistDetaisDialog({ setDetailsOpen }) {

  const dispatch = useDispatch()

  const edit = useSelector(store => store.edit)
  const genres = useSelector(store => store.genres)

  const [songFile, setSongFile] = useState('')

  const [details1Open, setDetails1Open] = useState(false);
  const [details2Open, setDetails2Open] = useState(false);
  const [details3Open, setDetails3Open] = useState(false);
  const [details4Open, setDetails4Open] = useState(false);
  const [details5Open, setDetails5Open] = useState(false);

  // stores changes in edit reducer
  const handleInput = (key, value) => {
    if (key === 'genres') {
      dispatch ({ type: 'EDIT_ARTIST_GENRES', payload: value })
    } else {
      dispatch({ type: 'EDIT_INPUT', payload: { key, value } })
    }
  }
  const clearGenres = () => {
    event.preventDefault()
    dispatch({ type: 'CLEAR_ARTIST_GENRES' })
  }

  const submitEdit = (event) => {
    event.preventDefault()
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
        dispatch({
          type: 'SUBMIT_ARTIST_EDIT',
          payload: edit
        })
        // closes dialog
        setDetailsOpen(false)
      }
    })
  }

  const deleteArtist = (artistId) => {
    event.preventDefault()
    // confirmation message
    Swal.fire({
      icon: "warning",
      title: "Delete Artist?",
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        // if confirmed, removes artist from db
        dispatch({
          type: 'DELETE_ARTIST',
          payload: artistId
        })
        // closes dialog
        setDetailsOpen(false)
      }
    })
  }


  return (
    <div className='admin-req-details-edit'>
      <h3>Edit Artist Details</h3>

      <form>

        <div className='admin-details-edit-row'>
          <label> Name
            <input
              value={edit.name}
              className='admin-portal-inputs'
              onChange={() => handleInput('name', event.target.value)}
            ></input>
          </label>

          <label> Artist Name
            <input
              value={edit.artist_name}
              className='admin-portal-inputs'
              onChange={() => handleInput('artist_name', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Vocal Type
            <select className='admin-portal-inputs'
              value={edit.vocal_type}
              onChange={() => handleInput('vocal_type', event.target.value)}
            >
              <option selected disabled>Select Style</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label> Location
            <input
              value={edit.location}
              className='admin-portal-inputs'
              onChange={() => handleInput('location', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <img className='details-artist-photo' src={edit.photo} />
        </div>

        <div className='admin-details-edit-row'>
          <label> Photo
            <TextField
              type="file"
              className="form-control-file"
              name="uploaded_file"
              onChange={(evt) => setSongFile(evt.target.files[0])}
              // fullWidth={true}
              sx={{ width: 300, mt: 3, ml: -6 }}
            />
          </label>

          <label> Instagram Link
            <input
              value={edit.instagram_link}
              className='admin-portal-inputs'
              onChange={() => handleInput('instagram_link', event.target.value)}
            ></input>
          </label>
        </div>
        <Button variant="contained"
            onClick={() => setDetails1Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD PHOTO
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details1Open}
            onClose={() => setDetails1Open(false)}
          >
            <UploadArtistDetailsDialog 
              setDetailsOpen={setDetails1Open}
              num={4}
              artist={edit.id} />
          </Dialog>

        <div className='admin-details-edit-row'>
          <label> Bio
            <textarea
              value={edit.bio}
              className='admin-portal-textarea admin-bio-input'
              placeholder='What?'
              onChange={() => handleInput('bio', event.target.value)}
            ></textarea>
          </label>

          <label> Genres:
            <select className='admin-portal-inputs admin-select-multiple'
              multiple
              value={edit.genres}
              onChange={() => handleInput('genres', event.target.value)}
            >
              {genres && genres.map((genre) => (
                <option value={genre.id}>{genre.name}</option>
              ))}
            </select>
            <button className='admin-btn-center' onClick={() => clearGenres()}>Clear selections</button>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <AudioButton url={edit.sample_song_1}/>
        </div>

        <div className='admin-details-edit-row'>
          <label> Song 1 Title
            <input
              value={edit.song_title_1}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_1', event.target.value)}
            ></input>
          </label>
          <label> Song 1
            <input
              value={edit.sample_song_1}
              className='admin-portal-inputs'
              onChange={() => handleInput('sample_song_1', event.target.value)}
            ></input>
          </label>
        </div>
        <Button variant="contained"
            onClick={() => setDetails2Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD SONG 1
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details2Open}
            onClose={() => setDetails2Open(false)}
          >
            <UploadArtistDetailsDialog 
              setDetailsOpen={setDetails2Open}
              num={1}
              artist={edit.id} />
          </Dialog>

        <div className='admin-details-edit-row'>
          <AudioButton url={edit.sample_song_2}/>
        </div>

        <div className='admin-details-edit-row'>
          <label> Song 2 Title
            <input
              value={edit.song_title_2}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_2', event.target.value)}
            ></input>
          </label>
          <label> Song 2
            <input
              value={edit.sample_song_2}
              className='admin-portal-inputs'
              onChange={() => handleInput('sample_song_2', event.target.value)}
            ></input>
          </label>
        </div>
        <Button variant="contained"
            onClick={() => setDetails3Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD SONG 2
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details3Open}
            onClose={() => setDetails3Open(false)}
          >
            <UploadArtistDetailsDialog 
              setDetailsOpen={setDetails3Open}
              num={2}
              artist={edit.id} />
          </Dialog>

        <div className='admin-details-edit-row'>
          <AudioButton url={edit.sample_song_3}/>
        </div>

        <div className='admin-details-edit-row'>
          <label> Song 3 Title
            <input
              value={edit.song_title_3}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_3', event.target.value)}
            ></input>
          </label>
          <label> Song 3
            <input
              value={edit.sample_song_3}
              className='admin-portal-inputs'
              onChange={() => handleInput('sample_song_3', event.target.value)}
            ></input>
          </label>
        </div>
        <Button variant="contained"
            onClick={() => setDetails2Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD SONG 3
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details4Open}
            onClose={() => setDetails4Open(false)}
          >
            <UploadArtistDetailsDialog 
              setDetailsOpen={setDetails4Open}
              num={3}
              artist={edit.id} />
          </Dialog>

        <div className='admin-details-edit-row'>
          <label> Website
            <input
              value={edit.website}
              className='admin-portal-inputs'
              onChange={() => handleInput('website', event.target.value)}
            ></input>
          </label>
          <label> Streaming Link
            <input
              value={edit.streaming_link}
              className='admin-portal-inputs'
              onChange={() => handleInput('streaming_link', event.target.value)}
            ></input>
          </label>
        </div>

        <div className='admin-details-edit-row'>
          <label> Paypal
            <input
              value={edit.paypal}
              className='admin-portal-inputs'
              onChange={() => handleInput('paypal', event.target.value)}
            ></input>
          </label>
          <label> I9
            <input
              value={edit.w9}
              className='admin-portal-inputs'
              onChange={() => handleInput('w9', event.target.value)}
            ></input>
          </label>
        </div>
        <div className='admin-details-edit-row'>

        <Button variant="contained"
            onClick={() => {window.open(edit.w9, "_blank")}}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}>
          CLICK TO VIEW I9
        </Button>

        <Button variant="contained"
            onClick={() => setDetails5Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD I9
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details5Open}
            onClose={() => setDetails5Open(false)}
          >
            <UploadArtistDetailsDialog 
              setDetailsOpen={setDetails5Open}
              num={5}
              artist={edit.id} />
          </Dialog>
        </div>
        <div id='admin-details-button-row' className='admin-details-edit-row'>
          <Button variant="contained"
            onClick={submitEdit}
            sx={{ mt: 2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
          > SAVE
          </Button>

          <Button variant="contained" color="error"
            onClick={() => deleteArtist(edit.id)}
            sx={{ mt: 2, height: 35, width: 75 }}
          > DELETE
          </Button>
        </div>

      </form>
    </div>
  );
}
