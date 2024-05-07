import React from "react";
import { Link } from "react-router-dom";

import "./StartSongButton.css";


function StartSongButton() {
  return (
    <Link
      to="/order"
      className="main-button"
    > Start Your Song
    </Link>
  )
}

export default StartSongButton;
