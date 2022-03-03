import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
import { SidebarData } from "./sideBarData";
import SubMenu from "./subMenu";

// import { //Link,
//   Switch,
//   Route,
//   BrowserRouter as Router,
// } from "react-router-dom";

const SidebarNav = styled.div `
  background: #15171c;
  display: ${({ sidebar }) => (sidebar ? "block" : "none")};
  transition: 350ms;
  z-index: 10;
  justify-self: end;
  min-width: 300px;
`;
const TracksNav = styled.div `
  background: #252831;
  height: 50px;
  display: flex;
  border-radius: 20px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 18px;
  font-size: 20px;
`;

const SidebarRight = (
  { 
    sidebar,
    setSidebar,
    setChangenav, 
    setDisplayList,
    setSearch,
  }) =>{
  
  return (
    <SidebarNav sidebar={sidebar}  >
      <TracksNav>
        <AiIcons.AiOutlineClose style={{color: "#fff", cursor:'pointer'}} onClick={ () => setSidebar(false) } />
        
      </TracksNav>

      {SidebarData.map((item, index) => {
        return <SubMenu 
          setChangenav={setChangenav}
          item={item} 
          key={index}
          setDisplayList={setDisplayList}
          setSearch={setSearch}
        />;
      })}          
    </SidebarNav>
  );
}

export default SidebarRight;
