import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Society } from "./Welcome";
  
  const Slider_society = ({arr}:{arr:Society[]}) => {
    return (
      <div>
        <div className="flex justify-center py-6">
          <Carousel
            className="lg:w-11/12 md:w-10/12 w-4/6  border-none"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselPrevious />
            <CarouselContent>
              {arr.map(({ image }, index: number) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/6 md:basis-1/4 sm:basis-1/2"
                >
                   <img src={image} alt="society" className="h-36 object-fit object-center w-11/12"/>
                </CarouselItem>
              ))}
            </CarouselContent>
  
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default Slider_society;
  