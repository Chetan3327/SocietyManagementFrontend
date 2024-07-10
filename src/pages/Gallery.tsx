import { Camera,ThumbsUp } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import women from "../assets/Society_Img/wibd.jpg";
import anveshan from "../assets/Society_Img/anveshan.jpg";
import avaran from "../assets/Society_Img/avaran.jpg";
import chromavita from "../assets/Society_Img/chromavita.jpg";
import gdsc from "../assets/Society_Img/gdsc.jpg";
import hash_define from "../assets/Society_Img/hash_define.jpg";
import ieee_wie from "../assets/Society_Img/ieee_wie.jpg";
import ieee from "../assets/Society_Img/ieee.jpg";
import kalam from "../assets/Society_Img/kalam.jpg";
import namespace from "../assets/Society_Img/namespace.jpg";
import opticlick from "../assets/Society_Img/opticlick.jpg";



type Events = {
  image: string;
  society: string;
};

const event: Events[] = [
  {
    image: women,
    society: "WIBD",
  },
  {
    image: namespace,
    society: "Namespace",
  },
  {
    image: opticlick,
    society: "OptiClick",
  },
  {
    image: avaran,
    society: "Avaran",
  },
  {
    image: gdsc,
    society: "GDSC",
  },
  {
    image: ieee,
    society: "IEEE",
  },
  {
    image: hash_define,
    society: "3Define",
  },
  {
    image: ieee_wie,
    society: "WIE",
  },
  {
    image: kalam,
    society: "Kalam",
  },
  {
    image: chromavita,
    society: "Chromavita",
  },
  {
    image: anveshan,
    society: "Anveshan",
  },
];

function Gallery() {
  return (
    <div>
      <header className="text-2xl bg-slate-100 p-2 flex gap-4 justify-center items-center">
        <h1>College Society Photo Gallery</h1>
        <Camera fill="black" size={24} />
      </header>

      <div className="flex justify-center py-8">
        <Carousel
          className="w-9/12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {event.map(({ image, society }, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div>
                  <Card className="border-none shadow-sm">
                    <CardHeader className="p-3">
                      <CardTitle>Latest Posts</CardTitle>
                      <CardDescription className="text-sm font-semibold text-black">
                        Stay updated with our society activities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <Card className="border-none shadow-md">
                        <CardHeader className="p-0">
                          <img
                            src={image}
                            alt="societyimg"
                            className="rounded-t-lg h-36 object-cover object-center"
                          />
                        </CardHeader>
                        <CardContent className="px-2 py-2 text-xs font-semibold text-black">
                          <p>
                            Had a great time at the event organized by our
                            society. Looking forward to more such events
                          </p>
                          <span className="p-2 border rounded-lg border-2 border-slate-50 inline-block bg-muted mr-2">
                            Event
                          </span>
                          <span className="px-3 py-2 rounded-lg border border-2 border-slate-50 inline-block  bg-muted ">
                            Fun
                          </span>
                        </CardContent>
                        <CardFooter className="flex flex-col justify-center items-start px-3">
                          <div className="flex items-center">
                            <span className="rounded-full w-8 h-8 mr-2 bg-muted inline-block">
                              {" "}
                            </span>
                            <span className="text-black font-semibold">{society}</span>
                          </div>
                          <div className="flex items-center gap-5 mt-2 px-1">
                            <span><Camera fill="black" size={24} /></span>
                            <span><ThumbsUp fill="yellow" size={20}/></span>
                          </div>
                        </CardFooter>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
        </Carousel>
      </div>
      
      <div className="flex justify-center">
      <button className="p-3 bg-muted font-semibold rounded-lg shadow-sm">View All</button>
      </div>
    </div>
  );
}

export default Gallery;
