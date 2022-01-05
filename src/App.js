import './App.css';
// import './components/AudioPlayer';
import {tracks} from './components/Data/tracks'
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <div>
      <AudioPlayer tracks={tracks} />
    </div>
  );
}

export default App;
