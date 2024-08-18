import { Edit, Trash, UserRoundPlus } from "lucide-react";
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
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useState , useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

type AchievementType = {
    SocietyID : number ,
    SocietyAchievementID : number ,
    Title : string ,
    Description : string ,
    DateAchieved : Date 
}
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const achievemnts = [
//     {
//         id: '1',
//         achievementID: "1001",
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
//         date: '28 june'
//     },
//     {
//         id: '2',
//         achievementID: "1001",
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
//         date: '28 june'
//     },
//     {
//         id: '2',
//         achievementID: "1001",
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
//         date: '28 june'
//     },
//     {
//         id: '4',
//         achievementID: "1001",
//         title: 'John Doe',
//         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
//         date: '28 june'
//     },
// ]

const Achievemnts_table = () => {

    const [achievemnts , setAchievements] = useState([])
    const params = useParams()
    console.log(params)
  
    let fetchAllAchievements ;
    useEffect(()=>{
         fetchAllAchievements = async()=>{
          let res ;
          if(params.societyID){
            res =  await axios.get(`${BACKEND_URL}/admin/achievements/${params.societyID}`)
          }else{
            res =  await axios.get(`${BACKEND_URL}/admin/achievements`)
          }
           
          console.log('data',res.data)
          setAchievements(res.data)
        }
        fetchAllAchievements()
    },[])
  
    if(achievemnts.length<=0){
     return (
      <div className="text-3xl font-bold">Loading data</div>
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
                        <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/societyAchievements/add'>
                            <UserRoundPlus fill="white" />
                            <div>New Achievements</div>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <Card className="p-0 m-4 mt-7 h-96 overflow-y-auto">
                <CardContent className="p-0 overflow-y-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="text-blue-700">
                                <TableHead className="text-right w-[100px] font-bold text-xl">
                                    SocietyID
                                </TableHead>
                                <TableHead className="text-right w-[100px] font-bold text-xl">
                                    AchievementID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Title
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Description
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Date Achieved
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Actions            
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {achievemnts.map((achievemnt : AchievementType, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">{achievemnt.SocietyID}</TableCell>
                                        <TableCell className="text-center">{achievemnt.SocietyAchievementID}</TableCell>
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{achievemnt.Title}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{achievemnt.Description}</TableCell>
                                        <TableCell className="text-center">{format(new Date(achievemnt.DateAchieved), "MMMM dd, yyyy")}</TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to='/admin/societyAchievements/update'>
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
        </div>
    )
}

export default Achievemnts_table