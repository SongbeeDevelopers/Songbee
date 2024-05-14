import React from 'react';
import { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Socket.css'

const ChatPage = () => {
    const socket = io("http://localhost:5001", {
        withCredentials: true,
        extraHeaders: {
            "songbee-message": "abcd"
        }
    });
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);
  
    return (
      <div className="chat">
        <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody messages={messages} />
          <ChatFooter socket={socket} />
        </div>
      </div>
    );
  };

export default ChatPage;