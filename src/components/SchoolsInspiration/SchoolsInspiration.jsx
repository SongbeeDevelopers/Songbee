import React from "react";
import "./SI.css";
import WhatsTheBuzz from "./TheBuzz";
function SchoolsInspiration() {
  const siTypes = [
    {
      id: 0,
      name: "Schools & Groups",
      description:
        "Public, Independent, Perochial schools, and Charter Schools. After-school programs and  community events.",
      imgurl: "/junior/si-below-hero/si-hero1.jpg",
    },

    {
      id: 1,
      name: "Home School",
      description: "Virtual classes, home schools, Home educators",
      imgurl: "/junior/si-below-hero/si-hero2.jpg",
    },

    {
      id: 2,
      name: "Counseling",
      description:
        "Counseling, Grief therapy, developmental therapy, music therapy offices",
      imgurl: "/junior/si-below-hero/si-hero3.jpg",
    },

    {
      id: 3,
      name: "Music Programs",
      description: "Government funded programs, community centers",
      imgurl: "/junior/si-below-hero/si-hero4.jpg",
    },
  ];
  return (
    <div className="si-page">
      <div className="si-hero">
        <img src="public/junior/si-hero.jpeg" alt="" />
        <div className="si-heroContents">
          <h1>Music-based learning programs</h1>
          <p>
            Motivate our next generation of trail blazers with songs <br /> and
            guides carefully crafted to teach and inspire.
          </p>
          <button className="jr-landing-btn">Contact Us</button>
        </div>
      </div>

      <div className="mother-yellowLine">
        <img
          className="si-yellowLine"
          src="public/junior/YellowLine.png"
          alt=""
        />
      </div>

      <div className="si-types">
        {siTypes.map((item) => (
          <div className="si-types-1">
            <img src={item.imgurl} alt="" />
            <div className="si-types-1-text">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <WhatsTheBuzz/>
    </div>
  );
}

export default SchoolsInspiration;
