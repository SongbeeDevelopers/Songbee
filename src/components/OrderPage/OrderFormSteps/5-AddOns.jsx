import React from "react";
import { useSelector } from "react-redux";
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


export default function AddOns({ handleInput, handleOpen, handleClose, open, setTotalPrice, totalPrice }) {

  const requestData = useSelector((store) => store.requestData);
  const user = useSelector((store) => store.user);
  const prices = {
    extra_verse: 74.99,
    streaming: 49.99,
    backing_track: 29.99,
    license: 199.99
  }
  const handleClick = (value) => {
    if (value === 'streaming') {
      if (requestData.streaming === false) {
        handleInput("streaming", true)
        setTotalPrice(totalPrice + prices.streaming)
      }
      else if (requestData.streaming === true) {
        handleInput("streaming", false)
        setTotalPrice(totalPrice - prices.streaming)
      }
    }
    if (value === 'verse') {
      if (requestData.extra_verse === false) {
        handleInput("extra_verse", true)
        setTotalPrice(totalPrice + prices.extra_verse)
      }
      else if (requestData.extra_verse === true) {
        handleInput("extra_verse", false)
        setTotalPrice(totalPrice - prices.extra_verse)
      }
    }
    if (value === 'license') {
      if (requestData.license === false) {
        handleInput("license", true)
        setTotalPrice(totalPrice + prices.license)
      }
      else if (requestData.license === true) {
        handleInput("license", false)
        setTotalPrice(totalPrice - prices.license)
      }
    }
    if (value === 'backing') {
      if (requestData.backing_track === false) {
        handleInput("backing_track", true)
        setTotalPrice(totalPrice + prices.backing_track)
      }
      else if (requestData.backing_track === true) {
        handleInput("backing_track", false)
        setTotalPrice(totalPrice - prices.backing_track)
      }
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
    <div className="add-ons-checkout">
      <label>Would you like any add-ons?</label>
      <div className="addOnDisplay">
        <div className="reqFormGroup">
          <div className="reqFormInput">
            <div
              className='requestDetailsaddon2'
              onClick={() => handleClick("streaming")}>
              <Checkbox checked={requestData.streaming} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
              <img
                src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/addstreaming_hng5cz.jpg"
              ></img>

            </div >
            <Button variant="contained"
              onClick={() => handleClick("streaming")}
              sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
            > Add My Song to Streaming Services!
            </Button>

            <div
              className='requestDetailsaddon2'
              onClick={() => handleClick("verse")}>
              <Checkbox checked={requestData.extra_verse} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
              <img
                src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/extraverse_hmt8jd.jpg"
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

            <div
              className='requestDetailsaddon2'
              onClick={() => handleClick("license")}>
              <Checkbox checked={requestData.license} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
              <img
                src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/commerciallicense_qkxiug.jpg"
              ></img>
            </div>
            <Button variant="contained"
              onClick={() => handleClick("license")}
              sx={{ height: 50, width: 300, backgroundColor: "#feaf17", color: "black" }}
            > I Need a Commercial License for My Song!
            </Button>

            <div
              className='requestDetailsaddon2'
              onClick={() => handleClick("backing")}>
              <Checkbox checked={requestData.backing_track} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
              <img
                src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714154396/Songbee/backingtrack_m94vwk.jpg"
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
        sx={{ mt: 5, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <h4 className="agree">I Have Read and Agree to the <a href='/#/terms'>Terms and Conditions</a></h4>
        <FormControlLabel required control={<Checkbox sx={{mb: -7}} />} />
      </FormGroup>
      {!user.id && (
        <button className="checkoutLogRegBtn" onClick={handleOpen}>
          Login / Register
        </button>
      )}
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
    </div>
  )
}