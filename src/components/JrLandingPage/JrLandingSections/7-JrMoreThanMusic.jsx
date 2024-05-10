import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import '../JrLandingPage.css'


function JrMoreThanMusicSection() {

  const history = useHistory()

  const columns = [
    {
      title: 'Step by Step',
      description: `
      A bi monthly learning pack delivery, designed by experts to help your baby 
      with the skills they need most.
      `,
    },
    {
      title: 'Offer Support',
      description: `
      Learning and Play guides provided to make the most of your learning pack 
      and optimize your child's learning!
      `,
    },
    {
      title: 'Both',
      description: `
      Learning Guides to supplement the custom songs.
      `,
    },
  ]

  return (
    <div className="jr-mtjm-bg">
      <div className="jr-mtjm">

        <h2>More Than Just Music</h2>

        <div className="jr-mtjm-items">
          {columns.map((column) => (
            <div className="jr-mtjm-item">
              <img src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076610/Songbee/music-notes_meuusw.png" />
              <div>
                <h3>{column.title}</h3>
                <p>{column.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          id="more-than-music-btn"
          className="jr-landing-btn"
          onClick={() => history.push('/learning-packs')}
        > Get Started
        </button>

      </div>
    </div>
  )
}

export default JrMoreThanMusicSection
