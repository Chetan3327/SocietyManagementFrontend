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
// import { format } from "date-fns";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type TestimonialType={
    TestimonialID : number ,
    SocietyID : number ,
    EnrollmentNo : number ,
    TestimonialDescription : string ,
}

// const testimonials = [
//     {
//         img: student,
//         name: 'John Doe',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         img: student,
//         name: 'Ravi Tiwari',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         img: student,
//         name: 'John Doe',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
//     {
//         img: student,
//         name: 'John Doe',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore repellendus numquam unde exercitationem veniam corporis quisquam, optio neque voluptate officiis'
//     },
// ]

const Testimonial_table = () => {
    const [testimonials , setTestimonials] = useState([])
    const params = useParams()
    console.log(params)
  
    let fetchAllTestimonials ;
    useEffect(()=>{
         fetchAllTestimonials = async()=>{
          let res ;
          if(params.societyID){
            res =  await axios.get(`${BACKEND_URL}/admin/testimonials/${params.societyID}`)
          }else{
            res =  await axios.get(`${BACKEND_URL}/admin/testimonials`)
          }
           
          console.log('data',res.data)
          setTestimonials(res.data)
        }
        fetchAllTestimonials()
    },[])
  
    if(testimonials.length<=0){
     return (
      <div className="text-3xl font-bold">Loading data</div>
     ) 
    }

    const handleDelete = async(testimonialsID : number)=>{
    
        await axios.delete(`${BACKEND_URL}/testimonials/${testimonialsID}`).then(
          res => {
            console.log(res)
            setTestimonials(testimonials.filter((testimonial : TestimonialType)=> testimonial.TestimonialID !== testimonialsID))
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
                                    TestimonialID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    SocietyID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Enrollment Number
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
                            {testimonials.map((testimonial :  TestimonialType, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">{testimonial.TestimonialID}</TableCell>
                                        <TableCell className="text-center">{testimonial.SocietyID}</TableCell>
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{testimonial.EnrollmentNo}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{testimonial.TestimonialDescription}</TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to={`/admin/testimonials/update/${testimonial.TestimonialID}`} state={{testimonial}}>
                                                <Button className="text-blue-700"><Edit /></Button>
                                            </Link>
                                            <Button className="text-red-700"  onClick={()=>handleDelete(testimonial.TestimonialID)}><Trash /></Button>
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