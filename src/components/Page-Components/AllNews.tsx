import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  description: string;
  date: string;
  societyName: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const AllNews = () => {
  const [news, setNews] = useState(null)
  useEffect(() => {
    const fetchsociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/news`)
      console.log('data', res.data)
      setNews(res.data)
    }
    fetchsociety()
  }, [])
  if (!news) return <div>Loading...</div>;


  return (
    <div className="container space-y-3">
      <div className="relative mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-black text-center text-4xl font-extrabold">
            GUIDING HANDS: OUR FACULTY COORDINATORS
          </h2>
          <p className="text-white text-center my-5 text-xl font-extrabold">
            Meet our dedicated faculty coordinators committed to guiding and
            supporting our students.
          </p>
        </div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-center pb-10">
        ALL NEWS
      </h2>
      <div className="flex flex-col gap-y-4">
        {news.map(({ Title, Description, DateOfNews, SocietyName }, index) => (
          <Card
            key={index}
            className="hover:border-gray-900 border-md hover:transition-all hover:scale-105 hover:duration-1000 border-2 border-black border-opacity-50"
          >
            <CardContent className="pt-5 gap-10">
              <div>
                <h2 className="font-bold text-xl text-center">{Title}</h2>
                <p className="text-muted-foreground text-center pt-3">
                  by {SocietyName}
                </p>
              </div>
              <div className="mt-4">
                <p>{Description}</p>
              </div>
              <p className="opacity-70 text-center my-4">
                Published on {format(new Date(DateOfNews), "MMMM dd, yyyy")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
