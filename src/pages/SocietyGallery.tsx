import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const SocietyGallery = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState([])
  const [SocietyName , setSocietyName]  = useState('')
  useEffect(() => {
    const fetchsociety = async () => {
      let res;
      if(id){
         res = await axios.get(`${BACKEND_URL}/societies/${id}`)
      }else{
         res = await axios.get(`${BACKEND_URL}/admin/gallery`)
      }
     
      console.log('data', res.data[0])
      setGallery(res.data[0].Galleries)
      setSocietyName(res.data[0].SocietyName)
    }
    fetchsociety()
  }, [])

  if (!gallery) return <div>Loading...</div>;
  return (
    <>
      <h1 className="text-center text-2xl bg-violet-100 p-3">{SocietyName}</h1>
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
            {gallery.map(({ SocietyID, GalleryID, Image }, index: number) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5">
                <Link to={`/gallery/${SocietyID}/${GalleryID}`}>
                  <img src={Image} alt="bpit" className="object-fit h-40" />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default SocietyGallery;
