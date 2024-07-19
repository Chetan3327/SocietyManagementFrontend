import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bpit from "../assets/bpit.jpeg";
import bpit1 from "../assets/bpit1.jpeg";
import bpit2 from "../assets/bpit2.jpeg";
import bpit3 from "../assets/bpit3.jpeg";
import bpit4 from "../assets/bpit4.jpeg";
import hall from "../assets/hall.jpeg";
import eyes from "../assets/eyes.jpeg";
import pen from "../assets/pen_hand.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
type Gallery = {
  img: string;
};
const gallery: Gallery[] = [
  {
    img: bpit,
  },
  {
    img: bpit4,
  },
  {
    img: bpit1,
  },
  {
    img: bpit2,
  },
  {
    img: bpit3,
  },
  {
    img: bpit,
  },
  {
    img: bpit,
  },
];
const SocietyGallery = () => {
  return (
    <>
      <h1 className="text-center text-2xl bg-violet-100 p-3">Namespace</h1>
      <div className="flex flex-col justify-center items-center mt-6">
        <Carousel
          className="w-8/12 md:w-10/12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {gallery.map(({ img }, index: number) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <img src={img} alt="bpit" className="object-fit h-40"/>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
        </Carousel>

        <h1 className="text-center w-10/12 align-center bg-violet-500 text-white mt-5 p-3 text-xl">Photo Album</h1>

        <Card className=" w-11/12 md:w-10/12 mt-5 p-0 bg-muted">
            <CardContent className="flex flex-col lg:flex-row gap-6 justify-center items-center px-2 py-1">
                <img src={hall} alt="bpit" className="object-fit lg:w-1/4 h-56 w-full"/>
                <div className="lg:w-1/4 w-full flex flex-col items-center justify-center" >
                    <h1 className="text-xl font-bold">Event Details</h1>
                    <p className="text-sm"><img src={eyes} alt="eyes" className="w-5 h-5 inline" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora reiciendis nesciunt iusto, ipsam minima sunt eos..</p>
                </div>
                <div className="px-2 lg:w-2/5 w-full">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="font-bold text-lg">Student Reviews</h1>
                            <h5 className="text-sm">What others are saying</h5>
                        </div>
                        <Link to="/" className=" p-1 h-fit border border-black border-2"> Write a Review <ChevronRight className="inline-block text-sm "/> </Link>
                    </div>
                    <div className="bg-gray-200 px-3 py-1 pb-5 mt-3">
                        <div className="flex justify-between my-2 ">
                        <div className="flex gap-2 items-center justify-center">
                        <span className="rounded-full w-8 h-8 mr-2 bg-gray-300 inline-block">
                              {" "}
                            </span>
                            <h1>John doe</h1>
                        </div>
                        <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_) => (
                                <Star fill="yellow" className="text-base" />
                            ))}
                        </div>
                        </div>
                        <p className="text-xs font-bold">Great experience with the society!!</p>
                        <img src={pen} alt="write" className="w-5 h-5"/>

                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    
    </>
  );
};

export default SocietyGallery;
