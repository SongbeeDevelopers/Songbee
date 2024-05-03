import React from "react";
import { useState, useRef } from "react";

import '../../SongRequestPage/SongRequestPage.css';

function SelectArtistAudioButton({ url }) {
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
    };

    return (
        <div>
            <audio ref={audioRef} src={url}></audio>
            <button  className={isPlaying ? 'select-player-container pause' : 'select-player-container play'} onClick={playPause}></button>  
     </div>
    );
}

export default SelectArtistAudioButton;


