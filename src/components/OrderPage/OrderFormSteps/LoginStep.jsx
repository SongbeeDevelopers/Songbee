import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

// mui imports
import LoginRegisterForm from "../../LoginRegisterForm/LoginRegisterForm";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal
} from "@mui/material";

import '../../SongRequestPage/SongRequestPage.css'

export default function LoginStep({ handleOpen, handleClose, open }){

    const user = useSelector((store) => store.user);

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
        </>
    )
}