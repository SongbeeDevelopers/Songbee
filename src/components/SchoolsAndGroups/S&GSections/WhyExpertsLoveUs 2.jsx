import React from "react";
import "../SchoolsAndGroups.css";

import { Link } from "react-router-dom";
function WhyExpertsLoveUs() {
  return (
    <div className="experts">
      <h2>Why experts love us!</h2>
      <div className="experts-cards">
        <div className="expert-card">
          <div className="card-contents">
            <h3>Emily F.</h3>
            <span>Education Specialist</span>
            <img src="/junior/bottom-si/si-bottom-stars.webp" alt="" />
            <p>
              Songbee provides such an amazing opportunity to pair music with
              learning, social/emotional development, and fun!{" "}
            </p>
          </div>
        </div>

        <div className="expert-card">
          <div className="card-contents">
            <h3>Amrit D., PHD</h3>
            <span> Student Health & Wellness</span>
            <img src="/junior/bottom-si/si-bottom-stars.webp" alt="" />
           <p>
              As an educator, I love working with Songbee. The learning and
              clinical applications of the songs written for our Lower School
              are extremely broad and are enhancing many of our existing
              programs and services.{" "}
              </p>
          </div>
        </div>

        <div className="expert-card">
          <div className="card-contents">
            <h3>Erin L. </h3>
            <span>Educator</span>
            <img src="/junior/bottom-si/si-bottom-stars.webp" alt="" />
             <p>
              Songbee's music is inspiring, fun to listen to, has a sincere and
              genuine message that all children, teachers, caretakers, parents,
              and guardians can relate to for many situations. I would highly
              recommend their music to all age groups!
              </p>
          </div>
        </div>
      </div>
      <img className="yellowLine" src="/junior/YellowLine.png" alt="" />
    </div>
  );
}

export default WhyExpertsLoveUs;
