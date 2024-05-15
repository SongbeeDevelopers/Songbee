import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { io } from "socket.io-client";
import './Socket.css'

const SocketHome = () => {
  const socket = io('http://localhost:5001', {
        withCredentials: true,
        extraHeaders: {
            "songbee-message": "abcd"
        }
    });
  const user = useSelector(store => store.user)
  const history = useHistory()
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    localStorage.setItem('userName', user.email);
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName: user.email, socketID: socket.id });
    history.push('/chatpage');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default SocketHome;