import React from "react";
import "./SI.css";
import { Link } from "react-router-dom";
function WhatsTheBuzz() {
  return (
    <div className="theBuzz">

        <img className="buzz-pencil" src="/junior/schoolsInspiration/BuzzPencil.png" alt="" />
        <img className="buzz-honeycomb" src="/junior/empty-honeycomb.png" alt="" />
      <div className="left-buzz">
        <div className="buzz-title">
          <h2>What’s the buzz?</h2>
          <img src="/junior/Bee.png" alt="" />
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
        <img src="/junior/schoolsInspiration/BuzzBook.png" alt="" />

        <div className="theBook">
          <div className="theBook-left">
            <h3>Benefits</h3>
            <div className="bookList">
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Engages the whole brain
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Boosts confidence
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Improves language skills
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Increases participation
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Aids memory retention
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Teaches emotional intelligence
              </p>
            </div>
          </div>
          <div className="theBook-right">
            <div className="bookList">
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Helps modify behaviors
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Inspires innovation
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Positive learning tool
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Instills creativity
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Builds social skills
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Promotes Patience
              </p>
              <p>
                <img src="/junior/schoolsInspiration/buzzCheck.png" alt="" />
                Encourages community
              </p>
              <div className="theBook-learn">
                <div className="buzz-arrows">
                  <img src="/junior/schoolsInspiration/buzzArrows.png" />
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
