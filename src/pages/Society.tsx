import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import GetInTouchForm from "@/components/Page-Components/GetInTouchForm";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/seperator";
import { ArrowRight, Bell, Calendar, Github, Linkedin, Mail, Twitter } from "lucide-react";
import drishti from '../assets/drishti-hero.png';
import latestnews from '../assets/latestnews.png';

type Review = {
  desc: string;
  name: string;
  batch: string;
};
const reviews: Review[] = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero.",
    name: "Rishabh Kumar",
    batch: "IT-B,2019-2023",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero.",
    name: "Rishabh Kumar",
    batch: "IT-B,2019-2023",
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero. Laboriosam minus odit, perferendis dolorem quas, assumenda officia odio magnam animi veniam sint ipsa quos incidunt maiores tempora possimus, corporis est vero.",
    name: "Rishabh Kumar",
    batch: "IT-B,2019-2023",
  },
];


const Society = () => {
  return (
    <div>
      <div className="w-full flex justify-between bg-gradient-to-tr from-purple-200 to-gray-300">
        <div className="ml-20 pt-10">
          <h3 className="text-3xl text-purple-700 font-bold">Welcome to Rotaract Club of BPIT:</h3>
          <h2 className="text-3xl text-red-500 font-bold">Drishti</h2>

          <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, possimus?</p>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, possimus?</p>
        </div>
        <div>
          <img src={drishti} alt="" />
        </div>
      </div>

      <div className="w-full px-20 flex justify-center py-10 gap-7">
        <div className="flex justify-center gap-7 p-10 rounded-md border-4">
          <div>
            <img src={latestnews} width={600} alt="" />
          </div>
          <div className="">
            <Card className="rounded-lg space-y-3 border-0">
              <CardHeader className="text-center">
                <h2 className="font-bold text-4xl">Who We are</h2>
                <hr className="h-[4px] text-black" />
              </CardHeader>
              <CardContent className="my-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident?</p>                 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident?</p>                 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident?</p>                 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident?</p>                 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, provident?</p>                 
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-yellow-500">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="w-full px-20 flex justify-center bg-gray-100 py-10 gap-7">
        <div className="w-[35%]">
          <Card className="rounded-lg space-y-3">
            <CardHeader className="bg-blue-700 text-white text-center font-bold text-2xl">
              LATEST NEWS
            </CardHeader>
            <CardContent className="space-y-10">
              <div className="flex gap-4 mt-10">
                <Calendar /> 
                <div>
                  <h4>New Article on Design Trends</h4>
                  <p className="text-muted-foreground">Published by: CreativeDesigns</p>
                </div>
                <div>
                  <p className="font-bold">21 min ago</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Bell /> 
                <div>
                  <h4>Important Announcement for Users</h4>
                  <p className="text-muted-foreground">Published by: Admin Team</p>
                </div>
                <div>
                  <p className="font-bold">1 hour ago</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-yellow-600"><ArrowRight /> View More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[50%]">
          <img src={latestnews} alt="" />
        </div>
      </div>

      <div className="w-full px-20 flex py-10 gap-7 flex-col items-center">
        <h1 className="font-bold text-4xl">Meet the visionaries driving our mission</h1>
        <div className="grid grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex">
                <img className="rounded-md border-2 border-black mr-2" width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s" alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex gap-5">
                    <Github />
                    <Linkedin />
                    <Twitter />
                  </div>
                  <div>
                    <h2 className="font-bold underline">Domain of Experience</h2>
                    <p>Open source & data science</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold text-2xl">Shivani Sharma</h2>
              <p className="text-muted-foreground text">President</p>               
              <p className="flex gap-1 items-center text-muted-foreground"><Mail size={20} /> shivani@gmail.com</p>
            </CardContent>
            <Separator className="my-5 h-[2px]" />
            <CardFooter>
              <p>Your dedication and innovation drive our
              success. Proud to lead such a talented team.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex">
                <img className="rounded-md border-2 border-black mr-2" width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s" alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex gap-5">
                    <Github />
                    <Linkedin />
                    <Twitter />
                  </div>
                  <div>
                    <h2 className="font-bold underline">Domain of Experience</h2>
                    <p>Open source & data science</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold text-2xl">Shivani Sharma</h2>
              <p className="text-muted-foreground text">President</p>               
              <p className="flex gap-1 items-center text-muted-foreground"><Mail size={20} /> shivani@gmail.com</p>
            </CardContent>
            <Separator className="my-5 h-[2px]" />
            <CardFooter>
              <p>Your dedication and innovation drive our
              success. Proud to lead such a talented team.</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex">
                <img className="rounded-md border-2 border-black mr-2" width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s" alt="" />
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex gap-5">
                    <Github />
                    <Linkedin />
                    <Twitter />
                  </div>
                  <div>
                    <h2 className="font-bold underline">Domain of Experience</h2>
                    <p>Open source & data science</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h2 className="font-bold text-2xl">Shivani Sharma</h2>
              <p className="text-muted-foreground text">President</p>               
              <p className="flex gap-1 items-center text-muted-foreground"><Mail size={20} /> shivani@gmail.com</p>
            </CardContent>
            <Separator className="my-5 h-[2px]" />
            <CardFooter>
              <p>Your dedication and innovation drive our
              success. Proud to lead such a talented team.</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="w-full flex bg-gray-100 py-10 px-20">
        <div className="w-[50%]">
          <h3 className="font-bold text-3xl text-center">Get In Touch</h3>
          <p className="text-muted-foreground text-center">we will answer your questions and problems.</p>

          <GetInTouchForm />
        </div>
        <div className="w-[50%]">
          <img src={latestnews} alt="" />
        </div>
      </div>

      <div className="w-full bg-muted flex flex-col justify-center items-center mt-12">
        <div className=" bottom-full lg:botton-96 left-1/4 bg-blue-800 text-white px-5 rounded-full text-xl relative py-2">
          <h1>namespace(Formely NSCC)</h1>
        </div>
        <div className=" text-2xl self-start relative left-12 md:left-44">
          Student <span className="text-red-700">Stories</span>
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
            {reviews.map(({ desc, name, batch }, index: number) => (
              <CarouselItem key={index}>
                <Card className="border-none bg-muted">
                  <CardContent className="p-5">
                    <div className="flex flex-col lg:flex-row items-center gap-9">
                      <section className="w-2/3">
                        <p className="text-5xl font-bold">&quot;</p>

                        <p>{desc}.</p>
                        <div className="flex flex-col md:flex-row gap-4 md;gap-0 justify-between mt-3">
                          <div>
                            <h1>{name}</h1>
                            <h1>{batch}</h1>
                          </div>
                          <button className="w-36 text-center bg-gray-200 text-black">
                            View More
                          </button>
                        </div>
                      </section>
                      <img
                        src="https://media.istockphoto.com/id/1448069480/photo/happy-young-indian-student-boy-working-on-laptop-and-studying-in-college-library-with.webp?b=1&s=170667a&w=0&k=20&c=5t956TDdrYeVbBpMnfzr0-RZK-ZaWpzMR2mcvCH5Nh8="
                        alt="image"
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

      <div className="w-full my-5 flex justify-center">
        <Card className="w-9/12 shadow-md shadow-gray-300 border-gray-300 border-4">
          <CardTitle className="text-center py-5">
            <h1>You can also search for</h1>
          </CardTitle>
          <CardContent className="flex gap-5 justify-center flex-wrap">
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">
              Events
            </button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">
              Core Members
            </button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">
              Contact Us
            </button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">
              Gallery
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Society;
