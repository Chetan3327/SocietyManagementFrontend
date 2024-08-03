import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
const events = [
  {
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date: "13/09/2024",
    society: "Anveshan",
  },
  {
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date: "13/09/2024",
    society: "Anveshan",
  },
  {
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date: "13/09/2024",
    society: "Anveshan",
  },
  {
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date: "13/09/2024",
    society: "Anveshan",
  },
  {
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    Date: "13/09/2024",
    society: "Anveshan",
  },
];
const Events_Table = () => {
  return (
    <Card className="m-7 p-0 h-100 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl border-muted border-2 ">
              S.NO.
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Event
            </TableHead>

            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Date
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Society
            </TableHead>

            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Edit/Delete
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((data, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="border-muted border-2">{index}</TableCell>
                <TableCell className="text-center border-muted border-2">
                  {data.detail}
                </TableCell>
                  <TableCell className="text-center border-muted border-2">{data.Date}</TableCell>
                  <TableCell className="text-center border-muted border-2">{data.society}</TableCell>
                  
               
                <TableCell className=" border-muted border-2 ">
                  <div className="flex flex-row justify-center  gap-2">
                    <Link to="/admin/events/update" className="text-blue-700">
                      <Edit />
                    </Link>
                    <Link to="/admin/events" className="text-red-700">
                      <Trash />
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Events_Table;
