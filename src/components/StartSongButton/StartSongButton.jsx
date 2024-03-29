import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./StartSongButton.css";


function StartSongButton() {

  const user = useSelector((store) => store.user);
  
  return <Link to="/order" className="main-button">Start Your Song</Link>;
  
}

export default StartSongButton;
