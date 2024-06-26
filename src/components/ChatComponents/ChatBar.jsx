import React, { useState, useEffect } from 'react';
import './Socket.css'

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   socket.on('newUserResponse', (data) => setUsers(data));
  // }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;