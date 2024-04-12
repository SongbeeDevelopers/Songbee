import React from "react";

function LearningPackVideo() {
  return (
    <div className="lp-video">
      <img className="try-bee lp-try-bee video-bee" src="/junior/Bee.png" />
      <img className="video-colorMusicNotes" src="/junior/color-music-notes.png" alt="" />
      <img className="video-blackMusicNotes" src="/junior/music-notes-black.png" alt="" />
      <img className="video-colorFlowers" src="/junior/colorflowers.png" alt="" />
      <video
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        autoPlay
        muted
        loop
        controls
      ></video>
      <h2>Play To Learn!</h2>
    </div>
  );
}

export default LearningPackVideo;
