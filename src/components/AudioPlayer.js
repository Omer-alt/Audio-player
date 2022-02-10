import React, { useState, useEffect, useRef, useCallback } from "react";
import AudioControls from './AudioControls';
import Backdrop from "./Backdrop";
import Sidebar  from "./sideBar";
import SidebarRight from "./sidebarRight";

import '../styles/AudioPlayer.css';

function AudioPlayer({tracks}){
    //state
    const [trackIndex, SetTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    
    const {title, artist, color, image, audioSrc} = tracks[trackIndex];

    //refs// pour contenir un objet modifiable initialise a la valeur en parametre 
    const audioRef = useRef( new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    const { duration } = audioRef.current;

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
    // change the value of Sidebar
    const showSidebar = () => setSidebar(!sidebar) && console.log(sidebar);

    const startTimer = useCallback(() => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
    
        intervalRef.current = setInterval(() => {
          if (audioRef.current.ended) {
            toNextTrack();
          } else {
            setTrackProgress(audioRef.current.currentTime);
          }
        }, [1000]);
    },[trackIndex, toNextTrack]);
    
    // effect //pour effectuer des effect apres le chargement de la page (c'est le changement de [isPlaying] seul qui determine l'etat de la musique)
    useEffect(()=>{
        if (isPlaying){
            audioRef.current.play();
            startTimer();
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

    //handle scrobbing
    const onScrub = (value) =>{
        clearInterval(intervalRef.current);

        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }

    const onScrubEnd = (value) =>{
        if (!isPlaying){
            setIsPlaying(true);
        }
        startTimer();
    }

    // add style in the playback progress
    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;

    return(
        <div className="audio-player">
            <Sidebar 
                sidebar={sidebar}
                showSidebar={showSidebar}
            />
            <section className="audio-section">
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
                    <input 
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration? duration : `${duration}`}
                        className="progress"
                        onChange={(e) =>{onScrub(e.target.value)}}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        style={{background:trackStyling}}
                    />
                </div>
                <Backdrop
                    trackIndex={trackIndex}
                    isPlaying={isPlaying}
                    activeColor={color}
                    sidebar={sidebar}
                />
                <SidebarRight
                    sidebar={sidebar}
                    showSidebar={showSidebar}
                />
                
            </section>
        </div>
    );
}

export default AudioPlayer;