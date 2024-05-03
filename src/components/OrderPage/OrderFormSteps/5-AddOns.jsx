import React from "react";
import { useState } from "react";

import LoginRegisterForm from "../../LoginRegisterForm/LoginRegisterForm";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal
} from "@mui/material";

import '../../SongRequestPage/SongRequestPage.css'


export default function AddOns({ handleInput, handleClose, open }) {

  const [streaming, setStreaming] = useState(false);
  const [verse, setVerse] = useState(false);
  const [license, setLicense] = useState(false);
  const [backing, setBacking] = useState(false);

  const handleClick = (value) => {
    if (value === 'streaming'){
      setStreaming(!streaming)
      handleInput("streaming", streaming)
    }
    if (value === 'verse'){
      setVerse(!verse)
      handleInput("extra_verse", verse)
    }
    if (value === 'license'){
      setLicense(!license)
      handleInput("license", license)
    }
    if (value === 'backing'){
      setBacking(!backing)
      handleInput("backing_track", backing)
    }
  }

  // modal appearance
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    <label>Would you like any add-ons?</label>
    <div className="addOnDisplay">
      <div className="reqFormGroup">
        <div className="reqFormInput">
          <div className='requestDetailsaddon2'>
            <img 
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/addstreaming_hng5cz.jpg"
              onClick={() => handleClick("streaming")}
              ></img>
          </div >
          <Button variant="contained"
            onClick={() => handleClick("streaming")}
            sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
          > Add My Song to Streaming Services!
          </Button>

          <div className='requestDetailsaddon2'>
            <img 
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/extraverse_hmt8jd.jpg"
              onClick={() => handleClick("verse")}
              ></img>
          </div >
          <Button variant="contained"
            onClick={() => handleClick("verse")}
            sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
          > Add an Additional Verse!
          </Button>
          </div>
          </div>

          <div className="reqFormGroup">
        <div className="reqFormInput">

          <div className='requestDetailsaddon2'>
            <img 
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/commerciallicense_qkxiug.jpg"
              onClick={() => handleClick("license")}
              ></img>
          </div>
          <Button variant="contained"
            onClick={() => handleClick("license")}
            sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
          > I Need a Commercial License for My Song!
          </Button>

          <div  className='requestDetailsaddon2'>
            <img 
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/backingtrack_m94vwk.jpg"
              onClick={() => handleClick("backing")}
              ></img>
          </div>
          <Button variant="contained"
            onClick={() => handleClick("backing")}
            sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
          > Add an instrumental backing track!
          </Button>
        </div>
      </div>
    </div>
    <FormGroup
            sx={{ display: "flex", justifyContent: "center" }}>
            <h4>I Have Read and Agree to the <a href='/#/terms'>Terms and Conditions</a></h4>
            <FormControlLabel required control={<Checkbox />} />
            
          </FormGroup>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <LoginRegisterForm handleClose={handleClose} />
            </Box>
          </Modal>
    </>
  )
}