import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CreationPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const newOrder = useSelector(store => store.newOrder);
    useEffect(() => {
        dispatch({
            type: 'CREATE_SONG_REQUEST',
            payload: {
                data: newOrder,
                history: history
        }
        })
      }, [])
    return (
        <h1>Loading...</h1>
    )
}

export default CreationPage;