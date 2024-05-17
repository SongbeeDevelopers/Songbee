import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";


function CancelPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams();
  useEffect(() => {
    dispatch({
        type: "DELETE_SONG_REQUEST",
        payload: id
    })
}, [id]);
  history.push('/user');
  return (
    <h2>Loading...</h2>
  )
}

export default CancelPage;