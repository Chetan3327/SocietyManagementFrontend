import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

// news in backend 
type newsType = {
  SocietyID : number ,
  NewsID : number ,
  Title : string ,
  Description : string,
  DateOfNews : Date ,
  Author : string
}

 const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const AllNews = () => {
//   const [news, setNews] = useState([])
//   useEffect(() => {
//     const fetchsociety = async () => {
//       const res = await axios.get(`${BACKEND_URL}/news`)
//       console.log('data', res.data)
//       setNews(res.data)
//     }
//     fetchsociety()
//   }, [])
//   if (!news) return <div>Loading...</div>;

// const news=[
//   { 
//     id: '1',
//     detail:"Upcoming Hackathon",
//     Date:"13/09/2024",
//     society:"Anveshan",
//     newsID: '71526',
//     type:"Update"               
//   },
//   {
//     id: '2',
//     detail:"Upcoming Hackathon",
//     Date:"13/09/2024",
//     society:"Anveshan",
//     newsID: '71526',
//     type:"Update"               
//   },
//   {
//     id: '3',
//     detail:"Upcoming Hackathon",
//     Date:"13/09/2024",
//     society:"Anveshan",
//     newsID: '71526',
//     type:"Update"               
//   },
//   {
//     id: '4',
//     detail:"Upcoming Hackathon",
//     Date:"13/09/2024",
//     society:"Anveshan",
//     newsID: '71526',
//     type:"Update"               
//   },
  
// ]
const News_Table = () => {

  const [news , setNews] = useState([])
  const params = useParams()
  console.log(params)

  let fetchAllNews ;
  useEffect(()=>{
       fetchAllNews = async()=>{
        let res ;
        if(params.societyID){
          res =  await axios.get(`${BACKEND_URL}/admin/news/${params.societyID}`)
        }else{
          res =  await axios.get(`${BACKEND_URL}/admin/news`)
        }
         
        console.log('data',res.data)
        setNews(res.data)
      }
      fetchAllNews()
  },[])

  if(news.length<=0){
   return (
    <div className="text-3xl font-bold">Loading data</div>
   ) 
  }

  const handleDelete = async(newsID : number)=>{
    
      await axios.delete(`${BACKEND_URL}/admin/news/${newsID}`).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
  }
  return (
    <Card className="m-7 p-0 h-screen md:h-96 w-10/12 overflow-y-auto">
      <Table className="border-none">
        <TableHeader>
          <TableRow className="text-blue-700">
            <TableHead className="font-bold  text-xl  " rowSpan={2}>
              SocietyID
            </TableHead>
            <TableHead className="font-bold  text-xl  " rowSpan={2}>
              NewsID
            </TableHead>
            <TableHead className="font-bold text-center text-xl " rowSpan={2}>
              News Title
            </TableHead>
            <TableHead className="font-bold text-center text-xl 2 p-0" colSpan={3}>
              {/* <h1 className="font-bold text-center text-xl "> */}
                News Details
              {/* </h1> */}
            </TableHead>
            
            <TableHead className="font-bold text-center text-xl " rowSpan={2}>Edit/Delete</TableHead>
          </TableRow>
          <TableRow>
                <TableHead className="font-bold text-xl">Date of news</TableHead>
                <TableHead className="font-bold text-xl ">Description</TableHead>
                <TableHead className="font-bold text-xl">Author</TableHead>          
          </TableRow>
        </TableHeader>
        <TableBody>
          {news.map((news : newsType, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className="text-center">{news.SocietyID}</TableCell>
                <TableCell className="text-center">{news.NewsID}</TableCell>
                <TableCell className="text-center ">
                 {news.Title}
                </TableCell>
                <TableCell className="p-0 h-full">
                  <TableCell className="text-center ">{format(new Date(news.DateOfNews), "MMMM dd, yyyy")}</TableCell>
                  <TableCell className="text-center ">{news.Description}</TableCell>
                  <TableCell className="text-center ">{news.Author}</TableCell>
                 
                </TableCell>
                <TableCell className="flex h-full justify-center items-center pt-8 gap-5 ">
                      <Link to="/admin/news/update">
                           <Button className="text-blue-700"><Edit /></Button>
                      </Link>
                      <Button className="text-red-700" onClick={()=>handleDelete(news.NewsID)}><Trash /></Button>
                    </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default News_Table;
