import React from "react";

function NewsletterSection() {
  return (
    <div className="main-newsletter">
      <h2>Stay in the Loop!</h2>
      <p>Sign up for  15% off your first order!</p>
      <div className="main-newsletter-input">
        <input placeholder="email address"></input>
        <button id="main-newsletter-btn" className="main-landing-btn">Sign Up</button>
      </div>
    </div>
  )
}

export default NewsletterSection
