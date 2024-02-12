import React from 'react';
import './TeamPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function TeamPage() {
  return (
    <>
       
      <h1 className='aboutHeader'>Team Songbee</h1> 
      <div className='profileShots'>
        <img className="profile-img1" src="abbu-profile-pic.png" />
        <img className="profile-img1" src="lio-profile-pic.png" />
        <img className="profile-img1" src="brian-profile-pic.png" />
        <img className="profile-img1" src="walker-profile-pic.png" />
      </div>

      {/* This 👇 code is for the QR codes */}
      <div className='team-container'>
        <img className="profile-img" src="abbuqr.png" />
        <img className="profile-img" src="lioqr.png" />
        <img className="profile-img" src="brian-w.png" />
        <img className="profile-img" src="walkerqr.png" />
      </div>
      
     
    </>
    
    
  );
  
}

export default TeamPage;
