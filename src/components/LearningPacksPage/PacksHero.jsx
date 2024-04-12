import React from "react";

function LearningpacksHero() {
  return (
    <div className="how-jr-works-box lp-hero-steps">
      <img className="lp-hero-bee" src="/junior/dancingBeee.png" alt="" />
      <img className="try-bee lp-try-bee" src="/junior/Bee.png"/>
      <img className="guesswork-honeycomb lp-honeycomb-topright" src="/junior/empty-honecomb-yellow.png"/>
      <img className="guesswork-honeycomb lp-honeycomb-bottomleft" src="/junior/empty-honecomb-yellow.png"/>

      <div className="jr-works-header">
        <img src="/junior/howItWorks.png" alt="" />
        {/* <h2>How It Works</h2> */}
        {/* <h5>Easy as 1.. 2.. Songbee!</h5> */}
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="/junior/Bee.png" />
        <img src="/junior/Bee.png" />
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="/junior/dotted-arrow.png" />
        <img src="/junior/dotted-arrow.png" />
      </div>

      <div className="jr-works">
        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>1</h2>
            </div>
            <h3>Select your starting learning pack</h3>
          </div>
          {/* <p>Choose your child's age group.</p> */}
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>2</h2>
            </div>
            <h3>Listen & grow</h3>
          </div>
          {/* <p>Determine your child's custom milestones or choose from our learning options.</p> */}
        </div>

        <div className="jr-works-item">
          <div className="jr-works-item-header">
            <div className="jr-works-number">
              <h2>3</h2>
            </div>
            <h3>Play to Learn! </h3>
          </div>
          {/* <p>Enjoy your new teaching tools! Check out our provided song guides.</p> */}
        </div>
      </div>

      <div className="jr-works">
        <p>
          Enter in your child’s birthday, then receive a recommendation for an
          age based Learning Pack.{" "}
        </p>
        <p>
          Delivered every two months, with your child’s age and developmental
          milestones in mind.{" "}
        </p>
        <p>
          Embrace your new teaching tools and dive into the effective world of
          music-based learning!
        </p>
      </div>
      <br />

      <img className="jr-works-beehive" src="/junior/beehive.png" />
    </div>
  );
}

export default LearningpacksHero;
