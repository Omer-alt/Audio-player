import React, { useState } from "react";
 import { Link,
//          Switch,
//          Route,
//          BrowserRouter as Router,
 } from "react-router-dom";
import styled from "styled-components";

// import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
// import { Contact, Github, Twitter, Gmail } from "./pages/contact";
// import { Search } from "./pages/Search";
// import { Song } from "./pages/songList";
  
const SidebarLink = styled(Link)`
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
    cursor: pointer;
  }
`;
  
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
  
const DropdownLink = styled(Link)`
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
  
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [changenav, setChangenav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const showChangenav = () => setChangenav(!changenav);
  
  return (
    <div>
      {/* {changenav?( 
        <Router>
          <Switch>
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/about-us/aim" exact component={OurAim} />
            <Route path="/about-us/vision" exact component={OurVision} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/contact/github" exact component={Github} />
            <Route path="/contact/twitter" exact component={Twitter} />
            <Route path="/contact/gmail" exact component={Gmail} />
            <Route path="/search" exact component={Search} />
            <Route path="/song" exact component={Song} />
          </Switch>
        </Router>
        
        ):(   */}
          <SidebarLink to={item.path} 
          onClick={item.subNav && showSubnav && showChangenav}>
            <div>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
              {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
          </SidebarLink>
          {subnav?
            item.sujsbNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
              );
            }):null}`
        {/* ) 
      }  */}
    </div>
  );
};
  
export default SubMenu;