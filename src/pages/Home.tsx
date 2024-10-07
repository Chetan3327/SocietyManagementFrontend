import { Link } from "react-router-dom";
// import news_img from "../assets/news_bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import bpit from "../assets/bpit.jpeg";
import { useEffect, useState } from 'react';
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


type Review = {
  desc: string;
  name: string;
  batch: string;
  image: string;
};

const reviews: Review[] = [
  {
    desc: "Being part of the Namespace Society has been a transformative experience for me. It provided me with hands-on opportunities to work on cutting-edge tech projects and collaborate with like-minded peers who share my passion for technology. The workshops and hackathons organized by the society have equipped me with invaluable skills and insights, preparing me for a successful career in the tech industry. Namespace is more than just a society; it's a family where innovation and creativity thrive.",
    name: "Rishabh Kumar",
    batch: "IT-B, 2019-2023",
    image: "https://media.istockphoto.com/id/1448069480/photo/happy-young-indian-student-boy-working-on-laptop-and-studying-in-college-library-with.webp?b=1&s=170667a&w=0&k=20&c=5t956TDdrYeVbBpMnfzr0-RZK-ZaWpzMR2mcvCH5Nh8=", // Add image URL here
  },
  {
    desc: "Namespace Society was instrumental in my personal and professional growth during my college years. The mentorship from senior members and guidance from industry experts introduced me to new technologies and inspired me to pursue a career in tech. The collaborative environment fostered by the society encouraged me to take on leadership roles, and the friendships I made have lasted beyond graduation. Namespace Society truly embodies the spirit of innovation and learning.",
    name: "Ronak Singh",
    batch: "CSE-A, 2020-2024",
    image: "https://img.freepik.com/premium-photo/college-student-holds-book-graduation-success-concept-professional-photoshoot_950002-3529.jpg", // Add image URL here
  },
  {
    desc: "As a fresher, I was initially intimidated by the fast-paced world of technology, but joining the Namespace Society was the best decision I made. The welcoming atmosphere and the supportive community made it easy to dive in and start exploring. From participating in coding competitions to attending insightful talks by industry leaders, every experience has been incredibly enriching. Namespace Society has ignited my passion for tech and motivated me to push my boundaries.",
    name: "Riya Mishra",
    batch: "ECE-B, 2021-2025",
    image: "https://img.freepik.com/premium-photo/college-student-holds-book-graduation-success-concept-professional-photoshoot_950002-3720.jpg", // Add image URL here
  },
];

