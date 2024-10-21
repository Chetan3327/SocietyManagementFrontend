// import { Camera } from "lucide-react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// type GalleryType = {
//   SocietyID : number ,
//   GalleryID : number ,
//   Image : string
// }


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

// function Gallery() {
//   const [gallery, setgallery] = useState<GalleryType[]>([])
//   useEffect(() => {
//     const fetchsociety = async () => {
//       const res=await axios.get(`${BACKEND_URL}/admin/gallery`)
//       console.log('data', res.data)
//       setgallery(res.data)
//     }
//     fetchsociety()
//   }, [])
//   return (
//     <div>
//       <header className="text-2xl bg-slate-100 p-2 flex gap-4 justify-center items-center">
//         <h1>College Society Photo Gallery</h1>
//         <Camera fill="black" size={24} />
//       </header>

//       <div className="flex justify-center py-8">
//         <Carousel
//           className="w-9/12"
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//         >
//           <CarouselPrevious />
//           <CarouselContent>
//             {gallery.map(({ Image, SocietyID }, index: number) => (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                 <Link to={`/societygallery/${SocietyID}`}>
//                   <Card className="border-none shadow-sm">
//                     <CardHeader className="p-3">
//                       <CardTitle>Latest Posts</CardTitle>
//                       <CardDescription className="text-sm font-semibold text-black">
//                         Stay updated with our society activities
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="flex items-center justify-center">
//                       <Card className="border-none shadow-md">
//                         <CardHeader className="p-0">
//                           <img
//                             src={Image}
//                             alt="societyimg"
//                             className="rounded-t-lg h-36 object-cover object-center"
//                           />
//                         </CardHeader>
//                         <CardContent className="px-2 py-2 text-xs font-semibold text-black">
//                           <p>
//                             Relive the unforgettable moments from our recent event! From engaging activities 
//                             to inspiring sessions, our society brought together passionate individuals for 
//                             a day full of learning, collaboration, and fun. Check out the highlights and 
//                             get excited for more events like these in the future!
//                           </p>
//                           {/* <span className="p-2 border rounded-lg border-2 border-slate-50 inline-block bg-muted mr-2">
//                             Event
//                           </span>
//                           <span className="px-3 py-2 rounded-lg border border-2 border-slate-50 inline-block  bg-muted ">
//                             Fun
//                           </span> */}
//                         </CardContent>
//                         <CardFooter className="flex flex-col justify-center items-start px-3">
//                           <div className="flex items-center">
//                             <span className="rounded-full w-8 h-8 mr-2 bg-muted inline-block">
//                               {" "}
//                             </span>
//                             <span className="text-black font-semibold">
//                               {SocietyID}
//                             </span>
//                           </div>
//                           {/* <div className="flex items-center gap-5 mt-2 px-1">
//                             <span>
//                               <Camera fill="black" size={24} />
//                             </span>
//                             <span>
//                               <ThumbsUp fill="yellow" size={20} />
//                             </span>
//                           </div> */}
//                         </CardFooter>
//                       </Card>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <CarouselNext />
//         </Carousel>
//       </div>

//       {/* <div className="flex justify-center">
//         <Link
//           to="/allgallery"
//           className="p-3 bg-muted font-semibold rounded-lg shadow-sm"
//         >
//           View All
//         </Link>
//       </div> */}
//     </div>
//   );
// }

// export default Gallery;



import { Camera } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type GalleryType = {
  SocietyID: number;
  GalleryID: number;
  Image: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Gallery() {
  const [gallery, setGallery] = useState<GalleryType[]>([]);

  useEffect(() => {
    const fetchGallery = async () => {
      const res = await axios.get(`${BACKEND_URL}/admin/gallery`);
      setGallery(res.data);
    };
    fetchGallery();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {/* Header */}
      <header className="text-2xl bg-slate-100 p-4 flex gap-4 justify-center items-center rounded-md shadow-md">
        <h1 className="font-bold">College Society Photo Gallery</h1>
        <Camera fill="black" size={24} />
      </header>

      {/* Carousel */}
      <div className="flex justify-center py-10">
        <Carousel
          className="w-full md:w-9/12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {gallery.map(({ Image, SocietyID }, index: number) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 p-4">
                <Link to={`/societygallery/${SocietyID}`}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-3">
                      <CardTitle className="text-center">Latest Posts</CardTitle>
                      <CardDescription className="text-center text-sm font-semibold text-gray-700">
                        Stay updated with our society activities
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={Image}
                        alt="societyimg"
                        className="rounded-t-lg h-48 w-full object-cover"
                      />
                    </CardContent>

                    <CardContent className="p-4 text-xs font-semibold text-gray-800">
                      <p>
                        Relive the unforgettable moments from our recent event! From engaging
                        activities to inspiring sessions, our society brought together passionate
                        individuals for a day full of learning, collaboration, and fun. Check out
                        the highlights and get excited for more events like these in the future!
                      </p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center px-4 py-2">
                      <div className="flex items-center">
                        <span className="rounded-full w-8 h-8 bg-gray-300 inline-block mr-2"></span>
                        <span className="text-sm font-semibold text-black">
                          Society ID: {SocietyID}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>

      {/* View All Link
      <div className="flex justify-center">
        <Link
          to="/allgallery"
          className="px-5 py-3 bg-slate-200 font-semibold text-gray-800 rounded-md shadow-md hover:bg-slate-300 transition-colors duration-300"
        >
          View All Galleries
        </Link>
      </div> */}
    </div>
  );
}

export default Gallery;
