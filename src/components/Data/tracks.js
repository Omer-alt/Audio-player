//image
import monstera from "./Assets/images/monstera.jpg";
import mint from "./Assets/images/mint.jpg";
import chikimg from "./Assets/images/chike.jpg";
import keryimg from "./Assets/images/kery_james.jpeg";
import cysoulimg from "./Assets/images/cysoul.jpg"
import ayaimg from "./Assets/images/ayanakamura.jpg"
//music 
import fally from "./Assets/music/fally_ipupa.mp3";
import damso from "./Assets/music/Damso - Humain .mp3";
import chike from "./Assets/music/Chiké_Roju.mp3";
import Ayanakamura from "./Assets/music/Aya_Nakamura_-_Pookie_(Clip_officiel)(128k).mp3";
import TenorftCysoul from "./Assets/music/TENOR_-_SALAZAR_ft_CYSOUL_(CLIP_OFFICIEL)(256k).mp3";
import Kery_James from "./Assets/music/Kery_James_-_A_L'Horizon_ft._Corneille(128k).m4a"


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
    title: "Roju",
    artist: "Chike",
    audioSrc: chike, 
    image: chikimg,
    color: "#FFD770",
  },
  {
    title: "Pookie",
    artist: "Aya_Nakamura",
    audioSrc: Ayanakamura, 
    image: ayaimg,
    color: "#3F2893",
  },
  {
    title: "A L'Horizon",
    artist: "Kery James ft Corneille",
    audioSrc: Kery_James, 
    image: keryimg,
    color: "#00A886",
  },
  {
    title: "SALAZAR",
    artist: "Chike",
    audioSrc: TenorftCysoul, 
    image: cysoulimg,
    color: "#00AA9B",
  },
];