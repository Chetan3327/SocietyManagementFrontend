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
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date:"13/09/2024",
    society:"Anveshan",
    type:"Update"               
  },
  {
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date:"13/09/2024",
    society:"Anveshan",
    type:"Update"               
  },
  {
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date:"13/09/2024",
    society:"Anveshan",
    type:"Update"               
  },
  {
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date:"13/09/2024",
    society:"Anveshan",
    type:"Update"               
  },
  {
    detail:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date:"13/09/2024",
    society:"Anveshan",
    type:"Update"               
  },
]
const News_Table = () => {
  return (
    <Card className="m-7 p-0 h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl border-muted border-2 ">
              S.NO.
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              News
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2 p-0">
              <h1 className="font-bold text-center text-xl border-muted border-2">
                News Details
              </h1>
              <TableRow>
                <TableHead className="font-bold  text-xl ">Date</TableHead>
                <TableHead className="font-bold  text-xl ">Society</TableHead>
                <TableHead className="font-bold  text-xl">Category</TableHead>
              </TableRow>
            </TableHead>
            
            <TableHead className="font-bold text-center text-xl border-muted border-2">Edit/Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((data, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="border-muted border-2">{index}</TableCell>
                <TableCell className="text-center border-muted border-2">
                 {data.detail}
                </TableCell>
                <TableCell className="p-0 h-full">
                  <TableCell className="text-center ">{data.Date}</TableCell>
                  <TableCell className="text-center ">{data.society}</TableCell>
                  <TableCell className="text-center ">{data.type}</TableCell>
                 
                </TableCell>
                <TableCell className="flex justify-center gap-5">
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
