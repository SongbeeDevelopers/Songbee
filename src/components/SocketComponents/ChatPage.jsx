import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import { io } from "socket.io-client";
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Socket.css'

const ChatPage = () => {
    const socket = io(undefined, {
        withCredentials: true,
        extraHeaders: {
            "songbee-message": "abcd"
        }
    });
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef(null);
  
    useEffect(() => {
      socket.on('messageResponse', (data) => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
  
    return (
      <div className="chat">
        <ChatBar socket={socket} />
        <div className="chat__main">
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
          <ChatFooter socket={socket} />
        </div>
      </div>
    );
  };

export default ChatPage;