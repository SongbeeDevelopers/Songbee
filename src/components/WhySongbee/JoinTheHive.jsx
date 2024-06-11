import React from "react";
import "./WhySongbee.css";
import { Link } from "react-router-dom";

function JoinTheHive() {
  return (
    <div className="join-the-hive">
      <div className="left-hive">
        <img
          src="/junior/hive-imgs/e1b45e78-7b43-4ce8-82d0-41f1438d3991.png"
          alt=""
        />
        <h2>
       
          <span className="highlight">Join</span> the hive,<br /> learn the benefits.
        </h2>
      </div>
      <div className="right-hive">
        <div className="bs-rightCard jth-rightcard">
          <div className="bs-rightImage">
            <img
              src="/junior/hive-imgs/hive-pic-1.webp"
              alt=""
            />
          </div>
          <p>Emotional</p>
        </div>


        <div className="bs-rightCard jth-rightcard">
          <div className="bs-rightImage">
            <img
              src="/junior/hive-imgs/hive-img-2.webp"
              alt=""
            />
          </div>
          <p>Cognitive</p>
        </div>



        <div className="bs-rightCard jth-rightcard">
          <div className="bs-rightImage">
            <img
              src="/junior/hive-imgs/hive-img-3.webp"
              alt=""
            />
          </div>
          <p>Social</p>
        </div>



        <div className="bs-rightCard jth-rightcard">
          <div className="bs-rightImage">
            <img
              src="/junior/hive-imgs/hive-img-4.webp"
              alt=""
            />
          </div>
          <p>Behavioral</p>


        </div>
       <Link to="/benefits" className="jr-landing-btn hive-button">Learn More</Link> 
      </div>
    </div>
  );
}

export default JoinTheHive;
