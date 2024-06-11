import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function JrReviewsSection() {

  const history = useHistory()

  const reviews = [
    {
      name: 'Emily F.',
      role: 'Education Specialist',
      text: `
      Songbee provides such an amazing opportunity to pair music with learning, social/emotional development, and fun!
      `,
    },
    {
      name: 'Amrit D., PHD',
      role: 'Student Health & Wellness',
      text: `
      As an educator, I love working with Songbee. The learning and clinical applications 
      of the songs written for our Lower School are extremely broad and are enhancing many 
      of our existing programs and services.
      `,
    },
    {
      name: 'Erin L.',
      role: 'Educator',
      text: `
      Songbee's music is inspiring, fun to listen to, has a sincere and genuine message that 
      all children, teachers, caretakers, parents, and guardians can relate to for many situations. 
      I would highly recommend their music to all age groups!
      `,
    },
  ]

  return (
    <div className="jr-reviews-bg">
      <div className="jr-reviews">
        <h2 className="jr-reviews-header">Specialists love us!</h2>

        <div className="jr-review-item-container">
          {reviews.map((review) => (
              <div className="jr-review-item">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
                <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070494/Songbee/star-one_ohfquo.png" />
                <p>{review.text}</p>
              </div>
            ))}
        </div>

        <button id="guesswork-btn" className="jr-landing-btn" onClick={() => history.push('/why-songbee')}>
          Why Songbee?
        </button>
      </div>
    </div>
  )
}

export default JrReviewsSection
