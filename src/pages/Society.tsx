
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import drishti from "../assets/drishti-hero.png";
import latestnews from "../assets/latestnews.png";


type Society = {
  SocietyName: string;
  SocietyType:string;
  SocietyHead: string;
  SocietyDescription: string;
  DateOfRegistration: string;
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const Society = () => {
  const { id } = useParams();
  const [society, setSociety] = useState<Society | null>(null);
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    const fetchsociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/societies/${id}`)
      console.log('data', res.data[0])
      setSociety(res.data[0])
    }
    fetchsociety()
  }, [])

  if (!society) return <div>Loading...</div>;
  const path = location.pathname === `/society/${id}`
  return (
    <div>
      <Outlet/>
      {path && (
        <div>
      <div className="w-full overflow-x-hidden flex justify-between bg-gradient-to-tr from-purple-200 to-gray-300">
        <div className="md:ml-20 pl-5 md:pl-1 pt-10">
          <h3 className="text-3xl text-purple-700 font-bold">
            Welcome to {society.SocietyName}:  {society.SocietyType} Society
          </h3>
          <p className="text-muted-foreground">Building a Legacy Since {formatDate(society.DateOfRegistration)}</p>
        </div>
        <div>
          <img src={drishti} alt="society" className="h-full" />
        </div>
      </div>

      <div className="w-full px-20 flex justify-center py-10 gap-7">
        <div className="flex justify-center gap-7 p-4 md:p-10 rounded-md border-4">
          <div>
            <img src='https://ipubuzz.com/wp-content/uploads/2021/03/gd-1024x576.jpg' width={600} alt="" className="transform duration-300 ease-in-out hover:scale-105"/>
          </div>
          <div>
            <Card className="rounded-lg md:space-y-3 border-0">
              <CardHeader className="text-center">
                <h2 className="font-bold text-2xl md:text-4xl">Who We Are</h2>
                <hr className="h-[4px] text-black" />
              </CardHeader>
              <CardContent className="md:my-10">
                <h1 className="text-xl font-extrabold">Guided by Excellence: {society.SocietyHead}</h1>
                <p>{society.SocietyDescription}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      
      </div>
      )}
    </div>
  );
};

export default Society;
