import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Card } from "../../../components/ui/card";
import { Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState , useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

type EventType = {
  SocietyName : string,
  EventID: number,
  Title : string,
  Description : string,
  EventType : string,
  ModeOfEvent : string,
  Location : string,
  LinkToEvent : string,
  EventDateTime : Date
}
// const events = [
//   {
//     detail:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     Date: "13/09/2024",
//     society: "Anveshan",
//   },
//   {
//     detail:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     Date: "13/09/2024",
//     society: "Anveshan",
//   },
//   {
//     detail:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     Date: "13/09/2024",
//     society: "Anveshan",
//   },
//   {
//     detail:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     Date: "13/09/2024",
//     society: "Anveshan",
//   },
//   {
//     detail:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
//     Date: "13/09/2024",
//     society: "Anveshan",
//   },
// ];

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Events_Table = () => {
  const [events , setEvents] = useState([])
  const params = useParams()
  console.log(params)

  let fetchAllEvents ;
  useEffect(()=>{
       fetchAllEvents = async()=>{
        let res ;
        if(params.societyID){
          res =  await axios.get(`${BACKEND_URL}/admin/events/${params.societyID}`)
        }else{
          res =  await axios.get(`${BACKEND_URL}/admin/events`)
        }
      //  res =  await axios.get(`${BACKEND_URL}/admin/events`)
        console.log('data',res.data)
        setEvents(res.data)
      }
      fetchAllEvents()
  },[])

  if(events.length<=0){
   return (
    <div className="text-3xl font-bold">Loading data</div>
   ) 
  }

  const handleDelete = async(eventID : number)=>{
    
    await axios.delete(`${BACKEND_URL}/events/${eventID}`).then(
      res => {
        console.log(res)
        setEvents(events.filter((event : EventType)=> event.EventID!== eventID))
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
            <TableHead className="font-bold  text-xl border-muted border-2 ">
              Event ID
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Society Name
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Title
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Date
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Description
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Link to event
            </TableHead>
            <TableHead className="font-bold text-center text-xl border-muted border-2">
              Edit/Delete
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((data : EventType, index: number) => {
            {console.log(data)}
            return (
              <TableRow key={index}>
                <TableCell className="border-muted border-2">{data.EventID}</TableCell>
                <TableCell className="text-center border-muted border-2">
                  {data.SocietyName}
                </TableCell>
                <TableCell className="text-center border-muted border-2">
                  {data.Title}
                </TableCell>
                <TableCell className="text-center border-muted border-2">
                {format(new Date(data.EventDateTime), "MMMM dd, yyyy")}
                </TableCell>
                <TableCell className="text-center border-muted border-2">
                  {data.Description}
                </TableCell>
                <TableCell className="text-center border-muted border-2">
                  <a href={`${data.LinkToEvent}`}>View More About Event</a>
                </TableCell>

                <TableCell className="flex justify-center gap-5">
                  <Link to={`/admin/events/update/${data.EventID}`} state={{data}}>
                    <Button className="text-blue-700">
                      <Edit />
                    </Button>
                  </Link>
                  <Button className="text-red-700" onClick={()=>handleDelete(data.EventID)}>
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Events_Table;
