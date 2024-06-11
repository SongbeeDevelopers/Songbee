import React from "react";

function LearningPackVideo() {
  return (
    <div className="lp-video">
      <img className="try-bee lp-try-bee video-bee" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076528/Songbee/Bee_e8eelp.png" />
      <img className="video-colorMusicNotes" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076545/Songbee/color-music-notes_ouootu.png" alt="" />
      <img className="video-blackMusicNotes" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076604/Songbee/music-notes-black_hvqvax.png" alt="" />
      <img className="video-colorFlowers" src="https://res.cloudinary.com/dke4ukd0z/image/upload/v1714076551/Songbee/colorflowers_wesazl.png" alt="" />
      <iframe
        style={{width:'100vw',height:'calc(1600/900*100vw)',border:'none', padding: '25px'}}
        src="https://drive.google.com/file/d/1OxSXi_Oa2PAV8IBjLJsQ9CINUUL87xfv/preview?"
        autoPlay
        muted
        loop
        controls
      ></iframe>
      <h2>Play To Learn!</h2>
    </div>
  );
}

export default LearningPackVideo;
