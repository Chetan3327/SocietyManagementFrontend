import women from "../../assets/Society_Img/wibd.jpg";
import anveshan from "../../assets/Society_Img/anveshan.jpg";
import avaran from "../../assets/Society_Img/avaran.jpg";
import chromavita from "../../assets/Society_Img/chromavita.jpg";
import gdsc from "../../assets/Society_Img/gdsc.jpg";
import hash_define from "../../assets/Society_Img/hash_define.jpg";
import ieee_wie from "../../assets/Society_Img/ieee_wie.jpg";
import ieee from "../../assets/Society_Img/ieee.jpg";
import kalam from "../../assets/Society_Img/kalam.jpg";
import namespace from "../../assets/Society_Img/namespace.jpg";
import opticlick from "../../assets/Society_Img/opticlick.jpg";
import drishti from "../../assets/Society_Img/drishti.jpeg";
import electronauts from "../../assets/Society_Img/electronauts.jpg";
import octave from "../../assets/Society_Img/octave.jpg";
import panache from "../../assets/Society_Img/panache.jpg";
import mavericks from "../../assets/Society_Img/mavericks.jpg";
import Societyslider from "./Societyslider";

export type Society = {
  image: string;
  society: string;
};

const nontechnical: Society[] = [
  {
    image: opticlick,
    society: "Photography",
  },
  {
    image: mavericks,
    society: "Dance",
  },
  {
    image: octave,
    society: "Music",
  },
  {
    image: panache,
    society: "Fashion",
  },
  {
    image: avaran,
    society: "Drama",
  },
  {
    image: kalam,
    society: "Literary",
  },
  {
    image: chromavita,
    society: "Art",
  },
  {
    image: drishti,
    society: "SocialWork",
  },
];

const technical: Society[] = [
  {
    image: women,
    society: "WIBD",
  },
  {
    image: namespace,
    society: "Namespace",
  },
  {
    image: gdsc,
    society: "GDSC",
  },
  {
    image: ieee,
    society: "IEEE",
  },
  {
    image: hash_define,
    society: "#Define",
  },
  {
    image: ieee_wie,
    society: "WIE",
  },

  {
    image: anveshan,
    society: "Anveshan",
  },
  {
    image: electronauts,
    society: "Electronauts",
  },
];
function Allsocities() {
  return (
    <div className="bg-sky-50">
      <Societyslider title={"Non-Technical Society"} arr={nontechnical} />
      <Societyslider title={"Technical Society"} arr={technical} />
    </div>
  );
}

export default Allsocities;
