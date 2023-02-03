import React from "react";
import * as AiIcons from "react-icons/ai";

import "../../styles/songList.css"
import "../../styles/tracksNav.css"
import Track from "./Track"
import TracksNav from "../outils/TracksNav";
// import 

export const Song = ({setDisplayList, setChangenav, tracks, trackIndex, SetTrackIndex}) => {
  return (
    <div className="songList">
      <div className="tracksnav">
        <AiIcons.AiOutlineClose 
          style={{color: "#fff", cursor:'pointer'}} 
          onClick={()=>{  setDisplayList(false); setChangenav(false)} } 
        />
      </div>
      
      {tracks.map((track,index) => {
        return(
          <Track 
            track={track} 
            trackIndex={trackIndex} 
            SetTrackIndex={SetTrackIndex}
            key={index} 
            index={index}
          />
        );
      })
      }

      
    </div>
  );
};