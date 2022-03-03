import { useState } from "react";
// import {}
import SidebarRight from "./sidebarRight";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import { Contact, Github, Twitter, Gmail } from "./pages/contact";
import { Search } from "./pages/Search";
import { Song } from "./pages/songList";

function RealSideRight ({sidebar, setSidebar, className, tracks, trackIndex}) {
    const [changenav, setChangenav] = useState(false);// si un element du sidebar droit est choisi
    const [displayList, setDisplayList] = useState(false);//l'element choisi est la liste de musique
    const [search,setSearch] = useState(false); //0n veut effectuer une recherche

    const showDisplayList = () =>{
        setDisplayList(!displayList)
    }
    console.log(sidebar, changenav, displayList, search,trackIndex)

    return(
        <div className={className}>
            {!changenav ?
                <SidebarRight
                    setChangenav={setChangenav}
                    setDisplayList={setDisplayList}
                    setSearch={setSearch}
                    sidebar={sidebar}
                    setSidebar={setSidebar}
                />    

            :[  (displayList ?
                    <Song 
                        setDisplayList={setDisplayList} 
                        setChangenav={setChangenav} 
                        tracks={tracks} 
                        trackIndex={trackIndex} 
                    /> :
                    null
                ),             
                (search?
                    <Search setSearch={setSearch} setChangenav={setChangenav} /> :null
                ),
                
                ]
                
            }
        </div>
    );
    
}

export default RealSideRight;