import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import latest_new from '../../../assets/latestnews.png'; //dummy img
import pen_hand from '../../../assets/pen_hand.jpeg';
import { EventCard, EventCardDetailed, EventCardDetailedType, EventCardType, PastEventCard } from "./EventCard";

const schema = z.object({
    // date: z.date(),
    title: z.string(),
})

const cardEvents: EventCardType[] = [
    {
        img: pen_hand,
        title: 'Tech Talk : Future Of AI',
        date: new Date(),
        time: '3:00 PM - 4:00 PM ',
        venue: 'Room 210',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, id eum recusandae maxime eos commodi non repellendus, ullam necessitatibus porro aspernatur nostrum sunt et alias sint? Error, corrupti odit.',
        registrationLink: 'www.google.com'
    },
    {
        img: pen_hand,
        title: 'Tech Talk : Future Of AI',
        date: new Date(),
        time: '3:00 PM - 4:00 PM ',
        venue: 'Room 210',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, id eum recusandae maxime eos commodi non repellendus, ullam necessitatibus porro aspernatur nostrum sunt et alias sint? Error, corrupti odit.',
        registrationLink: 'www.google.com'
    },
    {
        img: pen_hand,
        title: 'Geek Talk',
        date: new Date(),
        time: '3:00 PM - 4:00 PM ',
        venue: 'Room 210',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, id eum recusandae maxime eos commodi non repellendus, ullam necessitatibus porro aspernatur nostrum sunt et alias sint? Error, corrupti odit.',
        registrationLink: 'www.google.com'
    },
    {
        img: pen_hand,
        title: 'Tech Talk : Future Of AI',
        date: new Date(),
        time: '3:00 PM - 4:00 PM ',
        venue: 'Room 210',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam, id eum recusandae maxime eos commodi non repellendus, ullam necessitatibus porro aspernatur nostrum sunt et alias sint? Error, corrupti odit.',
        registrationLink: 'www.google.com'
    },
]

const detailedEvents: EventCardDetailedType[] = [
    {
        img: [
            latest_new, latest_new
        ],
        title: 'Tech Talk : Future Of AI',
        subTitle: 'Empowering the future ',
        description: 'Join us for Codefest 2024 , a dynamic 3-day coding marathon designed to challenge your skills and foster innovation . This event is a fantastic oppurtunity for students of all levels to collaborate , learn and showcase their talent in software development',
        judgingCriteria: [
            'Innovation : originality and creativity of the project',
            'Functionality : how well the project works and meets its intended people',
            'Design : user interface and user experience',
            'Impact : potential impact and usefulness of the project'
        ],
        prizes: [
            '1st place : $100 cash prize and internship oppurtunities ',
            '2nd place : $50 cash prize and internship interview  ',
            '3rd place : $20 cash prize  '
        ],
        additionalDetails: [
            'Mentorship throughout the event by industry experts',
            'Networking oppurtunities with like minded people',
            'Refreshments and meals will be provided throughout the event ',
            'psum dolor sit amet consectetur adipisicing elit. Nam ducimus nesciunt porro esse enim delectus, commodi et sunt aut eos unde alias, asperiores totam voluptas? Aliquid laborum nemo dolore soluta?'
        ]
    }
]
const Events = () => {

    let [pastEvents, setPastEvents] = useState(cardEvents)

    type formData = z.infer<typeof schema>
    const { register, handleSubmit} = useForm<formData>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data: formData) => {
     //   console.log(data.date)
        // if (data.date) {
        // const  filteredEvents  = cardEvents.filter((event)=>{
        //     console.log(event.date)
        //     return event.date <= data.date})
        //   setPastEvents(filteredEvents);
        // };

if (data.title.length > 0) {
    const filteredEvents = cardEvents.filter(event => 
        event.title.toLowerCase().includes(data.title.toLowerCase())
    );
    setPastEvents(filteredEvents);


}

    };


return (
    <div>
        <div className="relative w-full mx-auto">
            <img
                className="w-full h-80 blur-sm"
                src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Events page"
            />
            <div className="absolute inset-0 py-20 lg:py-28">
                <h2 className="text-white text-center text-4xl font-extrabold">DISCOVER OUR EVENTS</h2>
                <p className="text-white text-center text-xl font-extrabold ">Welcome to our events page  . Stay informed about all the activities and oppurtunities hosetd by socities .<br />
                    A wide range of events are organised to inspire,educate and connect
                </p>
            </div>
        </div>

        <div className="py-8 px-4 sm:px-6 lg:px-8 mx-6 md:mx-20 mt-20 rounded" >
            <h2 className="bg-gray-100 text-gray-900 w-full text-3xl text-center py-4 mb-10">Upcoming events</h2>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselPrevious />
                <CarouselContent>
                    {
                        cardEvents.map((event, index) => (
                            <CarouselItem className="lg:basis-1/3 sm:basis-1/2" >
                                <EventCard props={event} key={index} />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselNext />
            </Carousel>


        </div>

        <div>
            {
                detailedEvents.map((event, index) => (
                    <EventCardDetailed props={event} key={index} />
                ))
            }
        </div>

        <div className="py-8 px-4 sm:px-6 lg:px-8 mx-6 md:mx-20 mt-20 rounded" >
            <h2 className="bg-gray-100 text-gray-900 w-full text-3xl text-center py-4 mb-10">Past events</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-gray-300 py-4 px-2 flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
{/* 
                     <input
                            {...register('date')}
                            type="date" placeholder="DD/MM/YYYY"
                            className=" bg-white p-2 px-4 rounded text-gray-500" id="date-search"
                        />  */}
                    <input
                        {...register('title')}
                        type="text" placeholder="Search title "
                        className=" bg-white p-2 px-6 w-full rounded lg:mr-2" id="date-search"
                    />
                    <button type="submit" onClick={() => { console.log("hello") }} className="text-white bg-blue-500 p-2  rounded text-md px-8">
                        Search

                    </button>
                </div>
            </form>
          
            <div>
                {
                    pastEvents.map((event, index) => (
                        <PastEventCard props={event} key={index} />
                    ))
                }
            </div>
        </div>

    </div>
)
}

export default Events;