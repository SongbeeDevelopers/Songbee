import React from "react";
import { useSelector } from "react-redux";

import { Button, Checkbox } from "@mui/material";

import "../../SongRequestPage/SongRequestPage.css";

export default function Delivery({ handleInput, handleOpen }) {
  const requestData = useSelector((store) => store.requestData);

  // date logic
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const threeDays = now.getTime() + msPerDay * 3;
  const fiveDays = now.getTime() + msPerDay * 5;
  const sixDays = now.getTime() + msPerDay * 6;

  return (
    <form className="orderForm">
      <div className="reqFormGroup4">
        <label>When would you like your song delivered?</label>
        <div className="reqFormDays">
          <div 
            className="calendar-img-div"
            onClick={() => handleInput("delivery_days", 3)}
          >
            <Checkbox
              checked={requestData.delivery_days === 3}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>

            <div className="calendar-txt">
              {new Date(threeDays).toDateString()} <p>3 Days + $80</p>
            </div>
          </div>

          <div 
            className="calendar-img-div"
            onClick={() => handleInput("delivery_days", 5)}>
          <Checkbox
              checked={requestData.delivery_days === 5}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>

            <div className="calendar-txt">
              {new Date(fiveDays).toDateString()} <p>5 Days + $40</p>
            </div>
          </div>

          <div 
            className="calendar-img-div"
            onClick={() => handleInput("delivery_days", 6)}>
          <Checkbox
              checked={requestData.delivery_days === 6}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>
            <div className="calendar-txt">
              {new Date(sixDays).toDateString()} <p>6 Days + $0</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
