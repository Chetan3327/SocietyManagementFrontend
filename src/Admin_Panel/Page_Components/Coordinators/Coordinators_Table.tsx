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
import { useState , useEffect } from "react";
import axios from "axios";
//import { format } from "date-fns";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type CoordinatorType = {
  SocietyID : number,
  CoordinatorID : number,
  CoordinatorName : string,
  CoordinatorDesignation : string,
  CoordinatorEmail : string,
  CoordinatorDetails : string,
  image : string
}

// const coordinators = [
//   {
//     id: 1,
//     name: "Adam Smith",
//     title: "ASSOCIATE PROFESSOR & HOD CSE",
//     details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
//     societyId: "#0542"
//   },
//   {
//     id: 2,
//     name: "Adam Smith",
//     title: "ASSOCIATE PROFESSOR & HOD CSE",
//     details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
//     societyId: "#0541"
//   },
//   {
//     id: 3,
//     name: "Adam Smith",
//     title: "ASSOCIATE PROFESSOR & HOD CSE",
//     details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
//     societyId: "#0543"
//   },
//   {
//     id: 4,
//     name: "Adam Smith",
//     title: "ASSOCIATE PROFESSOR & HOD CSE",
//     details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
//     societyId: "#0544"
//   },
//   {
//     id: 5,
//     name: "Adam Smith",
//     title: "ASSOCIATE PROFESSOR & HOD CSE",
//     details: "Dr. Shweta Tanaja serves as the Faculty Coordinator for Hash Define.",
//     societyId: "#0545"
//   }
// ];

const Coordinator_Table = () => {

  const [coordinators , setCoordinators] = useState([])
  const params = useParams()
  console.log(params)

  let fetchAllCoordinators ;
  useEffect(()=>{
       fetchAllCoordinators = async()=>{
        let res ;
        if(params.societyID){
          res =  await axios.get(`${BACKEND_URL}/admin/coordinator/${params.societyID}`)
        }else{
          res =  await axios.get(`${BACKEND_URL}/admin/coordinator`)
        }
         
        console.log('data',res.data)
        setCoordinators(res.data)
      }
      fetchAllCoordinators()
  },[])

  if(coordinators.length<=0){
   return (
    <div className="text-3xl font-bold">Loading data</div>
   ) 
  }

  const handleDelete = async(coordinatorID : number)=>{
    
    await axios.delete(`${BACKEND_URL}/coordinator/${coordinatorID}`).then(
      res => {
        console.log(res)
        setCoordinators(coordinators.filter((coordinator : CoordinatorType)=>coordinator.CoordinatorID !== coordinatorID))
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
}

  return (
    <>  
      <Card className="m-4 mt-7">
        <CardContent className="p-2">
          <div className="flex flex-wrap gap-2 justify-center md:justify-between items-center px-3 w-full ">
            <Button>Filter Search <Filter className="ml-4" /></Button>
            <Input
              type="text"
              placeholder="Search"
              className="bg-slate-100 w-56 outline-none px-5 rounded-full py-2"
            />
            <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/coordinators/add'>
              <UserRoundPlus fill="white" />
              <div>Create Coordinator Form</div>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="p-0 m-4 mt-7 h-screen md:h-96 overflow-y-auto">
        <CardContent className="p-0 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-blue-700">
                <TableHead className="text-right w-[100px] font-bold text-xl">
                  CoordinatorID
                </TableHead>
                <TableHead className="text-right w-[100px] font-bold text-xl">
                  SocietyID
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Coordinator Details
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coordinators.map((coordinator : CoordinatorType, index) => {
                return (
                  <TableRow key={index} className="border-none">
                    <TableCell className="text-center">{coordinator.CoordinatorID}</TableCell>
                    <TableCell className="text-center">{coordinator.SocietyID}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col">
                        {/* <img
                          src={coordinator.img || coordinatorpic}
                          alt="coordinator"
                          className="h-8 w-8 rounded-full mb-2"
                        /> */}
                        <h1 className="font-bold">{coordinator.CoordinatorName}</h1>
                        <p>{coordinator.CoordinatorDesignation}</p>
                        <a href={`mailto:${coordinator.CoordinatorEmail}`} className="">Email</a>
                        <p>{coordinator.CoordinatorDetails}</p>
                      </div>
                    </TableCell>
                    <TableCell className="flex justify-center gap-5">
                      <Link to={`/admin/coordinators/update/${coordinator.CoordinatorID}`} state={{coordinator}}>
                      <Button className="text-blue-700"><Edit /></Button>
                      </Link>
                      <Button className="text-red-700" onClick={()=>handleDelete(coordinator.CoordinatorID)}><Trash /></Button>
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
