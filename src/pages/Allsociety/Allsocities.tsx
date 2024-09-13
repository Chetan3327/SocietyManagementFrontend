// import { useEffect, useState } from "react";
import Societyslider from "./Societyslider";
import namespace from '../../assets/Society_Img/namespace.jpg'
import define from '../../assets/Society_Img/hash_define.jpg'
import gdsc from '../../assets/Society_Img/gdsc.jpg'
import ieee from '../../assets/Society_Img/ieee.jpg'
import ieee_wie from '../../assets/Society_Img/ieee_wie.jpg'
import wibd from '../../assets/Society_Img/wibd.jpg'
import anveshan from '../../assets/Society_Img/anveshan.jpg'
import electronauts from '../../assets/Society_Img/electronauts.jpg'

import avaran from '../../assets/Society_Img/avaran.jpg'
import chromavita from '../../assets/Society_Img/chromavita.jpg'
import drishti from '../../assets/Society_Img/drishti.jpeg'
import kalam from '../../assets/Society_Img/kalam.jpg'
import mavericks from '../../assets/Society_Img/mavericks.jpg'
import octave from '../../assets/Society_Img/octave.jpg'
import opticlick from '../../assets/Society_Img/opticlick.jpg'
import panache from '../../assets/Society_Img/panache.jpg'

export type Society = {
  image: string;
  society: string;
  SocietyID: number;
  SocietyType: "Technical" | "Non-Tech";
  society_name: string;
  society_head: string;
  society_coordinator: string;
  date_of_registration: string;
  society_description: string;
};

export type SocietyIntro = {
  image: string;
  society: string;
  SocietyID: number;
  SocietyType: "Technical" | "Non-Tech";
  society_name: string;
};

const technicalSocieties: SocietyIntro[] = [
  {
    image: namespace,
    society: "nameSpace",
    SocietyID: 1,
    SocietyType: "Technical",
    society_name: "nameSpace",
  },
  {
    image: define,
    society: "Hash define",
    SocietyID: 2,
    SocietyType: "Technical",
    society_name: "Hash Define",
  },
  {
    image: anveshan,
    society: "Anveshan",
    SocietyID: 3,
    SocietyType: "Technical",
    society_name: "Anveshan",
  },
  {
    image: wibd,
    society: "WIBD",
    SocietyID: 4,
    SocietyType: "Technical",
    society_name: "WIBD",
  },

  {
    image: gdsc,
    society: "GDSC",
    SocietyID: 5,
    SocietyType: "Technical",
    society_name: "GDSC",
  },
  {
    image: ieee,
    society: "IEEE",
    SocietyID: 6,
    SocietyType: "Technical",
    society_name: "IEEE",
  },
  {
    image: ieee_wie,
    society: "IEEE_WIE",
    SocietyID: 7,
    SocietyType: "Technical",
    society_name: "IEEE_WIE",
  },
  {
    image: electronauts,
    society: "Electronauts",
    SocietyID: 8,
    SocietyType: "Technical",
    society_name: "Electronauts",
  },
];

const NonTechnicalSocieties: SocietyIntro[] = [
  {
    image: avaran,
    society: "Dramatics",
    SocietyID: 9,
    SocietyType: "Non-Tech",
    society_name: "Avaran",
  },
  {
    image: chromavita,
    society: "Arts",
    SocietyID: 10,
    SocietyType: "Non-Tech",
    society_name: "Chromavita",
  },
  {
    image: drishti,
    society: "Rotaract Club",
    SocietyID: 11,
    SocietyType: "Non-Tech",
    society_name: "Drishti",
  },
  {
    image: kalam,
    society: "Literary",
    SocietyID: 12,
    SocietyType: "Non-Tech",
    society_name: "Kalam",
  },
  {
    image: mavericks,
    society: "Dance",
    SocietyID: 13,
    SocietyType: "Non-Tech",
    society_name: "Mavericks",
  },
  {
    image: octave,
    society: "Music",
    SocietyID: 14,
    SocietyType: "Non-Tech",
    society_name: "Octave",
  },
  {
    image: opticlick,
    society: "Photography",
    SocietyID: 15,
    SocietyType: "Non-Tech",
    society_name: "Opticlick",
  },
  {
    image: panache,
    society: "Fashion",
    SocietyID: 16,
    SocietyType: "Non-Tech",
    society_name: "Panache",
  },
]

function Allsocities() {
  // const [nontechnical, setNontechnical] = useState<Society[]>([]);
  // const [technical, setTechnical] = useState<Society[]>([]);

  // useEffect(() => {
  //   const getAllSocities = async () => {
  //     try {
  //       // Simulate fetching data
  //       const data = fakeData;
  //       const nontechnicalSocieties: Society[] = [];
  //       const technicalSocieties: Society[] = [];
  //       data.forEach((society: Society) => {
  //         if (society.SocietyType === "Non-Tech") {
  //           nontechnicalSocieties.push(society);
  //         } else if (society.SocietyType === "Technical") {
  //           technicalSocieties.push(society);
  //         }
  //       });
  //       setNontechnical(nontechnicalSocieties);
  //       setTechnical(technicalSocieties);
  //     } catch (error) {
  //       console.error("Failed to fetch societies:", error);
  //     }
  //   };
  //   getAllSocities();
  // }, []);

  return (
    <div className="bg-sky-50">
      <Societyslider title={"Technical Society"} arr={technicalSocieties} />
      <Societyslider title={"Non - Technical Society"} arr={NonTechnicalSocieties} />
    </div>
  );
}

export default Allsocities;
