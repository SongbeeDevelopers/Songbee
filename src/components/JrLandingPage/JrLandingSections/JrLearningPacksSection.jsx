import React from "react";


function JrLearningPacksSection() {

  return (
    <div className="jr-learning-packs-bg">
      <h2 className="jr-learning-packs-title">Learning Packs</h2>

      <div className="age-container">
        <div className="age-item">
          <div className="age-item-contents">
            <h4>0-12 months</h4>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076166/Songbee/0-1_mdeh2q.png"/>
            <p>
              Your baby goes through so many changes in the first year.
              Help them meet their milestones.
            </p>
            <button className="jr-landing-btn jr-learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="age-item">
          <div className="age-item-contents">
            <h4>1- 2 Years</h4>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076171/Songbee/1-2_om40ht.png"/>
            <p>
              Your baby is growing up! <br/> They are starting to walk,
              play, and communicate on their own. Enhance learning to help them through each new step.
            </p>
            <button className="jr-landing-btn jr-learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="age-item">
          <div className="age-item-contents">
            <h4>3-4 Years</h4>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076177/Songbee/3-4_vabtho.png"/>
            <p>
              Learn communication skills, collaboration, and emotional understanding.
              Help your child excel in school or at home with musical learning.
            </p>
            <button className="jr-landing-btn jr-learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="age-item">
          <div className="age-item-contents">
            <h4>5 years & up!</h4>
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076182/Songbee/5up_qme8dk.png"/>
            <p>
              Develop a more mature and logical way of thinking. Further your child's social,
              physical, cognitive,  motor, and language development.
            </p>
            <button className="jr-landing-btn jr-learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JrLearningPacksSection
