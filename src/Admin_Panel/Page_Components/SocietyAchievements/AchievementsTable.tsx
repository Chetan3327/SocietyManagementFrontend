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

const achievemnts = [
    {
        id: '1',
        achievementID: "1001",
        title: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
        date: '28 june'
    },
    {
        id: '2',
        achievementID: "1001",
        title: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
        date: '28 june'
    },
    {
        id: '2',
        achievementID: "1001",
        title: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
        date: '28 june'
    },
    {
        id: '4',
        achievementID: "1001",
        title: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis',
        date: '28 june'
    },
]
const Achievemnts_table = () => {
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
                            {achievemnts.map((achievemnts, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-center">{achievemnts.achievementID}</TableCell>
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{achievemnts.title}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{achievemnts.description}</TableCell>
                                        <TableCell className="text-center">{achievemnts.date}</TableCell>
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