import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Socket.css'

const ChatBody = ({messages, lastMessageRef}) => {
  const history = useHistory();
  const user = useSelector(store => store.user)

  console.log('messages', messages);

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    history.push('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Direct Chat</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.email === user.email ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.email}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};


export default ChatBody;