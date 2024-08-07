import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, Typography, Modal, Dialog, Box } from "@mui/material"
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser'

import ApplicationUploadDialog from "./ApplicationUploadDialog";

import '../UserPortals/AdminPortal/AdminPortal.css'

import { motion } from "framer-motion";

import "./JoinArtistPage.css";


function JoinArtistPage({ routeVariants }) {

  emailjs.init({
    publicKey: 'kh8qhjYSE2KhcvUoT'
  })
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
    dispatch({ type: 'EDIT_INPUT', payload: { key: 'genres', value: [] } })
  }, [])

const edit = useSelector(store => store.edit)
const genres = useSelector(store => store.genres)
const user = useSelector(store => store.user)

const [details1Open, setDetails1Open] = useState(false);
const [details2Open, setDetails2Open] = useState(false);
const [details3Open, setDetails3Open] = useState(false);
const [details4Open, setDetails4Open] = useState(false);

// stores changes in edit reducer
const handleInput = (key, value) => {
  if (key === 'genres') {
    dispatch ({ type: 'EDIT_ARTIST_GENRES', payload: value })
  } else {
    dispatch({ type: 'EDIT_INPUT', payload: { key, value } })
  }
}

const loginCheck = () => {
  if(!user.id){
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You must login or create an account to apply
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Click here to login
            </Typography>
            <Button variant="contained"
              onClick={() => history.push('/login')}
              sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
            >
              LOGIN
            </Button>
          </Box>
        </Modal>
      </div>
    );
  }
}

const clearGenres = () => {
  event.preventDefault()
  dispatch({ type: 'CLEAR_ARTIST_GENRES' })
}

const submitEdit = (event) => {
  event.preventDefault()
  // confirmation message
  if (
    edit.name &&
    edit.artist_name &&
    edit.location &&
    edit.vocal_type &&
    edit.photo &&
    edit.sample_song_1 &&
    edit.sample_song_2 &&
    edit.sample_song_3 &&
    edit.song_title_1 &&
    edit.song_title_2 &&
    edit.song_title_3 &&
    edit.instagram_link &&
    edit.streaming_link &&
    edit.bio &&
    edit.paypal
  ){
  Swal.fire({
    icon: "question",
    title: "Are you sure you want to submit?",
    showCancelButton: true,
    confirmButtonText: "Submit",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Submitted!", "", "success");
      // if confirmed, updates db with edit reducer data
      dispatch({
        type: "CREATE_ARTIST",
        payload: edit
      })
      const templateParams = {
        to_email: "hello@songbee.com",
        to_name: "Songbee Admins",
        message: "A new artist has applied to Songbee! Log into the Admin Portal to view the Artist's application!"
      }
      emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams)
    }
  })
  history.push('/user');
} else {
  Swal.fire({
    icon: "question",
    title: "You have left fields blank. All fields are required, enter a placeholder if necessary",
    showCancelButton: false,
    confirmButtonText: "Go Back",
  })
}
}

  
  return (
    <motion.div
      className="join-as-artist container"
      variants={routeVariants}
      initial='initial'
      animate='final'
    >
      {loginCheck()}
      <h1>Apply Now to Join</h1>
      <p>
        Our Songbee artists are required to write, record, and produce a song
        from start to finish themselves. We do not pair producers with
        vocalists, instrumentals or vice versa
      </p>
      <br></br>
      <p>
        ALL FIELDS ARE REQUIRED
      </p>

      <form className="artist-form">
      <div className='admin-details-edit-row'>
          <label> First and Last Name
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
      <p>
        Photo file size cannot excede 10mb
      </p>
        <div className='admin-details-edit-row'>
          <label> Instagram Link
            <input
              value={edit.instagram_link}
              className='admin-portal-inputs'
              onChange={() => handleInput('instagram_link', event.target.value)}
            ></input>
          </label>
          <div className="upload-button-container">
          <label> Photo </label>
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
            <ApplicationUploadDialog 
              setDetailsOpen={setDetails1Open}
              num={4}
              artist={edit.id} />
          </Dialog>
          </div>
        </div>

        <div className='admin-details-edit-row'>
          <label> Bio
            <textarea
              value={edit.bio}
              className='admin-portal-textarea admin-bio-input'
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
        <p>
          When uploading songs, make sure you have a sample song that represents each genre you specialize in
        </p>
      
      <p>
        Song file size cannot excede 100mb
      </p>

        <div className='admin-details-edit-row'>
          <label> Song 1 Title
            <input
              value={edit.song_title_1}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_1', event.target.value)}
            ></input>
          </label>
          <div className="upload-button-container">
          <label> Song 1 </label>
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
            <ApplicationUploadDialog 
              setDetailsOpen={setDetails2Open}
              num={1}
              artist={edit.id} />
          </Dialog>
          </div>
        </div>

        <div className='admin-details-edit-row'>
          <label> Song 2 Title
            <input
              value={edit.song_title_2}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_2', event.target.value)}
            ></input>
          </label>
          <div className="upload-button-container">
          <label> Song 2 </label>
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
            <ApplicationUploadDialog 
              setDetailsOpen={setDetails3Open}
              num={2}
              artist={edit.id} />
          </Dialog>
          </div>
          
        </div>


        <div className='admin-details-edit-row'>
          <label> Song 3 Title
            <input
              value={edit.song_title_3}
              className='admin-portal-inputs'
              onChange={() => handleInput('song_title_3', event.target.value)}
            ></input>
          </label>
          <div className="upload-button-container">
          <label> 
            Song 3 
          </label>
          <Button variant="contained"
            onClick={() => setDetails4Open(true)}
            sx={{ height: 35, width: 250, backgroundColor: "#feaf17", color: "black" }}
          >
            CLICK TO UPLOAD SONG 3
          </Button>

            {/* upload dialog */}
          <Dialog keepMounted fullWidth maxWidth="md"
            open={details4Open}
            onClose={() => setDetails4Open(false)}
          >
            <ApplicationUploadDialog  
              setDetailsOpen={setDetails4Open}
              num={3}
              artist={edit.id} />
          </Dialog>
          </div>
        </div>

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
         
        </div>
        <div id='admin-details-button-row' className='admin-details-edit-row'>
          <Button variant="contained"
            onClick={submitEdit}
            sx={{ mt: 2, height: 35, width: 75, backgroundColor: "#feaf17", color: "black" }}
          > SUBMIT
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default JoinArtistPage;
