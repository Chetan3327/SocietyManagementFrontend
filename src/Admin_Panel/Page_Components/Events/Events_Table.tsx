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
import { Button } from "@/components/ui/button";
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
    <Card className="m-7 p-0 h-screen md:h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl border-muted border-2 ">
              Event ID
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
                <TableCell className="text-center border-muted border-2">
                  {data.Date}
                </TableCell>
                <TableCell className="text-center border-muted border-2">
                  {data.society}
                </TableCell>

                <TableCell className="flex justify-center gap-5">
                  <Link to="/admin/events/update">
                    <Button className="text-blue-700">
                      <Edit />
                    </Button>
                  </Link>
                  <Button className="text-red-700">
                    <Trash />
                  </Button>
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