const TypewriterText = ({ text, speed }: { text: string; speed: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); // Track index for each character

  useEffect(() => {
    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset the text after it finishes typing
        setTimeout(() => {
          setDisplayedText('');
          setIndex(0);
        }, 2000); // Pause for 2 seconds before restarting
      }
    };
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Home = () => {

  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchsociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/news`)
      // const res = await axios.get(`http://localhost:8000/api/v1/news`)
      console.log('data', res.data)
      setNews(res.data)
    }
    fetchsociety()
  }, [])

  const firstLine = 'Welcome To The Society Management Portal';
  const secondLine = 'A unified platform for Managing Societies';
  const thirdLine = 'Tracking contributions and fostering growth';
  // const breakingNews = "For the latest news and updates about the societies, visit";
  
  return (
    <div className ="w-full overflow-x-hidden">

      <div className="bg-red-500 text-white p-4 overflow-hidden">
        <div className="flex flex-row justify-start items-center space-x-16 whitespace-nowrap animate-marquee">
          {news.map(({ Title }, index) => (
            <p key={index} className="text-white text-center text-sm font-bold mb-2 min-w-max">
              {Title}
            </p>
          ))}
        </div>
      </div>

      <div className="relative w-full mx-auto">
        <img
          className="h-screen md:h-80 w-full object-cover"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="BPIT img"
        />
        <div className="absolute inset-0 py-10 bg-black opacity-80 px-10 lg:px-16 flex items-center justify-center">
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Typing effect for the first line */}
            <h2 className="font-bold text-4xl lg:text-5xl text-white">
              <TypewriterText text={firstLine} speed={100} />
            </h2>
      
            {/* Typing effect for the second and third lines */}
            <div className="mt-2 space-y-2">
              <p className="text-zinc-300 text-lg lg:text-xl">
                {/* <TypewriterText text={secondLine} speed={100} /> */}
                {secondLine}
              </p>
              <p className="text-zinc-300 text-lg lg:text-xl">
                {/* <TypewriterText text={thirdLine} speed={100} /> */}
                {thirdLine}
              </p>
            </div>
      
            {/* Buttons */}
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link
                to="/societies"
                className="text-white text-xl bg-yellow-500 rounded-full px-6 py-2 transition transform duration-500 ease-in-out hover:scale-110"
              >
                View Existing Societies
              </Link>
              <Link
                to="/create"
                className="text-white text-xl bg-yellow-500 rounded-full px-6 py-2 transition transform duration-500 ease-in-out hover:scale-110"
              >
                Create Society
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-20 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              className="rounded-lg lg:h-auto  lg:max-w-xl transform duration-300 ease-in-out hover:scale-105 shadow-cyan-800 shadow-lg"
              // src={news_img}
              src='https://th.bing.com/th/id/R.b10f5e8fc9d73cf72cfab57b5d1a77a2?rik=HGEfcf1Lwhrr5w&riu=http%3a%2f%2fnparo.fr%2fwp-content%2fuploads%2f2020%2f03%2fnuage-de-mots-media.png&ehk=5fJaf%2btiq2CZMBvWFnA2TBuaCnWudKazAznwtllfZkk%3d&risl=&pid=ImgRaw&r=0'
              alt="News"
            />
          </div>
          <div className="">
            <div className="text-center bg-gray-200 py-2 transition transform duration-300 ease-in-out hover:scale-105">
              <h2 className="text-4xl font-semibold text-black">News And Announcements</h2>
              <p className="text-lg text-black">Stay Informed and Engaged</p>
            </div>
            <p className="mt-14 text-xl">
            Welcome to the News and Announcements Section of Our College Society! Stay informed about the latest happenings and developments within our vibrant community. This is your go-to source for updates on our society’s events, initiatives, and achievements.

            </p>
            <Link to="/all-news">
              <Button className="mt-16 text-lg transition transform duration-300 ease-in-out hover:scale-110 bg-blue-500">
                <ArrowRight /> Explore More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container pb-6 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="text-center bg-gray-200 py-2 transform duration-300 ease-in-out hover:scale-105">
              <h2 className="text-4xl font-semibold text-black">Faculty Coordinators</h2>
              <p className="text-lg text-black">Our dedicated Faculties</p>
            </div>
            <p className="mt-14 text-xl">
            The Faculty Coordinators of our society play a pivotal role in bridging the gap between students and the academic world, providing guidance, mentorship, and support to ensure the smooth functioning of our activities. They bring a wealth of experience and expertise, enriching our society with valuable insights and innovative ideas. 
            </p>
            <Link to="/coordinators">
              <Button className="mt-16 text-lg transition transform duration-300 ease-in-out hover:scale-110 bg-blue-500">
                <ArrowRight /> Explore More
              </Button>
            </Link>
          </div>
          <div className="lg:ml-2 order-1 lg:order-2">
            {/* dummy image used */}
            <img
              className="rounded-lg h-auto lg:max-w-xl transform duration-300 ease-in-out hover:scale-105 shadow-cyan-800 shadow-lg"
              // src={news_img}
              src= 'https://cse.bpitindia.ac.in/wp-content/uploads/2024/05/CSE-DPT-BPIT-2.jpg'
              alt="News"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex flex-col items-center">
          <div className="w-3/6 text-center py-2 bg-gray-100 mb-2 rounded-lg font-bold text-xl text-black">
            Achievements
          </div>
          <Card className="w-full lg:w-8/12 mt-5 shadow-md shadow-gray-300 border border-t-gray-300 border-l-gray-300 border-t-4 border-l-4 py-3 px-6 h-fit">
            <CardContent>
              <h1 className="font-bold mb-4">
                Unvelling The Triumphs of Our{" "}
                <span className="text-red-600">
                  Talented And Creative Minds
                </span>
              </h1>

              <p>
              Welcome to the Achievements section of our society, where we proudly showcase the remarkable accomplishments of our talented members. Our society has been at the forefront of innovation and excellence, consistently pushing boundaries and setting new standards in various fields. Over the years, our members have achieved numerous accolades, from winning prestigious competitions and hackathons to publishing groundbreaking research papers and leading impactful community projects. Each achievement reflects the dedication, creativity, and hard work of our society's members, as well as the collaborative spirit that drives us forward. We celebrate not only individual successes but also collective milestones that inspire others and contribute to our mission of fostering growth, learning, and leadership. Explore this section to learn more about the significant achievements that highlight our society's journey toward excellence.
              </p>

              <div className="border border-2 border-black shadow-md shadow-gray-200  rounded-lg relative mt-5 h-fit hidden md:block">
                <img
                  src={bpit}
                  alt="bpit"
                  className="w-full h-auto rounded-lg blur-sm"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-70">
                  <div className="absolute inset-0 flex flex-col lg:flex-row ml-15">
                    <div className="flex flex-col h-full w-full lg:w-2/3 ">
                      <div className="flex gap-1 lg:gap-5  p-1 md:p-5 lg:p-9 border border-gray-100 h-1/2  border-t-none border-l-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyH_DZhsfEp1hcd4Ya9Q5PFTdWxHMsKDryKQ&s"
                          alt="hackathon"
                          className="w-2/4 rounded-lg"
                        />
                        <h1 className="text-white font-bold lg:text-xl text-sm">
                          <span className="font-extrabold lg:text-3xl text-base">
                            1st
                          </span>{" "}
                          Place in the National Hackathon hosted by BVCOE
                        </h1>
                      </div>

                      <div className="flex gap-1 lg:gap-5 p-1 md:p-5 lg:p-9 border border-gray-100 h-1/2  border-t-none border-l-none">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UuRDGIGLIO544W9Fdef4mg3Gmk2LDA2Tg&s"
                          alt="hackathon"
                          className="w-2/4 rounded-lg"
                        />
                        <h1 className="text-white font-bold lg:text-lg text-xs">
                          <span className="font-extrabold lg:text-2xl text-xs">
                            2nd
                          </span>{" "}
                          Place in the Cultural Fest organized at MSIT
                        </h1>
                      </div>

                    </div>
                    <div className="flex lg:gap-10 flex-col hidden lg:block w-full lg:w-1/3 p-1 lg:p-7 ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq_8SxON7vO-EjCVlK-DNgff0va5kaBs-lQ&s"
                        alt="bpit"
                        className="w-full rounded-lg mb-3"
                      />
                      <p className="text-white text-xs">
                      We celebrate these achievements as milestones of our society's journey and look forward to
                      continuing our efforts to make a difference in the college community. Thank you to all our members,
                      supporters, and partners for your contributions and dedication.
                      </p>
                      <Link
                        className="bg-muted px-1 py-1 w-fit font-bold mt-5 inline-block rounded-lg transform duration-300 ease-in-out hover:scale-105"
                        to="/achievements"
                      >
                        <ArrowRight className="inline-block text-muted-foreground text-xs" />
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-full bg-muted  flex flex-col justify-center items-center mt-12">
          {/* <div className=" bottom-full lg:botton-96 left-1/4 bg-blue-800 text-white px-5 rounded-full text-xl relative py-2">
            <h1>Namespace(Formely NSCC)</h1>
          </div> */}
          <div className=" text-2xl relative left-12 md:left-44 text-center mt-10">
            Student<span className="text-red-700">Stories</span>
          </div>
          <Carousel
            className="lg:w-10/12 md:w-8/12 w-4/6  border-none"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselPrevious />
            <CarouselContent>
              {reviews.map(({ desc, name, batch, image }, index: number) => (
                <CarouselItem key={index}>
                  <Card className="border-none bg-muted">
                    <CardContent className="p-5">
                      <div className="flex flex-col lg:flex-row items-center gap-9">
                        <section className="w-2/3">
                          {/* <p className="text-5xl font-bold">&quot;</p> */}
            
                          <p>{desc}.</p>
                          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between mt-3">
                            <div>
                              <h1>{name}</h1>
                              <h1>{batch}</h1>
                            </div>
                          </div>
                        </section>
                        <img
                          src={image} // Dynamically display the image
                          alt={name}
                          className="w-2/3 lg:w-1/3 rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
           </CarouselContent>

            <CarouselNext />
          </Carousel>
        </div>

        <div className="w-full my-5 flex justify-center transform duration-300 ease-in-out hover:scale-105">
          <Card className="w-9/12 shadow-md shadow-gray-300 border-gray-300 border-4">
            <CardTitle className="text-center py-5">
              <h1>You can also search for</h1>
            </CardTitle>
            <CardContent className="flex gap-5 justify-center flex-wrap">
              {/* <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Upcoming Events</button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Core Members</button> */}
              <Link
                className="px-5 py-1 rounded-full bg-blue-800 text-white"
                to="/events"
              >
                Upcoming Events
              </Link>
          
              <Link
                className="px-5 py-1 rounded-full bg-blue-800 text-white"
                to="/query"
              >
                Inquire with the Society
              </Link>
              
              <Link
                className="px-5 py-1 rounded-full bg-blue-800 text-white"
                to="/Gallery"
              >
                Gallery
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
