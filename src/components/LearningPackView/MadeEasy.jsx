import React from "react";

function LearningMadeEasy() {
  const text = [
    {
      id: 0,
      title: "Step by step ",
      description:
        "A bi monthly learning pack, carefully crafted with your baby‘s milestones in mind.",
    },

    {
      id: 1,
      title: "Ease Stress",
      description:
        "Play & Learning guides provided to make the most of your pack, ease your mind, and  optimize your child’s learning!",
    },

    {
      id: 2,
      title: "Easy to use",
      description:
        "Receive your pack, follow our play guides, and watch your baby flourish!",
    },
  ];
  return (
    <div className="lp-playtolearn learningMadeEasy">
      <h2>Learning Made Easy</h2>

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
    </div>
  );
}

export default LearningMadeEasy;
