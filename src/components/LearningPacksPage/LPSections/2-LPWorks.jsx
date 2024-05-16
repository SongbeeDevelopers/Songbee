function LearningpacksHero() {
  return (
    <div className="how-jr-works-box lp-hero-steps">
      <img
        className="lp-hero-bee"
        src='https://res.cloudinary.com/dke4ukd0z/image/upload/v1715715123/Songbee/bee-trail_qfhgh0.png'
      />
      <img
        className="try-bee lp-try-bee"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png"
      />
      <img
        className="guesswork-honeycomb lp-honeycomb-topright"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076569/Songbee/empty-honecomb-yellow_hlw8xg.png"
      />
      <img
        className="guesswork-honeycomb lp-honeycomb-bottomleft"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076569/Songbee/empty-honecomb-yellow_hlw8xg.png"
      />
      <div className="works-header packs-header-bg">
        <h2>How it works</h2>
        <p>
          Easy as 1, 2, 3... <span className="highlight">Songbee</span> !
        </p>
      </div>

      <div className="w-cards">
        <div className="w-card">
          <span>1</span>
          <div className="w-card-content">
            <h3>Select your starting learning pack</h3>
            <p>
              Enter in your child’s birthday, then receive a recommendation for
              an age based Learning Pack.{" "}
            </p>
          </div>
        </div>

        <div className="w-card">
          <span>2</span>
          <div className="w-card-content">
            <h3>Listen & grow</h3>
            <p>
              Delivered every two months, with your child’s age and
              developmental milestones in mind.{" "}
            </p>
          </div>
        </div>

        <div className="w-card">
          <span>3</span>
          <div className="w-card-content">
            <h3>Play to Learn! </h3>
            <p>
              Embrace your new teaching tools and dive into the effective world
              of music-based learning!
            </p>
          </div>
        </div>
      </div>

      <img
        className="jr-works-beehive"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076534/Songbee/beehive_lzsfmu.png"
      />
    </div>

  );
}

export default LearningpacksHero;
