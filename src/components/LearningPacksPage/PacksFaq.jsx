import React from "react";
import { Question } from "../JrFaq.jsx/JrFaq";
import JrNewsletterSection from "../JrLandingPage/JrLandingSections/9-JrNewsletterSection";

function PacksFaq() {
  const questions = [
    {
      id: 0,
      question: "How much is a Learning Pack",
      answer: `
      For 0-12 months learning packs are $80/pack and deliver every two months. 
      Starting at 1 year, packs are $120/pack and deliver every three months.
      `
    },
    {
      id: 0,
      question: "How do I receive my subscription?",
      answer:`
      Your learning pack subscription is delivered via our online customer portal.
      `
    },
    {
      id: 0,
      question: "How long does delivery take?",
      answer: `
      Delivery is available within 24-48 hours on your customer portal. You can view your 
      learning songs and play guides on the portal. If your selected pack does have physical 
      items, typical U.S. ground shipping delivery takes 5-7 business days.
      `
    },
    {
      id: 0,
      question: "Can I cancel my subscription?",
      answer: `
      Yes you can skip a month or cancel your subscription anytime.
      `
    },
    {
      id: 0,
      question: "How do I contact Songbee for support?",
      answer:`
      You can message us on your customer portal anytime or send us an email for 
      support at hello@songbee.com. We will respond to your support request as soon as possible. 
      We are here to help you and your child on this important journey!
      `
    },
  ];
  return (
    <div className="lp-video packs-faq">
      <img
        className="try-bee lp-try-bee video-bee"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png"
      />
      <img
        className="video-colorMusicNotes"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076545/Songbee/color-music-notes_ouootu.png"
        alt=""
      />
      <img
        className="video-blackMusicNotes"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076604/Songbee/music-notes-black_hvqvax.png"
        alt=""
      />
      <img
        className="video-colorFlowers"
        src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076551/Songbee/colorflowers_wesazl.png"
        alt=""
      />

    
      <h2>
        Frequently <span className="highlight"> Asked</span> Questions
      </h2>
      <div className="packs-faqQuestions">
        {questions.map((item) => (
          <Question question={item} />
        ))}
      </div>
      <div className="faq-line">

      </div>
      <JrNewsletterSection/>
    </div>
  );
}

export default PacksFaq;
