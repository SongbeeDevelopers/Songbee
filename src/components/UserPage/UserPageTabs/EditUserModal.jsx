import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import validator from "validator";
import Swal from 'sweetalert2';

import { Modal, Box } from "@mui/material"


function EditUserModal({ user, open, handleClose }) {

  

  
 
  

  // modal style


  return (
    <Modal
      open={open}
      keepMounted
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

    </Modal>
  )
}

export default EditUserModal
