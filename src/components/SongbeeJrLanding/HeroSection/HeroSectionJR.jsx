import React from "react";

import './HeroSectionJR.css';


function HeroSectionJR() {
    return (
        <>
        <div className="hero-section">
            <h1 className="music">Music <span className="forEvery">For <br /> Every</span> Milestone</h1>
                <img className="underlineImg" src="/underline.png" /> 
                <p className="pTag">Reach your child's developmental <br />milestones with custom learning songs</p>
               <div className="image-container">    
                    <img src="/getStarted.png" className="startSong" /> 
                    <button className="button">Get Started</button>
               </div> 
                <img src="/Bee.png" className="beeImg" />
                <img src="/bee.gif" /> 
                <img src="/songbeejr.png" className="overlay-gif"  />   
               
        </div>
        </>
        
        
        
    )

}

export default HeroSectionJR;