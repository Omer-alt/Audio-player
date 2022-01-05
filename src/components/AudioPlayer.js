import React, { useState, useEffect, useRef } from "react";
import '../styles/AudioPlayer.css'

// import {tracks} from "./Data/tracks"

function AudioPlayer({tracks}){
    //state
    const [trackIndex, SetTrackIndex] = useState(0);
    const [trackProgress, SetTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const {title, artist, color, image, audioSrc} = tracks[trackIndex];

    //refs
    const audioRef = useRef( new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const toPrevTrack = () =>{ 
        console.log("TODO  go to prev");
    }

    const toNextTrack = () =>{ 
        console.log("TODO  go to next");
    }

    return(
        <div className="audio-player">
            <div className="track-info">

                <img className="artwork" 
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />
                <h2>{title}</h2>
                <h3>{artist}</h3>

            </div>
        </div>
    );
}

export default AudioPlayer;