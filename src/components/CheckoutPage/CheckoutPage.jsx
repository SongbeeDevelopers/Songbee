import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import LoginRegisterForm from './LoginRegisterForm';

import './CheckoutPage.css'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Swal from 'sweetalert2';

function CheckoutPage() {

  const user = useSelector(store => store.user)

  // modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // modal appearance
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

  const submitPayment = () => {
    if (user.id) {
      // dispatch
    } else {
      Swal.fire({
        text: 'Please log in or register to continue.',
        icon: 'warning'
      })
    }
  }


  return (
    
    <div className='paymentContainer'>
      <h1 className='mockPaymentHeader'>Payment details</h1>

      <div className='mockPayment'>
        <p className='mockWarning'>(This is a mockup. It does nothing)</p>

        <div className='mockPaymentInputContainer'>
          <label className='mockPaymentInputLabel'>
            Cardholder Name
            <input
              className='mockPaymentInput'
              placeholder='Jane Doe'
              ></input>
            </label>

          <label className='mockPaymentInputLabel'>
            Card Number
            <input
            className='mockPaymentInput'
            placeholder='1234 1234 1234 1234'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            Expiration Month
            <input
            className='mockPaymentInput'
            placeholder='01'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            Expiration Year
            <input
            className='mockPaymentInput'
            placeholder='1111'
            ></input>
          </label>

          <label className='mockPaymentInputLabel'>
            CVC
            <input
            className='mockPaymentInput'
            placeholder='111'
            ></input>
          </label>

          <p>Payment Amount: $###.##</p>

          {!user.id && // enter credentials button with conditional logic?
            <button
              className='checkoutLogRegBtn'
              onClick={handleOpen}
            >
              Login / Register
            </button>
          }
        </div>
      </div> 

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

      <button
        className='checkoutSubmitButton'
        onClick={submitPayment}
      >
        Submit
      </button>

    </div>

  );
}

export default CheckoutPage;
