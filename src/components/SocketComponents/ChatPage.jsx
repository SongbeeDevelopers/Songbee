import React from 'react';
import { useState, useEffect, useRef  } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import './Socket.css'

const ChatPage = () => {
    // const socket = io('http://localhost:5001', {
    //     withCredentials: true,
    //     extraHeaders: {
    //         "songbee-message": "abcd"
    //     }
    // });
    const dispatch = useDispatch()
    
    const lastMessageRef = useRef(null);

    const { id } = useParams();
  
    // useEffect(() => {
    //   socket.on('messageResponse', (data) => setMessages([...messages, data]));
    // }, [socket, messages]);

        useEffect(() => {
            dispatch({
                type: "FETCH_CURRENT_CHAT",
                payload: id
            })
    }, [id]);

    const messages = useSelector(store => store.currentChat);

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
  
    return (
      <div className="chat">
        <div className="chat__main">
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} />
          <ChatFooter id={id} />
        </div>
      </div>
    );
  };

export default ChatPage;