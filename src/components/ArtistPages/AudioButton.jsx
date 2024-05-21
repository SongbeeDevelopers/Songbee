import React from "react";
import { useState, useRef } from "react";

function AudioButton({ url, popup, setShowPopUp, setSelectedSong, artist }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playPause = () => {
        const audioElement = audioRef.current;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);


        if (popup === true && setShowPopUp && setSelectedSong) {
            setShowPopUp(true)
            setSelectedSong(artist)
           
        }

    };

    



    return (
        <div>
            <audio ref={audioRef} src={url}></audio>
            <button  className={isPlaying ? 'player-container pause' : 'player-container play'} onClick={playPause}>{isPlaying ? 'pause' : 'play'}</button> 
     </div>
    );
}

export default AudioButton;


