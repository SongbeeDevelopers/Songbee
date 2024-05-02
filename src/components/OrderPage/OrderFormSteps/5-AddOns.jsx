import React from "react";

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
    <div className="reqForm">
      <div className="reqFormGroup">
        <div className="reqFormInput">
          <label>Would you like any add-ons?</label>

          <Button variant="contained"
            onClick={() => handleInput("streaming", true)}
            sx={{ height: 35, backgroundColor: "#feaf17", color: "black" }}
          > Add My Song to Streaming Services!
          </Button>

          <Button variant="contained"
            onClick={() => handleInput("extra_verse", true)}
            sx={{ height: 35, backgroundColor: "#feaf17", color: "black" }}
          > Add an Additional Verse!
          </Button>

          <Button variant="contained"
            onClick={() => handleInput("license", true)}
            sx={{ height: 35, backgroundColor: "#feaf17", color: "black" }}
          > I Need a Commercial License for My Song!
          </Button>

          <Button variant="contained"
            onClick={() => handleInput("backing_track", true)}
            sx={{ height: 35, backgroundColor: "#feaf17", color: "black" }}
          > Add an instrumental backing track!
          </Button>

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
        </div>
      </div>
    </div>
  )
}