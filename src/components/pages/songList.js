import React from "react";
import * as AiIcons from "react-icons/ai";

import "../../styles/songList.css"
import Track from "./Track"
import TracksNav from "../outils/TracksNav";
// import 

export const Song = ({setDisplayList, setChangenav, tracks, trackIndex}) => {
  return (
    <div className="songList">
      <TracksNav>
        
      </TracksNav>
      <AiIcons.AiOutlineClose 
        style={{color: "#fff", cursor:'pointer'}} 
        onClick={()=>{  setDisplayList(false); setChangenav(false)} } 
      />
      
      {tracks.map((track,index) => {
        return(
          <Track track={track} trackIndex={trackIndex} key={index} />
        );
      })
      }

      
    </div>
  );
};