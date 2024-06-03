import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Socket.css'

const ChatBody = ({messages, lastMessageRef, user2}) => {
  const history = useHistory();
  const user = useSelector(store => store.user)

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    history.goBack();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Messaging with {user2}</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          GO BACK
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