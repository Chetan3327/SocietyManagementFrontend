import { Card, CardContent, CardFooter } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  description: string;
  date: Date;
  societyName: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AllNews = () => {
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/news`);
        const newsData = res.data;

        const formattedNews = newsData.map((news: any) => ({
          title: news.Title,
          description: news.Description,
          date: new Date(news.DateOfNews),
          societyName: news.SocietyName,
        }));

        setLatestNews(formattedNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container space-y-3">
      <div className="relative mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28 ">
          <h2 className="text-black text-center text-4xl font-extrabold">
            GUIDING HANDS: OUR FACULTY COORDINATORS
          </h2>
          <p className="text-white text-center my-5 text-xl font-extrabold">
            Meet our dedicated faculty coordinators committed to guiding and
            supporting our students..
          </p>
        </div>
      </div>
      <h2 className="text-3xl lg:text-5xl font-bold text-center pb-10">
        ALL NEWS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestNews.map(({ title, description, date, societyName }, index) => (
          <Card key={index} className="hover:border-gray-900 border-md">
            <CardContent className="pt-5 gap-10">
              <div>
                <h2 className="font-bold text-xl text-center">{title}</h2>
                <p className="text-muted-foreground text-center pt-3">
                  by {societyName}
                </p>
              </div>
              <div className="mt-4">
                <p>{description}</p>
              </div>
            </CardContent>

            <CardFooter>
              <p className="text-muted-foreground">
                Published on {date.toDateString()}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
