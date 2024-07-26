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

const fakeData: Society[] = [
  {
    image: "https://via.placeholder.com/150",
    society: "Coding Club",
    SocietyID: 1,
    SocietyType: "Technical",
    society_name: "Coding Club",
    society_head: "Alice Johnson",
    society_coordinator: "Bob Smith",
    date_of_registration: "2022-01-15",
    society_description: "A club for coding enthusiasts.",
  },
  {
    image: "https://via.placeholder.com/150",
    society: "Robotics Club",
    SocietyID: 2,
    SocietyType: "Technical",
    society_name: "Robotics Club",
    society_head: "Charlie Brown",
    society_coordinator: "Dave Lee",
    date_of_registration: "2021-11-22",
    society_description: "A club for robotics enthusiasts.",
  },
  {
    image: "https://via.placeholder.com/150",
    society: "Drama Club",
    SocietyID: 3,
    SocietyType: "Non-Tech",
    society_name: "Drama Club",
    society_head: "Eve Adams",
    society_coordinator: "Frank White",
    date_of_registration: "2020-05-30",
    society_description: "A club for drama and theater enthusiasts.",
  },
  {
    image: "https://via.placeholder.com/150",
    society: "Music Club",
    SocietyID: 4,
    SocietyType: "Non-Tech",
    society_name: "Music Club",
    society_head: "Grace Green",
    society_coordinator: "Hank Black",
    date_of_registration: "2019-09-18",
    society_description: "A club for music lovers.",
  },
];

function Allsocities() {
  const [nontechnical, setNontechnical] = useState<Society[]>([]);
  const [technical, setTechnical] = useState<Society[]>([]);

  useEffect(() => {
    const getAllSocities = async () => {
      try {
        // Simulate fetching data
        const data = fakeData;
        const nontechnicalSocieties: Society[] = [];
        const technicalSocieties: Society[] = [];
        data.forEach((society: Society) => {
          if (society.SocietyType === "Non-Tech") {
            nontechnicalSocieties.push(society);
          } else if (society.SocietyType === "Technical") {
            technicalSocieties.push(society);
          }
        });
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
