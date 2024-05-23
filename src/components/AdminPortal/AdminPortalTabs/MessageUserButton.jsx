import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from "@mui/material"

export default function MessageUserButton ({ userId }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const chats = useSelector(store => store.userChats);
    
    const handleChat = () => {
      let chatCheck = false
      chats.map((chat) => {
        if (userId === chat.user1_id || userId === chat.user2_id){
          chatCheck = chat.id
        }
      })
      if (chatCheck !== false){
      history.push(`/chatpage/${chatCheck}`)
      }
      else {
        dispatch({
          type: "CREATE_CHAT",
          payload: {id: userId, history}
        })
      }
    }
    return (
        <Button variant="contained"
        onClick={handleChat}
        sx={{ height: 35, width: 150, backgroundColor: "#feaf17", color: "black" }}
      >
        MESSAGE USER
      </Button>  
    )
}