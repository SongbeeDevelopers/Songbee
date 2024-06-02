import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function JrCreationPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();
    useEffect(() => {
      dispatch({
          type: "CONFIRM_JR_PAYMENT",
          payload: id
      })
  }, [id]);
    history.push('/user');
    return (
        <h2>Loading...</h2>
      )
}

export default JrCreationPage;
