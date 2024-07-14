import { Link } from "react-router-dom"
import news_img from '../assets/news_bg.jpg'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


const Home = () => {
  return (
    <>
      <div className="relative w-full mx-auto">
        <img
          className="h-screen md:h-80 w-full"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="BPIT img"
        />
        <div className="absolute inset-0 py-10 bg-black opacity-80 px-10 lg:px-16">
          <div className="flex flex-col  md:flex-row md:justify-around">
            <div>
              <h2 className="font-bold text-4xl lg:text-5xl text-white ">Welcome To The</h2>
              <h2 className="font-bold text-4xl lg:text-5xl text-red-500 mx-auto">Society Management</h2>
              <h2 className="font-bold text-4xl lg:text-5xl text-white mb-4 mx-auto">Portal</h2>
              <p className="text-zinc-300 text-lg lg:text-xl  mx-auto ">A unified platform for <span className="font-bold">Managing Socities</span></p>
              <p className="text-zinc-300 text-lg lg:text-xl  mx-auto ">tracking contributions and fostering growth</p>
            </div>
            <div className="mt-14 flex flex-col ">
              <Link to='/societies' className="bg-yellow-600 text-white text-xl rounded-full px-4 py-1 lg:ml-8 text-center">View Existing Socities</Link>
              <Link to='/' className="bg-yellow-600 text-white text-xl rounded-full px-4 py-1 mt-4 lg:ml-8 text-center">View Upcoming Events</Link>
            </div>
          </div>
        </div>
      </div>
   

      <div className="container py-20 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div >
            <img
              className="rounded-lg lg:h-auto  lg:max-w-xl "
              src={news_img}
              alt='News'
            />
          </div>
          <div className="">
            <div className="text-center bg-gray-500 py-2">
              <h2 className="text-bold text-3xl ">News And Announcements</h2>
              <p className="text-lg">Stay Informed and Engaged</p>
            </div>
            <p className="mt-14 text-xl">Welcome to our news and announcements section. Here you'll  find the latest updates , important notices and information about
              upcoming events . Stay connectedand make the most of your society experience.
            </p>
            <Link to='/news'>
              <Button className="mt-16 text-lg"><ArrowRight /> Explore More</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container pb-6 mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="text-center bg-gray-500 py-2">
              <h2 className="text-bold text-3xl ">Faculty Coordinators</h2>
              <p className="text-lg">Our dedicated faculty coordinators</p>
            </div>
            <p className="mt-14 text-xl">Meet our committed faculty coordinators who are dedicated to guide and support our socities.
              They play a crucial role in fostering a collaborative and enriching environment.
            </p>
            <Link to='/coordinators'>
              <Button className="mt-16 text-lg"><ArrowRight /> Explore More</Button>
            </Link>
          </div>
          <div className="lg:ml-16 order-1 lg:order-2">
            {/* dummy image used */}
            <img
              className="rounded-lg h-auto lg:max-w-xl"
              src={news_img}
              alt='News'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
