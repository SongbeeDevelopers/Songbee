import React from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import '../LandingPage.css'


function SampleSongs() {

  const isMobile = useMediaQuery( { query: `(max-width: 815px)`} )

  const sampleSongs = [
    {
      title1: "Pop",
      title2: "Singer Songwriter",
      name1: "Hannah Rutti ",
      name2: "Berch",
      audio1: "/01 Basics New Mix 3.mp3",
      audio2: "/Berch.mp3",
    },
    {
      title1: "Country",
      title2: "Folk",
      name1: "Matt Mackey",
      name2: "Adam Soto",
      audio1: "/Country Matt Mackey.mp3",
      audio2: "/FolkAdam Suto.mp3",
    },
    {
      title1: "Rock",
      title2: "Singer Songwriter",
      name1: "Tommy Marra",
      name2: "Michael LeFevre",
      audio1: "/Rock-Tommy Marra.mp3",
      audio2: "/Singer Songwriter Michael LeFevre (1).mp3",
    },
  ];
  const sampleSongsSingle = [
    {
      title1: "Pop",
      name1: "Hannah Rutti ",
      audio1: "/01 Basics New Mix 3.mp3",
    },
    {
      title1: "Singer Songwriter",
      name1: "Berch",
      audio1: "/Berch.mp3",
    },
    {
      title1: "Country",
      name1: "Matt Mackey",
      audio1: "/Country Matt Mackey.mp3",
    },
    {
      title1: "Folk",
      name1: "Adam Soto",
      audio1: "/FolkAdam Suto.mp3",
    },
    {
      title1: "Rock",
      name1: "Tommy Marra",
      audio1: "/Rock-Tommy Marra.mp3",
    },
    {
      title1: "Singer Songwriter",
      name1: "Michael LeFevre",
      audio1: "/Singer Songwriter Michael LeFevre (1).mp3",
    },
  ]

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
    <div className="sample-outer-bg">
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
        {isMobile ?
          sampleSongsSingle.map((song) => (
            <div key={sampleSongs.indexOf(song)} className="active-audio">
              <div className="left-audio">
                <h3>{song.title1}</h3>
                <p>{song.name1}</p>
                <audio controls src={song.audio1}></audio>
              </div>
            </div>
          ))
        :
          sampleSongs.map((song) => (
            <div key={sampleSongs.indexOf(song)} className="active-audio">

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
          ))
        }
      </div>
    </div>
    </div>
  );
}

export default SampleSongs;
