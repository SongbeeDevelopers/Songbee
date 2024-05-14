import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "../JrLandingPage.css";


function BenefitsSection() {

  const benefits = [
    {
      title: 'Parenting Made Easy',
      description: `
      Engage your child's cognitive functions like: planning and working memory.
      `
    },
    {
      title: 'Healthy Brains ',
      description: `
      Nurture language, motor skills, collaboration, and emotional intelligence. 
      `
    },
    {
      title: 'Have Fun!',
      description: `
      Make learning fun and memorable!
      `
    }
  ]

  const history = useHistory()

  return (
    <>
      <div className="jr-benefits-bg">
        <div className="jr-benefits">

          <h2>The Benefits</h2>

          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1715310399/Songbee/jr-works_ormdje.png" />

          <div className="jr-benefit-container">
            {benefits.map((benefit) => (
              <div className="jr-benefit-item">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <button className="jr-landing-btn" onClick={() => history.push('/benefits')}>
            Explore Benefits
          </button>

        </div>
      </div>
    </>
  )
}

export default BenefitsSection;
