import { Button } from "@/components/ui/button";
import { Edit, Filter, Trash, UserRoundPlus } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Input } from "@/components/ui/input";

const coordinators = [
  {
    id: 1,
    name: "Adam Smith",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
    societyId: "#0542"
  },
  {
    id: 2,
    name: "Adam Smith",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
    societyId: "#0541"
  },
  {
    id: 3,
    name: "Adam Smith",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
    societyId: "#0543"
  },
  {
    id: 4,
    name: "Adam Smith",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
    societyId: "#0544"
  },
  {
    id: 5,
    name: "Adam Smith",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
    societyId: "#0545"
  }
];

const Coordinator_Table = () => {
  return (
    <>  
      <Card className="m-4 mt-7">
        <CardContent className="p-2">
          <div className="flex flex-wrap gap-2 justify-between items-center px-3 w-full ">
            <Button>Filter Search <Filter className="ml-4" /></Button>
            <Input
              type="text"
              placeholder="Search"
              className="bg-slate-100 w-56 outline-none px-5 rounded-full py-2"
            />
            <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/coordinators/add'>
              <UserRoundPlus fill="white" />
              <div>Form</div>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="p-0 m-4 mt-7 h-80 overflow-y-auto">
        <CardContent className="p-0 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-blue-700">
                <TableHead className="text-right w-[100px] font-bold text-xl">
                  CoordinatorID
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Coordinator Details
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Society Id
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coordinators.map((coordinator, index) => {
                return (
                  <TableRow key={index} className="border-none">
                    <TableCell className="text-center">{coordinator.id}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col">
                        {/* <img
                          src={coordinator.img || coordinatorpic}
                          alt="coordinator"
                          className="h-8 w-8 rounded-full mb-2"
                        /> */}
                        <h1 className="font-bold">{coordinator.name}</h1>
                        <p>{coordinator.title}</p>
                        <p>{coordinator.details}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{coordinator.societyId}</TableCell>
                    <TableCell className="flex justify-center gap-5">
                      <Link to='/admin/coordinators/update'>
                      <Button className="text-blue-700"><Edit /></Button>
                      </Link>
                      <Button className="text-red-700"><Trash /></Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Coordinator_Table;
