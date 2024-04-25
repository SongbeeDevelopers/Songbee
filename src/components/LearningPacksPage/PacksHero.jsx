import React from "react";

function LearningpacksHero() {
  return (
    <div className="how-jr-works-box lp-hero-steps">
      <img className="lp-hero-bee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076557/Songbee/dancingBeee_zsnlif.png" alt="" />
      <img className="try-bee lp-try-bee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png"/>
      <img className="guesswork-honeycomb lp-honeycomb-topright" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076569/Songbee/empty-honecomb-yellow_hlw8xg.png"/>
      <img className="guesswork-honeycomb lp-honeycomb-bottomleft" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076569/Songbee/empty-honecomb-yellow_hlw8xg.png"/>

      <div className="jr-works-header">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076592/Songbee/howItWorks_yrjlyn.png" alt="" />
        {/* <h2>How It Works</h2> */}
        {/* <h5>Easy as 1.. 2.. Songbee!</h5> */}
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" />
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" />
      </div>

      <div className="jr-works-arrows-and-bees">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076563/Songbee/dotted-arrow_ahzs2i.png" />
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076563/Songbee/dotted-arrow_ahzs2i.png" />
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

      <img className="jr-works-beehive" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076534/Songbee/beehive_lzsfmu.png" />
    </div>
  );
}

export default LearningpacksHero;
