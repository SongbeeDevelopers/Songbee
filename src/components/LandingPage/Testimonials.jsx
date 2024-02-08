import React, { useRef } from "react";
import "./LandingPage.css";


function TestimonialSection() {

  const galleryRef = useRef(null);

  const testimonials = [
    {
      image1: "/bee-one.png",
      image2: "/bee-two.png",
      name1: "BEE",
      name2: "Who",

      description1: `I had the most amazing and streamlined process working with
    Songbee. I hired Songbee to write and produce a song for my
    partner's Valentine's Day present and they didn't disappoint!
    10/10`,
      description2: `"I had the most amazing and streamlined process working with
    Songbee. I hired Songbee to write and produce a song for my
    partner's Valentine's Day present and they didn't disappoint!
    10/10"`,
    },

    {
      image1: "/bee-one.png",
      image2: "/bee-two.png",
      name1: "Walter",
      name2: "Bioke",

      description1: `I had the most amazing and streamlined process working with
    Songbee. I hired Songbee to write and produce a song for my
    partner's Valentine's Day present and they didn't disappoint!
    10/10`,
      description2: `"I had the most amazing and streamlined process working with
    Songbee. I hired Songbee to write and produce a song for my
    partner's Valentine's Day present and they didn't disappoint!
    10/10"`,
    },
  ];

  const scrollToNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: galleryRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -galleryRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };


  return (
    <div className="background-testimonial">
      <div className="testimonials">

        <h2>Testimonials</h2>

        <div className="slides no-scrollbar" ref={galleryRef}>
          <div className="arrows">
            <svg
              onClick={() => scrollToPrev()}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left-circle arrow-prev"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12H8" />
              <path d="m12 8-4 4 4 4" />
            </svg>
            <svg
              onClick={() => scrollToNext()}
              id="goNext"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-circle arrow-next"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </svg>
          </div>

          {testimonials.map((item) => (
            <div className="active-slide" key={item.name1}>

              <div className="active-slideOne">
                <img className="bee-one" src={item.image1} alt="" />
                <img className="star-one" src="/star-one.png" alt="" />
                <h3>{item.name1}</h3>
                <p>{item.description1}</p>
              </div>

              <div className="active-slideTwo">
                <img className="bee-two" src={item.image2} alt="" />
                <img className="star-two" src="/star-one.png" alt="" />
                <h3>{item.name2}</h3>
                <p>{item.description2}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
