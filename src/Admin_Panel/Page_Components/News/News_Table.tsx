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

const news=[
  { 
    id: '1',
    detail:"Upcoming Hackathon",
    Date:"13/09/2024",
    society:"Anveshan",
    newsID: '71526',
    type:"Update"               
  },
  {
    id: '2',
    detail:"Upcoming Hackathon",
    Date:"13/09/2024",
    society:"Anveshan",
    newsID: '71526',
    type:"Update"               
  },
  {
    id: '3',
    detail:"Upcoming Hackathon",
    Date:"13/09/2024",
    society:"Anveshan",
    newsID: '71526',
    type:"Update"               
  },
  {
    id: '4',
    detail:"Upcoming Hackathon",
    Date:"13/09/2024",
    society:"Anveshan",
    newsID: '71526',
    type:"Update"               
  },
  
]
const News_Table = () => {
  return (
    <Card className="m-7 p-0 h-screen md:h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl  ">
              SocietyID
            </TableHead>
            <TableHead className="font-bold  text-xl  ">
              NewsID
            </TableHead>
            <TableHead className="font-bold text-center text-xl ">
              News
            </TableHead>
            <TableHead className="font-bold text-center text-xl 2 p-0">
              <h1 className="font-bold text-center text-xl ">
                News Details
              </h1>
              <TableRow>
                <TableHead className="font-bold text-xl">Date</TableHead>
                <TableHead className="font-bold text-xl ">Society</TableHead>
                <TableHead className="font-bold text-xl">Category</TableHead>
              </TableRow>
            </TableHead>
            
            <TableHead className="font-bold text-center text-xl ">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((news, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-center">{news.id}</TableCell>
                <TableCell className="text-center">{news.newsID}</TableCell>
                <TableCell className="text-center ">
                 {news.detail}
                </TableCell>
                <TableCell className="p-0 h-full">
                  <TableCell className="text-center ">{news.Date}</TableCell>
                  <TableCell className="text-center ">{news.society}</TableCell>
                  <TableCell className="text-center ">{news.type}</TableCell>
                 
                </TableCell>
                <TableCell className="flex h-full justify-center items-center pt-8 gap-5 ">
                      <Link to="/admin/news/update">
                           <Button className="text-blue-700"><Edit /></Button>
                      </Link>
                      <Button className="text-red-700"><Trash /></Button>
                    </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default News_Table;
