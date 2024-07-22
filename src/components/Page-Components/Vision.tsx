import about_us from '../../assets/about_us_bg.jpg';
import { Card, CardContent } from "../ui/card";

interface Vision {
  heading: string;
  content: string;
  image: string;
}

const visions: Vision[] = [
  {
    heading: "Vision",
    content: "Our vision is to create a seamlessly interconnected campus ecosystem where every college society thrives through efficient management and active student participation. We aspire to be the leading platform that transforms how societies operate, fostering a culture of collaboration, innovation, and community engagement, ultimately enriching the college experience for all students.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJA60r489vGpDKYhbeHjigG_a-pu1e7020A&s"
  },
  {
    heading: "Mission",
    content: "Our mission is to revolutionize college society management by providing an intuitive, comprehensive platform that enhances organizational efficiency, fosters student engagement, and promotes vibrant campus communities. We aim to empower society leaders with the tools they need to streamline operations and connect students with opportunities that inspire collaboration and growth.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJA60r489vGpDKYhbeHjigG_a-pu1e7020A&s"
  }
];


const Vision = () => {
    return (
      <>
      <div className="relative mt-0 mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-black text-center text-4xl text-bold">DREAM, BELIEVE, ACHIEVE: OUR VISION AND MISSION </h2>
                    <p className="text-white text-center my-5 text-xl">Empowering connections, fostering growth <br /> our vision drives tomorrow's leaders. Our mission fuels today's innovation.</p>
                </div>
        </div>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className=" absolute inset-0 bg-no-repeat bg-cover bg-center blur-sm"
            style={{ backgroundImage: `url(${about_us})` }}
          >
        </div>

        <div className="relative z-10 mx-6 lg:mx-0">
           <div className="p-4 bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg max-w-5xl mx-auto mt-8 ">
            {/* <Button className='absolute right-5' variant='outline'>Learn More</Button> */}
            <h2 className="text-4xl font-semibold text-center mb-5 mt-4">Our Vision and Mission</h2>
            <div className="text-gray-800 space-y-3">
              {visions.map(({heading, content, image}) => {
                return (
                  <Card>
                    <CardContent className='flex gap-15 items-center'>
                      <div>
                        <img src={image} width={500} />
                      </div>
                      <div className='text-left'>
                        <h3 className='text-2xl font-bold'>{heading}</h3>
                        <p>{content}</p>
                      </div>
                    </CardContent>                    
                  </Card>
                )
              })}
            </div>
        </div>
      </div>
   </div>
  </>
    )
}

export default Vision