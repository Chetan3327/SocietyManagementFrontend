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

type GalleryType = {
    SocietyID : number ,
    GalleryID : number ,
    Image : string
}

// const galleries = [
//     {
//         id: '1',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '2',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '3',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '4',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '5',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '6',
//         galleryID: '9250',
//         image: 'link',
//     },
//     {
//         id: '7',
//         galleryID: '9250',
//         image: 'link',
//     },
// ]

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Gallery_table = () => {

    const [galleries , setGalleries] = useState([])
    const params = useParams()
    console.log(params)
  
    let fetchAllGalleries ;
    useEffect(()=>{
         fetchAllGalleries = async()=>{
          let res ;
          if(params.societyID){
            res =  await axios.get(`${BACKEND_URL}/admin/gallery/${params.societyID}`)
          }else{
            res =  await axios.get(`${BACKEND_URL}/admin/gallery`)
          }
           
          console.log('data',res.data)
          setGalleries(res.data)
        }
        fetchAllGalleries()
    },[])
  
    if(galleries.length<=0){
     return (
      <div className="text-3xl font-bold">Loading data</div>
     ) 
    }
    const handleDelete = async (GalleryId: number) => {

        await axios.delete(`${BACKEND_URL}/admin/gallery/${GalleryId}`).then(
          res => {
            console.log(res)
            setGalleries(galleries.filter((gallery: GalleryType) => gallery.GalleryID !== GalleryId))
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
                        <Link className="bg-blue-700 px-4 py-2 rounded-full text-white flex gap-5" to='/admin/gallery/add'>
                            <UserRoundPlus fill="white" />
                            <div>New Gallery</div>
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
                                    GalleryID
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Image Link
                                </TableHead>
                                <TableHead className="font-bold text-center text-xl">
                                    Actions            
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {galleries.map((galleries : GalleryType, index) => {
                                return (
                                    <TableRow key={index} className="border-none">
                                        <TableCell className="text-center">
                                            <h1 className="font-bold">{galleries.SocietyID}</h1>
                                        </TableCell>
                                        <TableCell className="text-center">{galleries.GalleryID}</TableCell>
                                        <TableCell className="text-center">
                                            <a href={`${galleries.Image}`}>View Image</a>
                                        </TableCell>
                                        <TableCell className="flex justify-center gap-5">
                                            <Link to={`/admin/gallery/update/${galleries.GalleryID}`}>
                                                <Button className="text-blue-700"><Edit /></Button>
                                            </Link>
                                            <Button className="text-red-700" onClick={() => handleDelete(galleries.GalleryID)}><Trash /></Button>
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

export default Gallery_table