import { Edit, Trash, UserRoundPlus } from "lucide-react";
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
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

const testimonials = [
    {
        img: student,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
    },
    {
        img: student,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
    },
    {
        img: student,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
    },
    {
        img: student,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
    },
]
const Testimonial_table = () => {
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
                        <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/testimonials/add'>
                            <UserRoundPlus fill="white" />
                            <div>New Testimonial</div>
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
                                    S No.
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Picture
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Name
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Review
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Actions            
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {testimonials.map((testimonial, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-right">{index + 1}</TableCell>
                                        <TableCell>
                                            <img
                                                src={testimonial.img}
                                                alt='img' className='w-20 h-20 rounded-full'
                                            />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{testimonial.name}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{testimonial.review}</TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to='/admin/testimonials/update'>
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

export default Testimonial_table