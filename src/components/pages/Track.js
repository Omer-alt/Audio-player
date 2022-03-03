import { ReactComponent as Play } from '../Data/Assets/play.svg';
import { ReactComponent as Pause } from '../Data/Assets/pause.svg';
import "../../styles/Track.css"

function Track ( {track, key, trackIndex} ){
    let {title, artist, audioScr, image, color}= track;
   console.log(key)
    const subString = (str) => {
        return    str.length > 20? str.substr(0,25) + "..." : str
    };

    return(
        <div className="single-track" >
            <img 
                className="single-track-image"
                src={image}
                alt={`track artwork for ${title} by ${artist}`}
            />

            <div className="single-track-text">
                <span>{ artist }</span>
                <span>{ subString(title) }</span>
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