import monstera from "./Assets/images/monstera.jpg";
import mint from "./Assets/images/mint.jpg";
import chikimg from "./Assets/images/chike.jpg";
import fally from "./Assets/music/fally_ipupa.mp3"
import damso from "./Assets/music/Damso - Humain .mp3"
import chike from "./Assets/music/Chiké_Roju.mp3"

export  const tracks = [
  {
    title: "Migrant des reves",
    artist: "Fally ipupa",
    audioSrc: fally, 
    image: monstera,
    color: "#5f9fff",
  },
  {
    title: "Humain",
    artist: "Damso",
    audioSrc: damso, 
    image: mint,
    color: "#ffb77a",
  },
  {
    title: "chike",
    artist: "Roju",
    audioSrc: chike, 
    image: chikimg,
    color: "#FFD770",
  },
];