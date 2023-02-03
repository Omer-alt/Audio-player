import { ReactComponent as Play } from '../Data/Assets/play.svg';
import { ReactComponent as Pause } from '../Data/Assets/pause.svg';
import "../../styles/Track.css"

function Track ( {track, key, index, trackIndex, SetTrackIndex} ){

    let {title, artist, audioScr, image, color}= track;

    const subString = (str) => {
        return    str.length > 20? str.substr(0,25) + "..." : str
    };

    // to select the song
    const selectSong = () =>{
        
        SetTrackIndex(index)
        

    }
    const handleClick = event => {
        // event.currentTarget.style.backgroundColor = 'salmon';
        // event.currentTarget.style.color = 'white';
    
        // event.currentTarget.classList.add('single-track-selected');

        var array = Array.prototype.slice.call(event.currentTarget.parentNode.childNodes);
        array.map((child, indexChild)=>{

            if (event.currentTarget !== child) {
                child.classList.remove('single-track-selected');
                child.onload = true;
                console.log("index ", indexChild, index)
            } else {
                child.classList.add('single-track-selected');
                child.onload = true;
                console.log("child",child.onload)
            }

        })

        console.log("event", event.currentTarget.parentNode.childNodes);
      };

    return(
        <div 
            className="single-track" 
            onClick={(e)=>{selectSong(); handleClick(e)}}
        >
            <div style={{display: "flex", }}>
                <img 
                    className="single-track-image"
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />

                <div className="single-track-text">
                    <span>{ artist }</span>
                    <span className="single-track-text-title">{ subString(title) }</span>
                </div>
            </div>

            <div className="single-tract-state">
                <button
                    type="button"
                    className="pause"
                    aria-label="select"           
                >
                    <Play/>
                </button> 
            </div>     
        </div>
    )
}

export default Track;