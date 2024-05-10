import React from "react";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function JrLearningPacksSection() {

  const history = useHistory()

  const packs = [
    {
      age: '0-12 Months',
      img: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076166/Songbee/0-1_mdeh2q.png',
      description: `
        Your baby goes through so many changes in the first year. 
        Help them meet their milestones.
      `
    },
    {
      age: '1- 2 Years',
      img: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076171/Songbee/1-2_om40ht.png',
      description: `
        Your baby is growing up! They are starting to walk, play, and communicate on their own. 
        Enhance learning to help them through each new step.
      `
    },
    {
      age: '3-4 Years',
      img: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076177/Songbee/3-4_vabtho.png',
      description: `
        Learn communication skills, collaboration, and emotional understanding. 
        Help your child excel in school or at home with musical learning.
      `
    },
    // {
    //   age: '5 years & up!',
    //   img: 'https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076182/Songbee/5up_qme8dk.png',
    //   description: `
    //     Develop a more mature and logical way of thinking. 
    //     Further your child's social, physical, cognitive,  motor, and language development.
    //   `
    // },
  ]

  const LearnMoreButton = () => {
    return (
      <button
        className="jr-landing-btn jr-learn-more-btn"
        onClick={() => history.push('/learning-packs')}
      > Learn More
      </button>
    )
  }

  return (
    <div className="jr-learning-packs-bg">

      <h2 className="jr-learning-packs-title">Learning Packs</h2>

      <div className="age-container">
        {packs.map((pack) => (
          <div className="age-item">

            <div className="age-item-contents">
              <h3>{pack.age}</h3>
              <img src={pack.img} />
              <p>{pack.description}</p>
            </div>
              <LearnMoreButton />
          </div>
        ))}
      </div>

    </div >
  )
}

export default JrLearningPacksSection
