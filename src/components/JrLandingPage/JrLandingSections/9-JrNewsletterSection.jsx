import React from "react";

function JrNewsletterSection() {
  return (
    <div className="jr-newsletter">
      <h2>Easy as 1, 2, 3...</h2>
      <p>Sign up for 15% off your first order!</p>
      <div className="newsletter-input-button">
  
        <input placeholder="email address"></input>
        <button id="jr-newsletter-btn" className="jr-landing-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default JrNewsletterSection;
