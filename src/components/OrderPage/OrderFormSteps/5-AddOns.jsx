import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

import LoginRegisterForm from "../../LoginRegisterForm/LoginRegisterForm";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal
} from "@mui/material";

import '../../SongRequestPage/SongRequestPage.css'


export default function AddOns({
  handleInput,
  handleOpen,
  handleClose,
  open,
  agreeTerms,
  setAgreeTerms,
  agreeEUA,
  setAgreeEUA,
  agreePrivacy,
  setAgreePrivacy,
  setTotalPrice,
  totalPrice
}) {

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
      <label className="wouldulike">Would you like any add-ons?</label>
      <div className="addOnDisplay">
        <div className="reqFormGroup">
          <div className="reqFormInput">
            <div
              className='requestDetailsaddon2'
              onClick={() => handleClick("streaming")}>
              <Checkbox disableRipple checked={requestData.streaming} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
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
              <Checkbox disableRipple checked={requestData.extra_verse} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
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
              <Checkbox disableRipple checked={requestData.license} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
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
              <Checkbox disableRipple checked={requestData.backing_track} sx={{ mb: -10, ml: 2, backgroundColor: '#fff4df' }} />
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
      <div className=" maincheckoutagree">
        <FormControlLabel
          control={<Checkbox required value={agreeTerms} onClick={() => setAgreeTerms(!agreeTerms)} />}
          label={<span>I have read and agree to the <Link to="/terms" target="_blank">terms and conditions</Link></span>}
        />
        <FormControlLabel
          control={<Checkbox required value={agreePrivacy} onClick={() => setAgreePrivacy(!agreePrivacy)} />}
          label={<span>I have read and agree to the <Link to="/privacy" target="_blank">privacy policy</Link></span>}
        />
        <FormControlLabel
          control={<Checkbox required value={agreeEUA} onClick={() => setAgreeEUA(!agreeEUA)} />}
          label={<span>I have read and agree to the <a href="https://drive.google.com/file/d/1BCASC9xwt8lwTnW5OcJYAGAS5NsPnfX6/view?usp=sharing" target="_blank">end user agreement</a></span>}
        />
      </div>
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