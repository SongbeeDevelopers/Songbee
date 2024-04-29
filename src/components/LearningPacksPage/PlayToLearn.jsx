import React from "react";

function PlayToLearn() {
  const text = [
    {
      id: 0,
      title: "Milestone Based",
      description:
        "Developmentally appropriate learning packs designed to meet important milestones.",
    },

    {
      id: 1,
      title: "Thoughtfully Crafted",
      description:
        "Designed to redesign play and create the ideal learning environment.",
    },

    {
      id: 2,
      title: "Supported Play",
      description:
        "Feel supported with our play & learning guides to make the most out of your play time!",
    },
  ];
  return (
    <div className="lp-playtolearn">
      <h2>Play To Learn!</h2>

      <div className="lp-playtolearnCards">
        {text.map((card) => (
          <div className="lp-playtolearnCard">
            <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076610/Songbee/music-notes_meuusw.png" alt="" className="lp-music-notes" />
            <div className="lp-cardRight">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="jr-landing-btn">Get Started</button>
    </div>
  );
}

export default PlayToLearn;
