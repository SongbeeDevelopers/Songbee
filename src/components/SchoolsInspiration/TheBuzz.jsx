import React from "react";
import "./SI.css";
import { Link } from "react-router-dom";
function WhatsTheBuzz() {
  return (
    <div className="theBuzz">

        <img className="buzz-pencil" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074399/Songbee/BuzzPencil_tvlatl.png" alt="" />
        <img className="buzz-honeycomb" src="/junior/empty-honeycomb.png" alt="" />
      <div className="left-buzz">
        <div className="buzz-title">
          <h2>What’s the buzz?</h2>
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" alt="" />
        </div>
        <p>
          Songbee’s BEE programs are crafted with learning in mind. The BEE
          programs have a variety of different packages designed for every
          child’s stage of learning.
        </p>
        <p>
          Designed to work hand in hand and enhance learning & development using
          auditory learning as expressed through music.
        </p>
        <Link>
          Learn more about programs{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </Link>
      </div>

      <div className="right-buzz">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074389/Songbee/BuzzBook_uapcsh.png" alt="" />

        <div className="theBook">
          <div className="theBook-left">
            <h3>Benefits</h3>
            <div className="bookList">
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Engages the whole brain
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Boosts confidence
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Improves language skills
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Increases participation
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Aids memory retention
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Teaches emotional intelligence
              </p>
            </div>
          </div>
          <div className="theBook-right">
            <div className="bookList">
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Helps modify behaviors
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Inspires innovation
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Positive learning tool
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Instills creativity
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Builds social skills
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Promotes Patience
              </p>
              <p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074394/Songbee/buzzCheck_kwpdpq.webp" alt="" />
                Encourages community
              </p>
              <div className="theBook-learn">
                <div className="buzz-arrows">
                  <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074383/Songbee/buzzArrows_giu747.webp" />
                </div>
                <p>
                  Click <br /> Here
                </p>

                <Link>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsTheBuzz;
