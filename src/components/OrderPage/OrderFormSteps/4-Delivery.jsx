import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { Button, Checkbox, FormControlLabel } from "@mui/material";

import "../../SongRequestPage/SongRequestPage.css";

export default function Delivery({ handleInput, agreeTerms, setAgreeTerms, setDeliveryPrice }) {
  const requestData = useSelector((store) => store.requestData);

  // date logic
  const now = new Date();
  const msPerDay = 24 * 60 * 60 * 1000;
  const threeDays = now.getTime() + msPerDay * 3;
  const fiveDays = now.getTime() + msPerDay * 5;
  const sixDays = now.getTime() + msPerDay * 6;
  const prices = {
    three: 79.99,
    five: 39.99
  }
  const handleClick = (value) => {
    if (value === 3) {
        handleInput("delivery_days", 3)
        setDeliveryPrice(prices.three)
    }
    if (value === 5) {
        handleInput("delivery_days", 5)
        setDeliveryPrice(prices.five)
    }
    if (value === 6) {
      handleInput("delivery_days", 6)
        setDeliveryPrice(0)
    }
  }

  return (
    <form className="orderForm">
      <div className="reqFormGroup4">
        <label>When would you like your song delivered?</label>
        <label>Delivery will be from the time of song detail completion. After purchase, please log in to your customer portal and complete your song details. Once you have completed your song details, your artist will get started on your song!</label>
        <div className="reqFormDays">
          <div 
            className="calendar-img-div"
            onClick={() => handleClick(3)}
          >
            <Checkbox
              disableRipple
              checked={requestData.delivery_days === 3}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/Songbee/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>

            <div className="calendar-txt">
              {new Date(threeDays).toDateString()} <p>3 Days + $79.99</p>
            </div>
          </div>

          <div 
            className="calendar-img-div"
            onClick={() => handleClick(5)}>
          <Checkbox
              disableRipple
              checked={requestData.delivery_days === 5}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/Songbee/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>

            <div className="calendar-txt">
              {new Date(fiveDays).toDateString()} <p>5 Days + $39.99</p>
            </div>
          </div>

          <div 
            className="calendar-img-div"
            onClick={() => handleClick(6)}>
          <Checkbox
              disableRipple
              checked={requestData.delivery_days === 6}
              sx={{ mb: -10, ml: -5, mr: 8, backgroundColor: "#fff4df" }}
            />
            <img
              className="calendar-img"
              src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715096840/Songbee/vecteezy_calendar-icon-clipart-design-illustration_9380244_qcc9sv.png"
            ></img>
            <div className="calendar-txt">
              {new Date(sixDays).toDateString()} <p>6 Days + $0</p>
            </div>
          </div>
        </div>
        <div className=" maincheckoutagree">
          <FormControlLabel
          control={<Checkbox required value={agreeTerms} onClick={() => setAgreeTerms(!agreeTerms)} />}
          label={<span>I have read and agree to the <Link to="/terms" target="_blank">terms and conditions</Link>, the <Link to="/privacy" target="_blank">privacy policy</Link>, and the <a href="https://drive.google.com/file/d/1BCASC9xwt8lwTnW5OcJYAGAS5NsPnfX6/view?usp=sharing" target="_blank">end user agreement</a></span>}
        />
      </div>
      </div>
    </form>
  );
}
