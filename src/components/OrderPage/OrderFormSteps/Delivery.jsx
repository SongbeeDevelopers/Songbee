import React from "react";
import { useSelector } from "react-redux";


export default function Delivery({ handleInput, handleOpen }) {

  const user = useSelector((store) => store.user);

  // date logic
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const threeDays = now.getTime() + msPerDay * 3;
  const fiveDays = now.getTime() + msPerDay * 5;
  const sixDays = now.getTime() + msPerDay * 6;

  return (
    <form className="orderForm">
      <div className="reqFormGroup">
        <div className="reqFormInput">
          <label>When would you like your song delivered?</label>
          <button onClick={() => handleInput("delivery_days", 3)}>{new Date(threeDays).toDateString()} + $80</button>
          <button onClick={() => handleInput("delivery_days", 5)}>{new Date(fiveDays).toDateString()} + $40</button>
          <button onClick={() => handleInput("delivery_days", 6)}>{new Date(sixDays).toDateString()} + $0</button>
        </div>
      </div>
      {!user.id && (
        <button className="checkoutLogRegBtn" onClick={handleOpen}>
          Login / Register
        </button>
      )}
    </form>
  )
}
