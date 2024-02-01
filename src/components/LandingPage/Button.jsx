import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function MainButton() {
  const user = useSelector((store) => store.user);
console.log(user);
  return <Link to={`${user?.id ? "/order" : "/login"}`} className="main-button">Start Your Song</Link>;
}

export default MainButton;
