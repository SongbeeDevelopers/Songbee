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
        <div className='teamMember'>
          <img className="profile-img1" src="abbu-profile-pic.png" />
          <h2>Abubakar Aden</h2>
          <img className="profile-img" src="abbuqr2.png" />
        </div>
        <div className='teamMember'>
          <img className="profile-img1" src="lio-profile-pic.png" />
          <h2>Aliona C. Johnson</h2>
          <img className="profile-img" src="lioqr2.png" />
        </div>  
        <div className='teamMember'>
          <img className="profile-img1" src="brian-profile2.png" />
          <h2>Brian Werner</h2>
          <img className="profile-img" src="brianqr2.png" />
        </div>
        <div className='teamMember'>
          <img className="profile-img1" src="walker-profile2.png" />
          <h2>Walker Neudorff</h2>
          <img className="profile-img" src="walkerqr2.png" />
        </div>
      </div>

     
      
     
    </>
    
    
  );
  
}

export default TeamPage;
