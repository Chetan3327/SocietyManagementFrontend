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
import bpit from "../assets/bpit.jpeg";
import bpit1 from "../assets/bpit1.jpeg";
import bpit2 from "../assets/bpit2.jpeg";
import bpit3 from "../assets/bpit3.jpeg";
import bpit4 from "../assets/bpit4.jpeg";
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
const galleryItems: any = [
  {
    id: 1,
    src: "https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg",
    alt: "Image 4",
  },
  // Add more items as needed
];
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const SocietyGallery = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null)
  useEffect(() => {
    const fetchsociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/galleries/${id}`)
      console.log('data', res.data)
      setGallery(res.data)
    }
    fetchsociety()
  }, [])

  if (!gallery) return <div>Loading...</div>;
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
