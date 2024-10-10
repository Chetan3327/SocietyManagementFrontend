import { Edit,Trash, UserRoundPlus } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
// import student from '../../../assets/studentpic.jpeg'
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
import { useState , useEffect } from "react";
import axios from "axios";
// import { format } from "date-fns";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type MemberType = {
    ProfilePicture:string,
    FirstName:string,
    LastName:string,
    Branch:string,
    BatchYear:number,
    EnrollmentNo:number,
    Email:string
}

// const member=[
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2022-26",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"ECE",
//     batch:"2023-27",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2021-25",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2022-26",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2023-27",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2022-26",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
//   {
//     img:student,
//     name:"John Doe",
//     branch:"CSE",
//     batch:"2022-26",
//     enrollment:"0115897556",
//     email:"shivani_1234@gmail.com",
//     societyID: "anveshan089"
//   },
// ]
const Member_Table = () => {
  const [members , setmembers] = useState([])
  const params = useParams()
  console.log(params)

  let fetchAllMembers ;
  useEffect(()=>{
       fetchAllMembers = async()=>{
        let res ;
        if(params.societyID){
          res =  await axios.get(`${BACKEND_URL}/admin/members/${params.societyID}`)
        }else{
          res =  await axios.get(`${BACKEND_URL}/admin/members`)
        }
         
        console.log('data',res.data)
        setmembers(res.data)
      }
      fetchAllMembers()
  },[])

  const { id } = useParams();
  useEffect(() => {
    const fetchsociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/societies/members/${id}`)
      console.log('data', res.data)
      setmembers(res.data)
    }
    fetchsociety()
  }, [])

  if(members.length<=0){
   return (
    <div className="text-3xl font-bold">Loading data</div>
   ) 
  }

  const handleDelete = async (EnrollmentNo: number) => {

    await axios.delete(`${BACKEND_URL}/students/${EnrollmentNo}`).then(
      res => {
        console.log(res)
        setmembers(members.filter((member: MemberType) => member.EnrollmentNo !== EnrollmentNo))
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }
  return (
    <>
      <Card className=" mt-7 w-11/12">
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
      <Card className="p-0 mt-7 h-96  overflow-y-auto w-11/12">
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
                {/* <TableHead className="font-bold text-center text-xl">
                  SocietyID
                </TableHead> */}
                <TableHead className="font-bold text-center text-xl">
                  Details
                </TableHead>
                <TableHead className="font-bold text-center text-xl">
                  Edit/Delete
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member:MemberType, index: number) => {
                return (
                  <TableRow key={index} className="border-none">
                    <TableCell>
                      <div className="flex gap-1 items-center justify-end">
                        <img
                          src={member.ProfilePicture}
                          alt="student"
                          className="h-8 w-8 rounded-full"
                        />
                        <h1 className="font-bold">{`${member.FirstName} ${member.LastName}`}</h1>
                      </div>
                    </TableCell>
                    
                    <TableCell className="text-center">{member.Branch}</TableCell>
                    <TableCell className="text-center">{member.BatchYear}</TableCell>
                    <TableCell className="text-center">{member.EnrollmentNo}</TableCell>
                    <TableCell className="text-center">{member.Email}</TableCell>
                    {/* <TableCell className="text-center">{members.societyID}</TableCell> */}
                    <TableCell >
                      <Button className="border-2 w-fit px-5 py-1 rounded-full">
                        <Link to={`/members/${member.EnrollmentNo}`} state={{member}}>View Details</Link>
                      </Button>
                    </TableCell>
                    <TableCell className="flex justify-center gap-5"> 
                      <Link to={`/admin/members/update/${member.EnrollmentNo}`} state={{member}}>
                         <Button className="text-blue-700"><Edit /></Button>
                      </Link>
                      <Button className="text-red-700" onClick={() => handleDelete(member.EnrollmentNo)}><Trash /></Button>
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
