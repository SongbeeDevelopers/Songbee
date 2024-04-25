import React from "react";
import { useState } from "react";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from "@mui/material/Modal";

import { Box, Checkbox } from "@mui/material";

import LoginRegisterForm from "../../LoginRegisterForm/LoginRegisterForm";


export default function AddOns({ handleInput, handleClose, open }) {

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
      <button
        className="orderInput"
        onClick={() => handleInput("streaming", true)}
      >Add My Song to Streaming Services!</button>

      <button
        className="orderInput"
        onClick={() => handleInput("extra_verse", true)}
      >Add an Additional Verse!</button>

      <button
        className="orderInput"
        onClick={() => handleInput("license", true)}
      > I Need a Commercial License for My Song!
      </button>

      <button
        className="orderInput"
        onClick={() => handleInput("backing_track", true)}
      > Add an instrumental backing track!
      </button>

      <FormGroup
        sx={{ display: "flex", justifyContent: "center" }}>
        <FormControlLabel required control={<Checkbox />} label="I Have Read and Agree to the Terms of Service" />
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