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
import Slider_society from "./Slider_society";

export type Society = {
  image: string;
};

const nontechnical: Society[] = [
  {
    image: opticlick,
  },
  {
    image: mavericks,
  },
  {
    image: octave,
  },
  {
    image: panache,
  },
  {
    image: avaran,
  },
  {
    image: kalam,
  },
  {
    image: chromavita,
  },
  {
    image: drishti,
  },
];

const technical: Society[] = [
  {
    image: women,
  },
  {
    image: namespace,
  },
  {
    image: gdsc,
  },
  {
    image: ieee,
  },
  {
    image: hash_define,
  },
  {
    image: ieee_wie,
  },

  {
    image: anveshan,
  },
  {
    image: electronauts,
  },
];

const Welcome = () => {
  return (
    <div>
      <Slider_society arr={technical} />
      <Slider_society arr={nontechnical} />
      <div className="flex items-center flex-col">
        <div className="flex mb-4">
          <span className="rounded-full w-8 h-8 mr-2 mt-2 bg-muted inline-block">
            {" "}
          </span>
          <div className="flex flex-col align-start">
            <h2 className="font-semibold text-lg">Welcome!</h2>
            <p className="text-muted-foreground text-xs">Join and Engage with Societies</p>
          </div>
        </div>
        <button className="w-80 py-1 rounded-md border border-1 border-black my-1">View Existing society</button>
        <button className="w-80 py-1 rounded-md border border-1 border-black my-1">Send Message to society</button>
        <button className="w-80 py-1 rounded-md border border-1 border-black my-1 bg-black text-white">Register New society</button>

      </div>
    </div>
  );
};

export default Welcome;
