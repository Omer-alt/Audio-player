import React, {useEffect} from 'react';
import '../styles/Backdrop.css'

const Backdrop = ({activeColor, trackIndex, isPlaying}) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--active-color', activeColor)
    } ,[trackIndex, activeColor]);

    return(
        <div className={`color-backdrop ${isPlaying? "isPlaying": "idle"}`}/>
    );
}

export default Backdrop;
