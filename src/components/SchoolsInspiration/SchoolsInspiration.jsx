import React from "react";
import "./SI.css";
import WhatsTheBuzz from "./TheBuzz";
import BeeSmart from "./BeeSmart";
import ForAllAges from "./ForAllAges";
import WhyExpertsLoveUs from "./WhyExpertsLoveUs";
import JrFaq from "../JrFaq.jsx/JrFaq";
import JrFooter from "../JrFooter/JrFooter";
function SchoolsInspiration() {
  const siTypes = [
    {
      id: 0,
      name: "Schools & Groups",
      description:
        "Public, Independent, Perochial schools, and Charter Schools. After-school programs and  community events.",
      imgurl: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074741/Songbee/si-hero1_yy0pez.jpg",
    },

    {
      id: 1,
      name: "Home School",
      description: "Virtual classes, home schools, Home educators",
      imgurl: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074746/Songbee/si-hero2_gpuyku.jpg",
    },

    {
      id: 2,
      name: "Counseling",
      description:
        "Counseling, Grief therapy, developmental therapy, music therapy offices",
      imgurl: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074751/Songbee/si-hero3_bkkfmh.jpg",
    },

    {
      id: 3,
      name: "Music Programs",
      description: "Government funded programs, community centers",
      imgurl: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714074757/Songbee/si-hero4_gjb99j.jpg",
    },
  ];
  return (
    <div className="si-page">
      <div className="si-hero">
        <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076638/Songbee/si-hero_drm2uh.jpg" alt="" />
        <div className="si-heroContents">
          <h1> <span className="highlight">Music-based</span>learning programs</h1>
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
          src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076677/Songbee/YellowLine_kbce6u.png"
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
      <BeeSmart/>
      <ForAllAges/>
      <WhyExpertsLoveUs/>
      <JrFaq/>
    </div>
  );
}

export default SchoolsInspiration;
