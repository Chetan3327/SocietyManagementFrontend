import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
// import { z } from "zod";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  EventCard,
  PastEventCard,
  EventCardType,
} from "./EventCard";

// const schema = z.object({
//   title: z.string().optional(),
// });

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Events = () => {
  const { id } = useParams<{ id: string }>();
  const [events, setEvents] = useState<EventCardType[] | null>(null);
  const [pastEvents, setPastEvents] = useState<EventCardType[] | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<EventCardType[] | null>(null);
  const [searchTitle, setSearchTitle] = useState<string>("");

  useEffect(() => {
    const fetchSociety = async () => {
      let res;
      if(id){
         res = await axios.get(`${BACKEND_URL}/events/society/${id}`);
      }else{
         res = await axios.get(`${BACKEND_URL}/events`);
      }
      
      console.log('data', res.data);
      setEvents(res.data);

      const now = new Date();
      const past = res.data.filter((event: EventCardType) => new Date(event.EventDateTime) < now);
      const upcoming = res.data.filter((event: EventCardType) => new Date(event.EventDateTime) >= now);

      console.log("past", past);
      setPastEvents(past);
      setUpcomingEvents(upcoming);
    };
    fetchSociety();
  }, [id]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredPastEvents = events?.filter((event) =>
      event.Title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      new Date(event.EventDateTime) < new Date()
    );
    setPastEvents(filteredPastEvents || null);
  };

  if (!events) return <div>Loading...</div>;

  return (
    <div>
      <div className="relative w-full mx-auto">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Events page"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-white text-center text-4xl font-extrabold">
            DISCOVER OUR EVENTS
          </h2>
          <p className="text-white text-center text-xl font-extrabold ">
            Welcome to our events page. Stay informed about all the activities
            and opportunities hosted by societies. A wide range of events are
            organised to inspire, educate, and connect.
          </p>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-6 md:mx-20 mt-20 rounded">
        <h2 className="bg-gray-100 text-gray-900 w-full text-3xl text-center py-4 mb-10">
          Upcoming events
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {upcomingEvents?.map((event, index) => (
              <CarouselItem className="lg:basis-1/3 sm:basis-1/2" key={index}>
                <EventCard props={event} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-6 md:mx-20 mt-20 rounded">
        <h2 className="bg-gray-100 text-gray-900 w-full text-3xl text-center py-4 mb-10">
          Past events
        </h2>
        <form onSubmit={handleSearchSubmit}>
          <div className="bg-gray-300 py-4 px-2 flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
            <input
              type="text"
              placeholder="Search title "
              className=" bg-white p-2 px-6 w-full rounded lg:mr-2"
              id="date-search"
              value={searchTitle}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="text-white bg-blue-500 p-2  rounded text-md px-8"
            >
              Search
            </button>
          </div>
        </form>

        <div>
          {pastEvents?.map((event, index) => (
            <PastEventCard props={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
