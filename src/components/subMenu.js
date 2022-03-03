/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
//  import { Link,
// //          Switch,
// //          Route,
// //          BrowserRouter as Router,
//  } from "react-router-dom";
import styled from "styled-components";

// import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
// import { Contact, Github, Twitter, Gmail } from "./pages/contact";
// import { Search } from "./pages/Search";
// import { Song } from "./pages/songList";
  
const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    background: #252831;
    border-left: 4px solid green;
    border-right: 2px solid green;
    cursor: pointer;
  }
`;
  
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
  
const DropdownLink = styled.div`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  
  &:hover {
    background: green;
    cursor: pointer;
  }
`;




const SubMenu = ({ item, setChangenav, setDisplayList, setSearch }) => {

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav)
  };  
  
  function handle (item, setDisplayList, setSearch, showSubnav ){

    // if(item.subNav){
    //   showSubnav()
    // }
    switch (item.id) {
      case 1:
        
        showSubnav()
        //console.log(item.subNav)
        //showSubnav(item, setSubnav, subnav);
        //setSubnav(true)
        break;
      case 4:
        //console.log(item.subNav)
        // showSubnav(item, setSubnav, subnav);
        showSubnav()
        break;
      case 8:
        setSearch(true)
        break;
      case  9:
        setDisplayList(true)
        break;
       
      default:  
    }
  }
  //console.log( setDisplayList)
  
  /*(item.subNav && showSubnav) ||
  ( (() => setChangenav(true)) && 
  ( (item.id===9 && (()=> setDisplayList(true)))
  ))*/
  return (
    <div>
      <SidebarLink  onClick={()=>
        { setChangenav(true); 

          handle(item, setDisplayList, setSearch, showSubnav )
        }}
        >
          <div >
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>

          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null
            }
          </div>
      </SidebarLink>

      { subnav?
        item.subNav.map( (item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        );
        }):null
      }

    </div>
  );
};
  
export default SubMenu;