import { Edit, Trash, UserRoundPlus } from "lucide-react";
// import student from '../../../assets/studentpic.jpeg'
import { Link, useParams } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

// const roles = [
//     {
//         id: '1',
//         societyName: 'Anveshan',
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         id: '2',
//         societyName: 'Anveshan',
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         id: '2',
//         societyName: 'Anveshan',
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         id: '4',
//         societyName: 'Anveshan',
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
// ]
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type RoleType={
    RoleID:number,
    SocietyName:string,
    Rolename:string,
    RoleDescription:string,
    SocietyID: number
}
const Roles_table = () => {
    const [roles , setroles] = useState([])
    const params = useParams()
    console.log(params)
  
    let fetchAllRoles;
    useEffect(()=>{
         fetchAllRoles = async() => {
          let res ;
          if(params.societyID){
            res =  await axios.get(`${BACKEND_URL}/admin/roles/${params.societyID}`)
          }else{
            res =  await axios.get(`${BACKEND_URL}/admin/roles`)
          }
           
          console.log('data',res.data)
          setroles(res.data)
        }
        fetchAllRoles()
    },[])
  
    if(roles.length<=0){
     return (
      <div className="text-3xl font-bold">Loading data</div>
     ) 
    }
  
    const handleDelete = async (RoleId: number) => {
  
      await axios.delete(`${BACKEND_URL}/roles/${RoleId}`).then(
        res => {
          console.log(res)
          setroles(roles.filter((role: RoleType) => role.RoleID !== RoleId))
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
    return (
        <div className='flex flex-col'>
            <Card className="m-4 mt-7">
                <CardContent className="p-2">
                    <div className="flex flex-wrap gap-2 justify-between items-center px-3 w-full ">
                        <Input
                            type="text"
                            placeholder="Search"
                            className="bg-slate-100 w-56 outline-none px-5 rounded-full py-2"
                        />
                        <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/roles/add'>
                            <UserRoundPlus fill="white" />
                            <div>New Roles</div>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <Card className="p-0 m-4 mt-7  overflow-y-auto">
                <CardContent className="p-0 overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-blue-700">
                                <TableHead className="text-right w-[100px] font-bold text-xl">
                                    Role ID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Society
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Role Name
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    About The Role
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Actions            
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {roles.map((role:RoleType, index:number) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">{role.RoleID}</TableCell>
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{role.SocietyName}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{role.Rolename}</TableCell>
                                        <TableCell className="text-center">{role.RoleDescription}</TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to={`/admin/roles/update/${role.RoleID}`}>
                                                <Button className="text-blue-700"><Edit /></Button>
                                            </Link>
                                            <Button className="text-red-700" onClick={() => handleDelete(role.RoleID)}><Trash /></Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default Roles_table