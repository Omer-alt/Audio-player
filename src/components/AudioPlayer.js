import React, { useState, useEffect, useRef } from "react";
import AudioControls from './AudioControls';

import '../styles/AudioPlayer.css';

// import {tracks} from "./Data/tracks"

function AudioPlayer({tracks}){
    //state
    const [trackIndex, SetTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const {title, artist, color, image, audioSrc} = tracks[trackIndex];

    //refs// pour contenir un objet modifiable initialise a la valeur en parametre 
    const audioRef = useRef( new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
    
        intervalRef.current = setInterval(() => {
          if (audioRef.current.ended) {
            toNextTrack();
          } else {
            setTrackProgress(audioRef.current.currentTime);
          }
        }, [1000]);
    };
    

    const toPrevTrack = () =>{ 
        if (trackIndex - 1 < 0){
            SetTrackIndex(tracks.length - 1);
        } else {
            SetTrackIndex(trackIndex - 1);
        }
    }

    const toNextTrack = () =>{ 
        if (trackIndex < tracks.length - 1 ){
            SetTrackIndex(trackIndex + 1);
        } else {
            SetTrackIndex(0);
        }
    }

    // effect //pour effectuer des effect apres le chargement de la page (c'est le changement de [isPlaying] seul qui determine l'etat de la musique)
    useEffect(()=>{
        if (isPlaying){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    },[isPlaying]);

    useEffect(()=>{
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    },[]);

    useEffect(()=>{
        audioRef.current.pause();

        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);
        if (isReady.current){
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            isReady.current = true;
        } 
    },[trackIndex]);

    return(
        <div className="audio-player">
            <div className="track-info">

                <img className="artwork" 
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />
                <h2>{title}</h2>
                <h3>{artist}</h3>
                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />
            </div>
        </div>
    );
}

export default AudioPlayer;