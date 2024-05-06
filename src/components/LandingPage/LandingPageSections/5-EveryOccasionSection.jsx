import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import '../LandingPage.css'


function SongsForEveryOccasion() {

  const isMobile = useMediaQuery({ query: `(max-width: 815px)` })

  const occasions = [
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026271/Songbee/weddings_am15et.png",
      image2: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026264/Songbee/birthdays_elehx7.png",
      image3: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026263/Songbee/anniversaries_iqdcjp.png",
      occasion1: "Weddings",
      occasion2: "Birthdays",
      occasion3: "Anniversaries",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026269/Songbee/retirement_nlxus3.png",
      image2: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026273/Songbee/memorial_nytoci.png",
      image3: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026265/Songbee/justbecause_lxkkmz.png",
      occasion1: "Retirement",
      occasion2: "Memorials",
      occasion3: "Just Because",
    },
  ];

  const occasionsSingle = [
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026271/Songbee/weddings_am15et.png",
      occasion1: "Weddings",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026264/Songbee/birthdays_elehx7.png",
      occasion1: "Birthdays",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026263/Songbee/anniversaries_iqdcjp.png",
      occasion1: "Anniversaries",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026269/Songbee/retirement_nlxus3.png",
      occasion1: "Retirement",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026273/Songbee/memorial_nytoci.png",
      occasion1: "Memorials",
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1715026265/Songbee/justbecause_lxkkmz.png",
      occasion1: "Just Because",
    }
  ]

const galleryRef = useRef(null);

const scrollToNext = () => {
  if (galleryRef.current) {
    let totalSlides
    if (isMobile === false) {
      totalSlides = occasions.length;
    } else {
      totalSlides = occasionsSingle.length
    }
    const currentSlide = galleryRef.current.scrollLeft / galleryRef.current.clientWidth;
    const nextIndex = (currentSlide + 1) % totalSlides;

    galleryRef.current.scrollTo({
      left: nextIndex * galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  }
};

const scrollToPrev = () => {
  if (galleryRef.current) {
    let totalSlides
    if (isMobile === false) {
      totalSlides = occasions.length;
    } else {
      totalSlides = occasionsSingle.length
    }
    const currentSlide = galleryRef.current.scrollLeft / galleryRef.current.clientWidth;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;

    galleryRef.current.scrollTo({
      left: prevIndex * galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  }
};


return (
  <div className="occasions">

    <h2>Songs For Every Occasion</h2>

    <div className="occasionSlides no-scrollbar" ref={galleryRef}>
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

      {/* depending on window size, displays one or three occasions per page */}

      {isMobile ?
        occasionsSingle.map((item) => (
          <div className="active-occasion-single" key={item.name1}>
            <img className="occasion-img" src={item.image1} alt="" />
            <h3>{item.occasion1}</h3>
          </div>
        ))
        :
        occasions.map((item) => (
          <div className="active-occasion" key={item.name1}>
            <div className="active-occasionOne">
              <img className="occasion-img" src={item.image1} alt="" />
              <h3>{item.occasion1}</h3>
            </div>
            <div className="active-occasionTwo">
              <img className="occasion-img" src={item.image2} alt="" />
              <h3>{item.occasion2}</h3>
            </div>
            <div className="active-occasionThree">
              <img className="occasion-img" src={item.image3} alt="" />
              <h3>{item.occasion3}</h3>
            </div>
          </div>
        ))
      }

    </div>

  </div>
);
}

export default SongsForEveryOccasion;
