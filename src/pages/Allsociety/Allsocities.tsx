import axios from "axios";
import { useEffect, useState } from "react";
import Societyslider from "./Societyslider";

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

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
function Allsocities() {
  const [nontechnical, setNontechnical] = useState<Society[]>([]);
  const [technical, setTechnical] = useState<Society[]>([]);
  useEffect(() => {
    const getAllSocities = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/societies`);
        console.log(data);
        const nontechnicalSocieties: Society[] = [];
        const technicalSocieties: Society[] = [];
        data.forEach((society: Society) => {
          if (society.SocietyType === "Non-Tech") {
            nontechnicalSocieties.push(society);
          } else if (society.SocietyType === "Technical") {
            technicalSocieties.push(society);
          }
        });
        console.log(nontechnicalSocieties);
        setNontechnical(nontechnicalSocieties);
        setTechnical(technicalSocieties);
      } catch (error) {
        console.error("Failed to fetch societies:", error);
      }
    };
    getAllSocities();
  }, []);
  return (
    <div className="bg-sky-50">
      <Societyslider title={"Non-Technical Society"} arr={nontechnical} />
      <Societyslider title={"Technical Society"} arr={technical} />
    </div>
  );
}

export default Allsocities;
