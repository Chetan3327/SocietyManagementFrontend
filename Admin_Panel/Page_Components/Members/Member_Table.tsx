
import { Info, UserRoundPlus, UserRoundX } from "lucide-react";
import { Card, CardContent } from "../../../src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../src/components/ui/table";

const Member_Table = () => {
  return (
    <>
      <Card className="m-4 mt-7">
        <CardContent className="p-2">
            <div className="flex justify-between items-center px-3 w-full ">
                <input type="text" placeholder="Filter Search" className="bg-slate-100 w-56 outline-none px-5 rounded-full py-2"/>
                <button className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5">
                    <div>Update/Edit Information</div>
                    <Info />
                </button>
                <button className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5">
                     <UserRoundPlus fill="white"/>
                    <div>Add Members</div>
                    
                    </button>
                <button className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5"> 
                <UserRoundX fill="white" />
                <div>Remove Members</div></button>
            </div>
        </CardContent>

      </Card>
      <Card className="p-0 m-4 mt-7">
        <CardContent className="p-0 ">
          <Table>
            <TableHeader>
              <TableRow className="text-blue-700">
                <TableHead className="text-right w-[200px] font-bold  text-xl">
                  Name
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Branch & Year
                </TableHead>
                <TableHead className="font-bold text-center text-xl">Contact</TableHead>
                <TableHead className="font-bold text-center text-xl">Email</TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Society Contribution
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_,index:number) => {
                return (
                  <TableRow key={index} className="border-none">
                    <TableCell>
                      <div className="flex gap-5 items-center justify-end">
                        <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400" alt="student" className="h-8 w-8 rounded-full"/>
                        <h1 className="font-bold">John doe</h1>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">CSE-B</TableCell>
                    <TableCell className="text-center">0115897556</TableCell>
                    <TableCell className="text-center">shivani_1234@gmail.com</TableCell>
                    <TableCell className="flex justify-center">
                       <button className="border-2 w-fit px-5 py-1 rounded-full">View Details</button>
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
