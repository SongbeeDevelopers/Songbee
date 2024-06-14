import React from "react";
import "../WhatsIncluded.css";

function WhatsIncludedWhySongbee() {
  return (
    <div className="wsb">
      <h2>Why Songbee?</h2>

      <p>
        Meet with one of our experts to learn more about <br /> why Songbee is right
        for you.
      </p>

      <div className="wsb-cards">
        <div className="wsb-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073662/Songbee/babyTwo_no332w.jpg" alt="" />
          <h3>Boost Creativity</h3>
          <p>
            Entice children to level up their creativity and develop a creative
            mindset.
          </p>
        </div>

        <div className="wsb-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714073753/Songbee/babyTwo_zrnspn.jpg" alt="" />
          <h3>Innovate Learning</h3>
          <p>Fun and enriching teaching tool for in and out of school time.</p>
        </div>

        <div className="wsb-card">
          <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074273/Songbee/FAA_yhsjyu.jpg" alt="" />
          <h3>Encourage Participation</h3>
          <p>
            Create a unique learning environment and entice children to
            participate and love learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatsIncludedWhySongbee;
