import React from "react";
import "./SI.css";
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
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072113/Songbee/si-bottom-stars_f2asun.webp" alt="" />
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
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072113/Songbee/si-bottom-stars_f2asun.webp" alt="" />
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
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072113/Songbee/si-bottom-stars_f2asun.webp" alt="" />
             <p>
              Songbee's music is inspiring, fun to listen to, has a sincere and
              genuine message that all children, teachers, caretakers, parents,
              and guardians can relate to for many situations. I would highly
              recommend their music to all age groups!
              </p>
          </div>
        </div>

        <div className="expert-card">
          <div className="card-contents">
            <h3>Example Name</h3>
            <span>Education Specialist</span>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072113/Songbee/si-bottom-stars_f2asun.webp" alt="" />
            <p>
              "SongBee is the best! SongBee is the best! SongBee is the best!"{" "}
              </p>
          </div>
        </div>
      </div>
      <img className="yellowLine" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png" alt="" />
    </div>
  );
}

export default WhyExpertsLoveUs;
