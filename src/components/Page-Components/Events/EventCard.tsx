import {
    Card , CardContent , CardDescription , CardFooter , CardTitle , CardHeader
} from '@/components/ui/card'

import { Clock , MapPin , Calendar } from 'lucide-react'
import { Link } from 'react-router-dom' 



type EventCardType = { 
  title : string ,
  date : Date,
  time : string,
  venue : string ,
  description : string ,
    img : string ,
    registrationLink : string 
}

type EventCardDetailedType ={
  img: string[],
  title : string ,
  subTitle : string ,
  description : string,
  judgingCriteria : string[],
  prizes : string[],
  additionalDetails : string[],
}

const EventCard = ({props}: {props : EventCardType}) =>{
    return(
 
        < Card className='bg-white text-gray-900 '>
           <CardHeader>
            <img
             src={props.img}
               className="rounded-xl h-20 w-80"
             alt='event image'
            />
           </CardHeader>
           <CardContent>
            <h2 className='text-center mt-4 text-lg font-bold'>{props.title}</h2>
           <div className='flex flex-col items-center mt-4 space-y-2'>
             <div className='flex'>
               <Calendar className='mr-2'/>
               {props.date.toDateString()}
             </div>
             <div className='flex'>
               <Clock className='mr-2'/>
               {props.time}
             </div>
             <div className='flex'>
                 <MapPin className='mr-2'/>
                 {props.venue}
             </div>
           </div>
           <p className='text-gray-600 mt-2'>{props.description}</p>
           
           </CardContent>
           <CardFooter>
           <Link
        to={props.registrationLink} className=" bg-blue-500 text-white px-6 py-2 w-full text-center text-md rounded-full ">
         Click here to register 
      </Link>
           </CardFooter>
        </Card>
    )
}



const EventCardDetailed = ({props}:{props:EventCardDetailedType}) => {
   return(
    <div className='w-full bg-gray-200 p-4 my-4'>
    <h2 className='text-center text-3xl font-bold'>{props.title}</h2>
    <h4 className='text-gray-700 text-center text-lg mb-4'>{props.subTitle}</h4>

    <div className='flex flex-col lg:flex-row space-x-4 mb-4 '>
         <div>
          <img
              // className='w-full h-96'
          src={props.img[0]} alt='event-image'
          />
         </div>
       
         <div>
          <p className='mt-4 lg:mt-0'>{props.description}</p>
          <div className="flex  w-full ">
                  <span className=" text-3xl font-bold pb-4 mr-4  mt-4 ">Judging Criteria </span>   <div className="mt-8 flex-grow border-t border-gray-900 hidden lg:block"></div>
          </div>
         
         <ul
         style={
          {
            listStyle : 'circle'
          }
         }
         className='ml-4'
         >
          {
            props.judgingCriteria.map((judge,index)=>(
              <li key={index}>{judge}</li>
            ))
          }
         </ul>
         </div>
    </div>

    <div className='flex flex-col lg:flex-row space-x-4 '>
        
       
         <div className=''>
         
          <div className="flex  w-full ">
          <div className="mt-8 flex-grow border-t border-gray-900 hidden lg:block"></div> <span className=" text-3xl font-bold pb-4 ml-4 sm:mr-4 mt-4 ">Prizes </span>   <div className="mt-8 flex-grow border-t border-gray-900 hidden lg:block"></div>
          </div>
         
         <ul className='ml-4'
         style={
          {
            listStyle : 'circle'
          }
         }>
          {
            props.prizes.map((prize , index)=>(
              <li key={index}>{prize}</li>
            ))
          }
         </ul>

         <h3 className='text-3xl font-bold my-4 ml-4'>Additional Details</h3>
         <ul className='ml-4'
         style={
          {
            listStyle : 'circle'
          }
         }
         >
          {
            props.additionalDetails.map((detail , index)=>(
              <li key={index}>{detail}</li>
            ))
          }
         </ul>

         </div>

         <div >
          <img
          className='w-full h-96 mt-4 lg:mt-0'
          src={props.img[1]} alt='event-image'
          />
         </div>
    </div>
  
</div>
   )
  
}

const PastEventCard = ({props}:{props : EventCardType}) =>{
  return(
    <div className='w-full rounded border border-md border-gray-700 py-4 px-2 my-4 '>
      
          <h2 className='text-2xl font-bold'>{props.title}</h2>
          <p className='mt-2'>{props.description}</p>
          <div className='flex flex-col lg:flex-row  lg:justify-between mt-2 space-y-2'>
          <div className='flex  '>
               <Calendar className='mr-2'/>
               {props.date.toDateString()}
             </div>
             <div className='flex'>
               <Clock className='mr-2'/>
               {props.time}
             </div>
             <div className='flex'>
                 <MapPin className='mr-2'/>
                 {props.venue}
             </div>
          </div>
    </div>
  )
}
export {EventCard , EventCardDetailed , PastEventCard , EventCardType , EventCardDetailedType} 