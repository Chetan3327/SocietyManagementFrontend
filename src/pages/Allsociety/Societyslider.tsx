import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {  SocietyIntro } from "./Allsocities";
import { Link } from "react-router-dom";


function Societyslider({title,arr}:{title:string,arr:SocietyIntro[]}) {
  return (
    <div>
      <h1 className="text-3xl text-black font-semibold px-6 mx-6 pt-10">{title}</h1>
      <div className="flex justify-center py-6">
        <Carousel
          className="lg:w-11/12 md:w-10/12 w-4/6 border-none"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {arr.map(({ image, society, SocietyID }, index: number) => (
              <CarouselItem key={index} className="lg:basis-1/6 md:basis-1/4 sm:basis-1/2 ">
              {/* <Link to={`/society/${society}`} > */}
              <Link to={`/society/${SocietyID}`}>
              <Card className="border-none shadow-sm bg-sky-50">
                  <CardContent className="p-0">
                    <img
                      src={image}
                      alt="societyimg"
                      className="rounded-xl w-full h-36 transform duration-300 ease-in-out hover:scale-105"
                    />
                  </CardContent>
                  <CardTitle className="text-center rounded-lg py-1 bg-muted my-2 border-2 border-black">
                    {society}
                  </CardTitle>
                </Card>
              </Link>
              
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Societyslider