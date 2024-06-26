import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function CreationPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {id} = useParams();
  useEffect(() => {
    dispatch({
        type: "CONFIRM_REQUEST_PAYMENT",
        payload: id
    })
}, [id]);
  history.push(`/finalquestions/${id}`);
  return (
    <h2>Loading...</h2>
  )
}

export default CreationPage;
