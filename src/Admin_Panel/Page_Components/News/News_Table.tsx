import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

// news in backend 
type newsType = {
  SocietyID: number,
  NewsID: number,
  Title: string,
  Description: string,
  DateOfNews: Date,
  Author: string
}

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const News_Table = () => {
  const [news, setNews] = useState<newsType[]>([]);
  const params = useParams();

  useEffect(() => {
    const fetchAllNews = async () => {
      let res;
      if (params.societyID) {
        res = await axios.get(`${BACKEND_URL}/admin/news/${params.societyID}`);
      } else {
        res = await axios.get(`${BACKEND_URL}/admin/news`);
      }
      setNews(res.data);
    };

    fetchAllNews();
  }, [params.societyID]);

  if (news.length <= 0) {
    return <div className="text-3xl font-bold">Loading data...</div>;
  }

  const handleDelete = async (newsID: number) => {
    try {
      await axios.delete(`${BACKEND_URL}/news/${newsID}`);
      setNews(news.filter((newsItem: newsType) => newsItem.NewsID !== newsID));
    } catch (err) {
      console.error("Error deleting news:", err);
    }
  };

  return (
    <Card className="m-7 p-0 h-screen md:h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold text-xl text-center">SocietyID</TableHead>
            <TableHead className="font-bold text-xl text-center">NewsID</TableHead>
            <TableHead className="font-bold text-xl text-center">Title</TableHead>
            <TableHead className="font-bold text-xl text-center">Date of News</TableHead>
            <TableHead className="font-bold text-xl text-center">Description</TableHead>
            <TableHead className="font-bold text-xl text-center">Author</TableHead>
            <TableHead className="font-bold text-xl text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((newsItem: newsType, index: number) => (
            <TableRow key={index}>
              <TableCell className="text-center">{newsItem.SocietyID}</TableCell>
              <TableCell className="text-center">{newsItem.NewsID}</TableCell>
              <TableCell className="text-center">{newsItem.Title}</TableCell>
              <TableCell className="text-center">{format(new Date(newsItem.DateOfNews), "MMMM dd, yyyy")}</TableCell>
              <TableCell className="text-center">{newsItem.Description}</TableCell>
              <TableCell className="text-center">{newsItem.Author}</TableCell>
              <TableCell className="flex justify-center items-center gap-4">
                <Link to={`/admin/news/update/${newsItem.NewsID}`}>
                  <Button className="text-blue-700"><Edit /></Button>
                </Link>
                <Button className="text-red-700" onClick={() => handleDelete(newsItem.NewsID)}><Trash /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default News_Table;
