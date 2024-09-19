// import PieChart from './DashboardPieChart'
//import student from '../../../assets/student.jpg'
import { formatDistanceToNow } from 'date-fns'
import {   Newspaper} from 'lucide-react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
// import { format } from "date-fns";
// import { useParams } from "react-router-dom";

// const statsData = [
//     {
//         field: 'Total Registered Socities',
//         count: 16
//     },
//     {
//         field: 'Total Registered Members',
//         count: 715
//     },
//     {
//         field: 'Events this month',
//         count: 5
//     },
// ]

// const activityData = [
//     {
//         img: student,
//         date: new Date(),
//         author: 'Adam Smith',
//         title: ' New opening treasurer posted by Society D'
//     },
//     {
//         img: student,
//         date: new Date(),
//         author: 'Dr. Achall Kaushik',
//         title: ' Coordinator Mr. X assigned to tech fest event'
//     },
//     {
//         img: student,
//         date: new Date(),
//         author: 'Adam Smith',
//         title: ' New opening treasurer posted by Society D'
//     },
//     {
//         img: student,
//         date: new Date(),
//         author: 'Adam Smith',
//         title: ' New opening treasurer posted by Society D'
//     },
//     {
//         img: student,
//         date: new Date(),
//         author: 'Adam Smith',
//         title: ' New opening treasurer posted by Society D'
//     },
//     {
//         img: student,
//         date: new Date(),
//         author: 'Adam Smith',
//         title: ' New opening treasurer posted by Society D'
//     },
    
// ]

type newsType = {
    NewsID: number,
    Title: string,
    DateOfNews: Date,
    Author: string
  }

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const filteredActivityData = activityData.length > 6 ? activityData.slice(0, 6) : activityData

const Dashboard = () => {
    const [news, setNews] = useState<newsType[]>([]);
    const [ members , setMembers ] = useState<number>(0)
    const [ events , setEvents ] = useState<number>(0)

    useEffect(() => {
        const fetchAllNews = async () => {
          let res; let res1; let res2;
           res = await axios.get(`${BACKEND_URL}/admin/home/news`);
          console.log('in admin home page',res)
          setNews(res.data);

          res1 = await axios.get(`${BACKEND_URL}/students`);
          console.log('in admin home page',res1)
          setMembers(res1.data.length);

          res2 = await axios.get(`${BACKEND_URL}/events`);
          console.log('in admin home page',res2)
          setEvents(res2.data.length);

        };
    
        fetchAllNews();
      }, []);
    
      if (news.length <= 0) {
        return <div className="text-xl font-bold">Loading data...</div>;
      }
    return (
        <div className='md:flex md:gap-3 w-screen overflow-x-hidden'>
              <Sidebar/>
        <div className='w-screen overflow-x-hidden'>
            <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 text-center mx-2">
                {/* {
                    statsData.map((dataField, index) => (
                        <div key={index} className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
                            <h3 className="text-4xl font-bold text-black">{dataField.count}</h3>
                            <h5 className="text-gray-700">{dataField.field}</h5>
                        </div>
                    ))
                } */}

                        <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-black">Total Registered Socities</h3>
                            <h5 className="text-gray-700 text-2xl">16</h5>
                        </div>
                        <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-black">Total Registered Members</h3>
                            <h5 className="text-gray-700 text-2xl">{members}</h5>
                        </div>
                        <div  className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-black">Total Events Till Date</h3>
                            <h5 className="text-gray-700 text-2xl">{events}</h5>
                        </div>

            </div>

            <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 mx-2 lg:mx-0">
                <div className=''>
                    <h2 className='font-bold text-2xl mb-8 text-center'>Activity Feed</h2>
                    <div className='border border-md brder-gray-800 rounded px-4 py-2 '>
                        {
                            news.map((activity, index) => (
                                <div key={index} className='flex flex-col lg:flex-row space-x-4 mb-6'>
                                    <div>
                                        {/* <img
                                            src={activity.img}
                                            className='rounded-full h-20'
                                        /> */}
                                        <Newspaper  className='rounded-full h-20'/>
                                    </div>
                                    <div>
                                        <div className='flex flex-col pt-4'>
                                            <h5 className='text-gray-700 text-sm'>{formatDistanceToNow(activity.DateOfNews)} ago / {activity.Author}</h5>
                                            <div className='flex justify-between'>
                                                <h3>{activity.Title}</h3>
                                                {/* <ChevronRight className='ml-6' /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <Link to="/all-news" className='text-blue-600'>See more activities</Link>
                        {/* <p className='text-blue-600'>See more activities</p> */}
                    </div>
                </div>
                {/* <div>
                    <h2 className='font-bold text-2xl mb-8 text-center'>Query Resolution</h2>
                    <PieChart />
                </div> */}
            </div>
        </div>
        </div>
    )
}

export default Dashboard