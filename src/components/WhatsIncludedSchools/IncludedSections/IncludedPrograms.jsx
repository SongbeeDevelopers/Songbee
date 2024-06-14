import React from "react";

import "../WhatsIncluded.css";


function TopRatedPrograms() {
  return (
    <div className="trp">

      <div className="trp-top">
        <h2>Top Rated Programs</h2>
        <p>Actively listen, learn, and even song write through Songbee’s <span className="highlight underline">BEE</span>  programs. <br /> Innovate and teach the next generation with our streamlined approach.</p>
      </div>

      <div className="trp-bottom">
        <div className="trp-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714072560/Songbee/babyOne_r5yrzu.jpg" alt="" />

          <h3>Montessori Milestones</h3>

          <p>Birth-Pre K | Skill Building & Development</p>

          <div className="trp-card-labels">
            <span>Motor Skills</span>
            <span>Language</span>
            <span>Cognitive</span>
            <span>Emotional</span>
          </div>

          <ul className="trp-card-items">
            <li>Meet developmental milestones.</li>
            <li>Build cognitive, motor, social, and emotional skills.</li> 
            <li>Play to Learn!</li> 
            <li>Guided play guides to make the most out of your playtime.</li>
            <li>Learn, Play, and Grow!</li>
          </ul>
        </div>

        <div className="trp-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074259/Songbee/allAges3_wmmjfx.jpg" alt="" />

          <h3>Little Worker Bee </h3>

          <p>Grades 1-3 | </p>

          <div className="trp-card-labels">
            <span>Behavioral</span>
            <span>Cognitive</span>
            <span>Social</span>
            <span>Emotional</span>
            <span>Executive Functioning</span>
          </div>

          <ul className="trp-card-items">
            <li>Learn to identify and express feelings.</li>
            <li>Develop emotional intelligence.</li> 
            <li>Learn the foundations of community and social skills.</li> 
            <li>Discover the right way to collaborate and have friends</li>
          </ul>
        </div>

        <div className="trp-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074265/Songbee/AllAges9_bn3fm5.jpg" alt="" />

          <h3>Emotional Navigator</h3>

          <p>Grades 4-5 | </p>

          <div className="trp-card-labels">
            <span>Social</span>
            <span>Behavioral</span>
            <span>Cognitive</span>
            <span>Emotional</span>
          </div>

          <ul className="trp-card-items">
            <li>Master the best way to navigate social aggression.</li>
            <li>Learn problem-solving skills.</li>
          </ul>
        </div>

        <div className="trp-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074746/Songbee/si-hero2_gpuyku.jpg" alt="" />

          <h3>Counseling</h3>

          <p>Grades 6-8 | </p>

          <div className="trp-card-labels">
            <span>Coping Skills</span>
            <span>Behavioral</span>
            <span>Cognitive</span>
            <span>Emotional</span>
          </div>

          <ul className="trp-card-items">
            <li>Understand how to navigate hard emotions.</li>
            <li>Feel comfortable making sound decisions with difficult topics.</li> 
            <li>Self Regulation.</li> 
            <li>Developing social skills.</li>
          </ul>
        </div>

        <div className="trp-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074757/Songbee/si-hero4_gjb99j.jpg" alt="" />

          <h3>Hit Songwriter</h3>

          <p>Grades 9-12</p>

          <div className="trp-card-labels">
            <span>Social</span>
            <span>Behavioral</span>
            <span>Cognitive</span>
            <span>Emotional</span>
          </div>

          <ul className="trp-card-items">
            <li>Learn the basics of songwriting and be able to start and finish a song from scratch!</li>
            <li>Develop self confidence, discipline, and creative thought processes</li> 
            <li>An enriching experience to to engage and inspire.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopRatedPrograms;
