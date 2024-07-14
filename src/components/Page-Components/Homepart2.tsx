import { Card, CardContent, CardTitle } from "../ui/card";
import bpit from "../../assets/bpit.jpeg";
import { ArrowRight } from "lucide-react";
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
export const Homepart2 = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-3/6 text-center py-2 bg-gray-100 mb-2 rounded-lg font-bold text-xl">
          Achievements
        </div>
        <Card className="w-8/12 mt-5 shadow-2xl shadow-gray-300 border border-t-gray-300 border-l-gray-300 border-t-4 border-l-4 py-3 px-6 h-fit">
          <CardContent>
            <h1 className="font-bold mb-4">
              Unvelling The Triumphs of Our{" "}
              <span className="text-red-600">Talented And Creative Minds</span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias nesciunt, tenetur deleniti exercitationem atque saepe
              aut corporis eum repellat, quidem aliquam sint dolorem nemo
              dignissimos commodi earum modi! Esse corporis dolore sunt amet
              eius neque non provident aut tempora fuga beatae itaque eligendi
              ipsam similique iure, hic numquam? Sed veniam illum unde et amet
              pariatur sequi illo, atque eligendi. Laborum doloribus adipisci
              vel dignissimos et laboriosam repellat architecto! Harum rerum
              expedita iusto dolor doloremque tenetur quidem cupiditate facere
              inventore, neque soluta adipisci aspernatur illo laudantium
              doloribus maxime? At distinctio ab id dignissimos dolorum, non,
              assumenda perspiciatis, mollitia consequuntur rem eos!
            </p>

            <div className="border border-2 border-black shadow-2xl shadow-gray-200  rounded-lg relative mt-5 h-fit hidden md:block">
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
                      <h1 className="text-white font-bold lg:text-lg text-xs ">
                        <span className="font-extrabold lg:text-2xl text-xs">1st</span>{" "}
                        Prize in XXX Hackathon organized at BVCOE
                      </h1>
                    </div>
                    <div className="flex gap-1 lg:gap-5 p-1 md:p-5 lg:p-9 border border-gray-100 h-1/2  border-t-none border-l-none">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2UuRDGIGLIO544W9Fdef4mg3Gmk2LDA2Tg&s"
                        alt="hackathon"
                        className="w-2/4 rounded-lg"
                      />
                      <h1 className="text-white font-bold  lg:text-lg text-xs">
                        <span className="font-extrabold lg:text-2xl text-xs">2nd</span>{" "}
                        Prize in XXX Hackathon organized at BVCOE
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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Earum saepe ipsam magni iure quisquam deleniti neque na
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod ipsum facilis cupiditate. Facere, sed error. Qui
                      voluptatem expedita quae modi! 
                    </p>
                    <button className="bg-muted px-1 w-fit font-bold mt-5 rounded-lg">
                      <ArrowRight className="inline-block text-muted-goreground text-sm" />
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full bg-muted  flex flex-col justify-center items-center mt-12  ">
        <div className=" bottom-full lg:botton-96 left-1/4 bg-blue-800 text-white px-5 rounded-full text-xl relative py-2">
        <h1 >namespace(Formely NSCC)</h1>
          
        </div>
        <div className="text-black text-2xl self-start relative left-12 md:left-44">
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

                        <p className="text-black">{desc}.</p>
                        <div className="flex flex-col md:flex-row gap-4 md;gap-0 justify-between mt-3">
                          <div>
                            <h1>{name}</h1>
                            <h1>{batch}</h1>
                          </div>
                          <button className="w-36 text-center bg-gray-200 text-black">View More</button>
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
        <Card className="w-9/12 shadow-2xl shadow-gray-300 border border-gray-300  border-4">
          <CardTitle className="text-center py-5">
          <h1>You can also search for</h1>
          </CardTitle>
          <CardContent className="flex gap-5 justify-center flex-wrap">
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Events</button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Core Members</button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Contact Us</button>
            <button className="px-5 py-1 rounded-full bg-blue-800 text-white">Gallery</button>


          </CardContent>
           

</Card>
      </div>
    </div>
  );
};
