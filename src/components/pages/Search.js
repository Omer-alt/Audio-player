import React from "react";
import * as BsIcons from "react-icons/bs";
import background from "../Data/Assets/images/zicGirl.jpg"
import "../../styles/Search.css"

export const Search = ({setSearch, setChangenav}) => {
  return (
    <div 
      style={{
        backgroundImage: `url(${background})`,
        position:"static",
        minWidth: "300px",
        minHeight:"500px",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        borderRadius:"20px",
      }}
    >
      <BsIcons.BsArrowLeft
        style={{color: "#fff", cursor:'pointer', height:'20px',margin:"10px"}} 
        onClick={()=>{  setSearch(false); setChangenav(false)} } 
      />
      
      <form action="#" className="form">
        <input type="text" placeholder="Artist name"></input>
        <input type="text" placeholder="Track title"></input>
        <input type="text" placeholder="Albums"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};