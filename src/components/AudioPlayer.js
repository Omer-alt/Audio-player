import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaVolumeUp } from "react-icons/fa"
import styled from "styled-components";
import AudioControls from './AudioControls';
import Backdrop from "./Backdrop";
import Sidebar  from "./sideBar";
import RealSideRight from "./sidebarRightSwitch";

import '../styles/AudioPlayer.css';

function AudioPlayer({tracks}){
    //state
    const [trackIndex, SetTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [vol, setVol] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sidebar, setSidebar] = useState(false);  // afiche le cadre droit de la fenetre
    const [speaker, setspeaker] = useState(false);

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
            console.log("Audio ref",audioRef)
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
    },[audioSrc, trackIndex]);
    // useEffect(()=>{
    //    setVol(audioRef.current.volume)
    // },[audioRef.current.volume]);

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
    //ouverture et fermeture 
    const showSidebar = ()=>{
        setSidebar(!sidebar)
    }
    const showspeaker = () => {
        setspeaker(!speaker);
    }

    // add style in the playback progress
    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;
    // add style in speaker level
    const currentPercentageVolume = vol ? `${(audioRef.current.volume) * 100}%` : '0%';
    const speakerStyling  = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentageVolume}, #fff), color-stop(${audioRef.current.volume}, #777))
    `;

    //handle the volume
    function setVolume(value){
        
        setVol(value);
        audioRef.current.volume = value;
        console.log("volume",audioRef.current.volume)
    }

    //composant style pour la gestion de volume
    const Speaker = styled.div `
        float: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        bottom:${( {speaker} ) => (speaker ? "1rem":"none")};
        positin: relative;
    `;

    return(
        <div className="player">
            <div className="audio-player">
                <Sidebar 
                    sidebar={sidebar}
                    showSidebar={showSidebar}
                />
                <div className="track-info">
                    <img className="artwork" 
                        src={image}
                        alt={`track artwork for ${title} by ${artist}`}
                    />
                    <h2>{artist}</h2>
                    <h3>{title}</h3>
                    <div className="track-info-setting">
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
                        <Speaker>
                            <FaVolumeUp 
                                className="speaker-icon"
                                onClick={showspeaker}
                            />
                            {speaker &&
                                <input 
                                    type="range" 
                                    value={vol*100} 
                                    min="15" 
                                    max="100" 
                                    // value={audioRef.current.volume } 
                                    
                                    className="volume_slider" 
                                    onChange={(e) => setVolume(e.target.value/100)}
                                    style={{background: speakerStyling}}
                                /> 
                                // <input 
                                //     type="range" 
                                //     min="1" 
                                //     max="100" 
                                //     // value={audioRef.current.volume } 
                                //     value={max} 
                                //     className="volume_slider" 
                                //     onChange={(e) => setVolume(e.target.value)}
                                //     style={{background: speakerStyling}}
                                // />     
                            }
                        </Speaker>
                    </div> 
                </div>
                <Backdrop
                    trackIndex={trackIndex}
                    isPlaying={isPlaying}
                    activeColor={color}
                    sidebar={sidebar}
                />
            </div>
            <section className="audio-section">
                    
                {sidebar &&
                    <RealSideRight 
                    className="audio-section-right"
                    trackIndex={trackIndex}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                    tracks={tracks}
                />
                }
                    
            </section>
        </div>
       
    );
}

export default AudioPlayer;