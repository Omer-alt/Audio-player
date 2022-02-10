import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

const SidebarNav = styled.div`
  background: #15171c;
  top: 10px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  justify-self: end;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
const SidebarRight = ({sidebar,showSidebar}) =>{

    return (
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
            {/* <NavIcon to="#"> */}
                <AiIcons.AiOutlineClose onClick={showSidebar} />
            {/* </NavIcon> */}
            {/* {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
            })} */}
            </SidebarWrap>
        </SidebarNav>
    );
}

export default SidebarRight;
