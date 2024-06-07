import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import emailjs from '@emailjs/browser'
import './Socket.css'

const ChatFooter = ({ id, user2, user1 }) => {
  const dispatch = useDispatch()
  const message = useSelector(store => store.message)

  emailjs.init({
    publicKey: 'kh8qhjYSE2KhcvUoT'
  })

  const handleInput = (value) => {
    dispatch({ 
      type: "SET_MESSAGE",
      payload: {
        text: value,
        chat_id: id
      }})
  }

  const handleSendMessage = (e) => {
    e.preventDefault();

    dispatch({
      type: "SEND_MESSAGE",
      payload: message
    })
    dispatch({type: "CLEAR_MESSAGE"});

    const templateParams = {
      to_email: user2,
      to_name: user2,
      message: `You received a new message from ${user1}: 
      \n
      ${message.text}
      \n
      Log into your Songbee portal to view the message and respond!`
    }
    emailjs.send('service_8nl8jvl', 'template_mhzl217', templateParams)
  };
  return (
    <div className="chat__footer">
      <form className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message.text}
          onChange={(e) => handleInput(e.target.value)}
        />
      <Button variant="contained"
        onClick={handleSendMessage}
        sx={{ height: 35, width: 85, backgroundColor: "#feaf17", color: "black" }}
      >
        SEND
      </Button>  
      </form>
    </div>
  );
};

export default ChatFooter;