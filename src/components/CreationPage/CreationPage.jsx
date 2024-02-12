import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function CreationPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useParams();
  const newOrder = useSelector((store) => store.newOrder);
  console.log("order", order);
  console.log("order.delivery_days", order.delivery_days);
    dispatch({
      type: "CREATE_SONG_REQUEST",
      payload: {
        data: order,
        history: history,
      },
    });
  return <h1>Loading...</h1>;
}

export default CreationPage;
