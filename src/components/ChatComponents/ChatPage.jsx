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

    const intervalFunction = () => {
      dispatch({
        type: "FETCH_CURRENT_CHAT",
        payload: id
    })
    }
  
    // useEffect(() => {
    //   socket.on('messageResponse', (data) => setMessages([...messages, data]));
    // }, [socket, messages]);
    useEffect(() => {
            dispatch({
                type: "FETCH_CURRENT_CHAT",
                payload: id
            })
    }, [id]);

    useEffect(() => {
      dispatch({type: "FETCH_USER_CHATS"})
      const intervalId = setInterval(
        intervalFunction, 10000
      )
      return () => {
        clearInterval(intervalId)
      };
    }, []);
    const chats = useSelector(store => store.userChats);
    const messages = useSelector(store => store.currentChat);
    const user = useSelector(store => store.user)

    
    let user2
    chats.map((chat) => {
      if (chat.id === Number(id)){
        if(user.id === chat.user1_id){
          user2 = chat.user2_email
        }
        else if (user.id === chat.user2_id){
          user2 = chat.user1_email
        }
      }
    })

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
  
    return (
      <div className="chat">
        <div className="chat__main">
          <ChatBody messages={messages} lastMessageRef={lastMessageRef} user2={user2}/>
          <ChatFooter id={id} />
        </div>
      </div>
    );
  };

export default ChatPage;