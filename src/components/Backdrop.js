import React, {useEffect} from 'react';
import '../styles/Backdrop.css'

const Backdrop = ({activeColor, trackIndex, isPlaying, Sidebar}) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--active-color', activeColor)
    } ,[trackIndex, activeColor]);
    useEffect(() => {
        Sidebar?
            document.documentElement.style.setProperty('--width',"700px")
        :
            document.documentElement.style.setProperty('--width',"350px")
        ;
    } ,[Sidebar]);

    return(
        <div className={`color-backdrop ${isPlaying? "isPlaying": "idle"}`}/>
    );
}

export default Backdrop;
