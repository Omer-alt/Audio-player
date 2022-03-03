import styled from "styled-components";
import * as FaIcons from "react-icons/fa";//l'icone de menu
import { IconContext } from "react-icons/lib";
  
const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const Sidebar = ({sidebar, showSidebar}) => {
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" ,}}>
        <Nav>          
          <FaIcons.FaBars style ={{margin:'10px', cursor:'pointer'}} onClick={showSidebar} />
        </Nav>  
      </IconContext.Provider>
    </>
  );
};
  
export default Sidebar;




