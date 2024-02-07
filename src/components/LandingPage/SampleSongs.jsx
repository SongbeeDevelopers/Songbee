import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import MainButton from "./Button";
import { useRef } from "react";
function SampleSongs() {
  const sampleSongs = [
    {
      title1: "Pop",
      title2: "Country",
      name1: "Hannah",
      name2: "Berch",
      audio1: "/01 Basics New Mix 3.mp3",
      audio2: "/Berch.mp3",
    },

    {
      title1: "Rap",
      title2: "Folk",
      name1: "Donah",
      name2: "Lola",
      audio1: "/01 Basics New Mix 3.mp3",
      audio2: "/Berch.mp3",
    },
  ];
  const galleryRef = useRef(null);
  const scrollToNext = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: galleryRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollToPrev = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: -galleryRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="outer-sample">
    <div className="sample-songs">
      <div>
        <h2>Sample Songs</h2>
      </div>
      <div className="arrows">
        <svg
          onClick={() => scrollToPrev()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left-circle arrow-prev"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12H8" />
          <path d="m12 8-4 4 4 4" />
        </svg>
        <svg
          onClick={() => scrollToNext()}
          id="goNext"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right-circle arrow-next"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="m12 16 4-4-4-4" />
        </svg>
      </div>
      <div ref={galleryRef} className="all-audios no-scrollbar">
        {sampleSongs.map((song) => (
          <div className="active-audio">
            <div className="left-audio">
              <h3>{song.title1}</h3>
              <p>{song.name1}</p>
              <audio controls src={song.audio1}></audio>
            </div>

            <div className="right-audio">
              <h3>{song.title2}</h3>
              <p>{song.name2}</p>
              <audio controls src={song.audio2}></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SampleSongs;
