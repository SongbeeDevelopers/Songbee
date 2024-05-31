import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "@mui/material"

import '../CustomerPortal.css'

function CustomerMessagesTab() {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER_CHATS' })
  }, []);

  const chats = useSelector(store => store.userChats)
  const user = useSelector(store => store.user)

  console.log("chats", chats)
  const startChat = () => {
    dispatch({
        type: "CREATE_CHAT",
        payload: {
            id: 1, history
        }
    })
  }
  const handleChat = (chat) => {
    if(user.id !== chat.latest_sender){
      dispatch({
        type: "READ_MESSAGE",
        payload: chat.id
      })
  }
  history.push(`/chatpage/${chat.id}`)
}


  return (
    <div className="tab-body">
      <div className="user-credit-tab">
        <div className="user-portal-inputs">
   { chats.length === 0 ? 
    <>
    <h4 onClick={startChat}>Click here to start a chat with Songbee</h4>
    </>
    :
    <>
    <h4>Your Chats:</h4>  
   {chats.map((chat) => {
                if(chat.user1_email === user.email){
                    return (
                        <>
                            <Button 
                              sx={{m: 'auto', mt: 2, height: 35, width: 500, backgroundColor: "#feaf17", color: "black" }}
                              onClick={() => handleChat(chat)}>
                                Your Chat with {chat.user2_email}
                            </Button>
                            {chat.latest_sender !== user.id && chat.unread_messages !== 0?
                            <p>You have {chat.unread_messages} unread messages</p>
                            :
                            ''
                            }
                        </>
                    )
                }
                else {
                    return (
                        <>
                            <Button 
                              sx={{m: 'auto', mt: 2, height: 35, width: 500, backgroundColor: "#feaf17", color: "black" }}
                              onClick={() => handleChat(chat)}>
                                Your Chat with {chat.user1_email}
                            </Button>
                            {chat.latest_sender !== user.id && chat.unread_messages !== 0 ?
                            <p>You have {chat.unread_messages} unread messages</p>
                            :
                            ''
                            }
                        </>
                    )
                }
            })}
            </> 
            }

        </div>
      </div>
    </div>
  )
}

export default CustomerMessagesTab;
