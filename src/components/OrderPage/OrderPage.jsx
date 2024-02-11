import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import LoginRegisterForm from '../LoginRegisterForm/LoginRegisterForm'

import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Swal from 'sweetalert2';

import './OrderPage.css'


// problems with setting default value, react doesn't like it!!

function OrderPage({ routeVariants }) {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
  const newOrder = useSelector(store => store.newOrder)

  const handleSelection = (key, value) => {
    dispatch({
      type: 'SET_NEW_ORDER',
      payload: {...newOrder, [key]: value}
    })
  }

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
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const submitOrder = (e) => {
    e.preventDefault()
    if (newOrder.delivery_days && newOrder.streaming && newOrder.extra_verse && user.id) {
      dispatch({
        type: 'CREATE_SONG_REQUEST',
        payload: {
          data: newOrder,
          history: history
        }
      })
    }
    else {
      Swal.fire({
        title: "Please Select All Three Options and log in.",
        icon: "error"
      })
    }
  }

  // for presenting only
  const fillForm = () => {
    dispatch({
      type: 'SET_NEW_ORDER',
      payload: {
        delivery_days: "6",
        extra_verse: "false",
        streaming: "false"
      }
    })
  }

  return (
    <motion.div
      className="orderPageContainer"
      variants={routeVariants}
      initial="initial"
      animate="final"
      onClick={fillForm}
    >
      <h1 className='orderHeader'>Let's Get Started.</h1>

      <img src='order-icon.png' className='orderIcon'></img>

      <p className='orderSubHeader'>Custom Songs for Every Occasion.</p>
      <p className='orderSubHeader'>Add your song to checkout, then fill out your song detail form!</p>

      <form className='orderForm'>
        <select
          className='orderInput'
          name="delivery_days"
          defaultValue={'Select Delivery Option'}
          value={newOrder.delivery_days}
          onChange={() => handleSelection('delivery_days', event.target.value)}
        >
          <option selected disabled>Select Delivery Option</option>
          <option value={3} >3 Day Delivery</option>
          <option value={4}>4 Day Delivery</option>
          <option value={6}>Standard 6 Day Delivery</option>
        </select>

        <select
          className='orderInput'
          name="streaming"
          value={newOrder.streaming}
          onChange={() => handleSelection('streaming', event.target.value)}
        >
          <option selected disabled>Select Streaming Option</option>
          <option value={true}>Add Streaming</option>
          <option value={false}>No Streaming</option>
        </select>

        <select
          className='orderInput'
          name="extra_verse"
          value={newOrder.extra_verse}
          onChange={() => handleSelection('extra_verse', event.target.value)}
        >
          <option selected disabled>Select Number of Verses</option>
          <option value={false}>Standard 2 Verses</option>
          <option value={true}>Add Extra Verse</option>
        </select>

        {!user.id &&
          <button
            className='checkoutLogRegBtn'
            onClick={handleOpen}
          >
            Login / Register
          </button>
        }

        <button className='orderCheckoutButton' onClick={submitOrder}>Checkout</button>
      </form>

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

    </motion.div>
  );
}

export default OrderPage;
