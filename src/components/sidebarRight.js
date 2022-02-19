import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./sideBarData";
// import SubMenu from "./subMenu";

import { Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import { Contact, Github, Twitter, Gmail } from "./pages/contact";
import { Search } from "./pages/Search";
import { Song } from "./pages/songList";

const SidebarNav = styled.div`
  background: #15171c;
  display: ${({ sidebar }) => (sidebar ? "block" : "none")};
  transition: 350ms;
  z-index: 10;
  justify-self: end;
  min-width: 300px;
`;
const TracksNav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// top: 10px;
// top: ${({ sidebar }) => (sidebar ? "0" : "-100%")};


const SidebarRight = ({sidebar,showSidebar}) =>{

    return (
        <SidebarNav sidebar={sidebar}>
            <TracksNav>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
            </TracksNav>
            {/* {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })} */}
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

        </SidebarNav>
    );
}

export default SidebarRight;
