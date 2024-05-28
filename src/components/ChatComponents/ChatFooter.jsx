import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import './Socket.css'

const ChatFooter = ({ socket, id }) => {
  const dispatch = useDispatch()
  const message = useSelector(store => store.message)

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
    // if (message.trim() && localStorage.getItem('userName')) {
    //   socket.emit('message', {
    //     text: message,
    //     name: localStorage.getItem('userName'),
    //     id: `${socket.id}${Math.random()}`,
    //     socketID: socket.id,
    //   });
    // }
    dispatch({
      type: "SEND_MESSAGE",
      payload: message
    })
    dispatch({type: "CLEAR_MESSAGE"})
    ;
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