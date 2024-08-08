import { Edit,Trash, UserRoundPlus } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import student from '../../../assets/studentpic.jpeg'
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "@/components/ui/button";

const member=[
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2022-26",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"ECE",
    batch:"2023-27",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2021-25",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2022-26",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2023-27",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2022-26",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
  {
    img:student,
    name:"John Doe",
    branch:"CSE",
    batch:"2022-26",
    enrollment:"0115897556",
    email:"shivani_1234@gmail.com",
    societyID: "anveshan089"
  },
]
const Member_Table = () => {
  return (
    <>
      <Card className=" mt-7">
        <CardContent className="p-2">
          <div className="flex gap-2 justify-around items-center px-3 w-full flex-wrap md:flex-nowrap">
            <input
              type="text"
              placeholder="Filter Search"
              className="bg-slate-100 w-96 outline-none px-5 rounded-full py-2"
            />
           
            <Link to="/admin/members/add" className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5">
              <UserRoundPlus fill="white" />
              <div>Add Members</div>
            </Link>
           
          </div>
        </CardContent>
      </Card>
      <Card className="p-0 -m-20 mt-7 h-96 overflow-y-auto">
        <CardContent className="p-0 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-blue-700">
                <TableHead className="text-right w-[200px] font-bold  text-xl">
                  Name
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Branch
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Batch
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  EnrollmentNo.
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Email
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  SocietyID
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Student's Contribution
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Edit/Delete
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {member.map((member, index: number) => {
                return (
                  <TableRow key={index} className="border-none">
                    <TableCell>
                      <div className="flex gap-1 items-center justify-end">
                        <img
                          src={member.img}
                          alt="student"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1 className="font-bold">{member.name}</h1>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">{member.branch}</TableCell>
                    <TableCell className="text-center">{member.batch}</TableCell>
                    <TableCell className="text-center">{member.enrollment}</TableCell>
                    <TableCell className="text-center">{member.email}</TableCell>
                    <TableCell className="text-center">{member.societyID}</TableCell>
                    <TableCell >
                      <Button className="border-2 w-fit px-5 py-1 rounded-full">
                        <Link to="/members/:id">View Details</Link>
                      </Button>
                    </TableCell>
                    <TableCell className="flex justify-center gap-5">
                      <Link to="/admin/members/update">
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

export default Member_Table;
