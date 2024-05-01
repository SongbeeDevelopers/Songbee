import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import '../LandingPage.css'


function TestimonialSection() {

  const isMobile = useMediaQuery({ query: `(max-width: 815px)`} )

  const testimonials = [
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070459/Songbee/bee-one_f7jks6.png",
      image2: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070461/Songbee/bee-two_ii3ld8.png",
      name1: "Connor D.",
      name2: "Shephard B.",

      description1: `"I had the most amazing and streamlined process working with Songbee. I hired Songbee to write and produce a song for my partner’s Valentine’s Day present and they didn’t disappoint! 10/10"`,
      description2: `"Songbee did an amazing job composing a song for an anniversary gift! The song was for my wife, and I wanted it to be personalized so it was clearly coming from me, from our life together"`,
    },
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070459/Songbee/bee-one_f7jks6.png",
      image2: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070461/Songbee/bee-two_ii3ld8.png",
      name1: "Michael T.",
      name2: "Johanna G.",

      description1: `"Songbee was amazing! They took my lyrics and put together a song that made my BFF cry. forever as well! Super job. Thx!"`,
      description2: `"Made a song for my loving husband and we both cried as we heard it, thank you so much! Definitely recommend!"`,
    },
  ];

  const testimonialsSingle = [
    {
      image1: "https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070459/Songbee/bee-one_f7jks6.png",
      name1: 'Connor D.',
      description1: `"I had the most amazing and streamlined process working with Songbee. I hired Songbee to write and produce a song for my partner’s Valentine’s Day present and they didn’t disappoint! 10/10"`
    },
    {
      image1: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070461/Songbee/bee-two_ii3ld8.png',
      name1: 'Shephard B.',
      description1: `"Songbee did an amazing job composing a song for an anniversary gift! The song was for my wife, and I wanted it to be personalized so it was clearly coming from me, from our life together"`
    },
    {
      image1: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070459/Songbee/bee-one_f7jks6.png',
      name1: 'Michael T.',
      description1: `"Songbee was amazing! They took my lyrics and put together a song that made my BFF cry. forever as well! Super job. Thx!"`
    },
    {
      image1: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070461/Songbee/bee-two_ii3ld8.png',
      name1: 'Johanna G.',
      description1: `"Made a song for my loving husband and we both cried as we heard it, thank you so much! Definitely recommend!"`
    }
  ]

  const galleryRef = useRef(null);

  const scrollToNext = () => {
    if (galleryRef.current) {
      let totalSlides
      if (isMobile === false) {
        totalSlides = testimonials.length;
      } else {
        totalSlides = testimonialsSingle.length
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
        totalSlides = testimonials.length;
      } else {
        totalSlides = testimonialsSingle.length
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
    <div className="testimonials-background">
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

          {/* depending on window size, displays one or two testimonials per page */}

          {isMobile ? 
            testimonialsSingle.map((item) => (
              <div className="active-slide" key={item.name1}>
                <img className="bee-one" src={item.image1} alt="" />
                <img className="star-one" src="/https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070494/Songbee/star-one_ohfquo.png" alt="" />
                <h3>{item.name1}</h3>
                <p>{item.description1}</p>
              </div>
            ))
          :
            testimonials.map((item) => (
              <div className="active-slide" key={item.name1}>
                <div className="active-slideOne">
                  <img className="bee-one" src={item.image1} alt="" />
                  <img className="star-one" src="/https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070494/Songbee/star-one_ohfquo.png" alt="" />
                  <h3>{item.name1}</h3>
                  <p>{item.description1}</p>
                </div>
                <div className="active-slideTwo">
                  <img className="bee-two" src={item.image2} alt="" />
                  <img className="star-two" src="/https://res.cloudinary.com/dke4ukd0z/image/upload/v1714070494/Songbee/star-one_ohfquo.png" alt="" />
                  <h3>{item.name2}</h3>
                  <p>{item.description2}</p>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  );
}

export default TestimonialSection;
