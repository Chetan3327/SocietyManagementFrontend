import { Camera } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

type AchievementType = {
    Title: string;
    DateAchieved: string;
    SocietyAchievementID: number;
    SocietyID:number,
    Description:string
}


// ];
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function Gallery() {
  const [achievement, setachievement] = useState<AchievementType[]>([])
  useEffect(() => {
    const fetchsociety = async () => {
      const res=await axios.get(`${BACKEND_URL}/achievements`)
      console.log('data', res.data)
      setachievement(res.data)
    }
    fetchsociety()
  }, [])
  return (
    <div>
      <header className="text-2xl bg-slate-100 p-2 flex gap-4 justify-center items-center">
        <h1>College Society Achievements</h1>
        <Camera fill="black" size={24} />
      </header>

      <div className="flex flex-col justify-center m-5 py-8">
            {achievement.map(({Title,Description,DateAchieved}, index: number) => (
                <Card
                key={index}
                className=" my-3 hover:border-gray-900 border-md hover:transition-all hover:scale-65 hover:duration-1000 border-2 border-black border-opacity-50"
              >
                <CardContent className="pt-5 gap-10">
                  <div>
                    <h2 className="font-bold text-xl text-center">{Title}</h2>
                  </div>
                  <div className="mt-4">
                    <p>{Description}</p>
                  </div>
                  <p className="opacity-70 text-center my-4">
                    Published on {format(new Date(DateAchieved), "MMMM dd, yyyy")}
                  </p>
                </CardContent>
              </Card>
            ))}
        

          
       
      </div>

      {/* <div className="flex justify-center">
        <Link
          to="/allgallery"
          className="p-3 bg-muted font-semibold rounded-lg shadow-sm"
        >
          View All
        </Link>
      </div> */}
    </div>
  );
}

export default Gallery;
