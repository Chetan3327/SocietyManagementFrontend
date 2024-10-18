
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Outlet, useLocation, useParams } from "react-router-dom";
// import drishti from "../assets/drishti-hero.png";
// // import latestnews from "../assets/latestnews.png";


// type Society = {
//   SocietyName: string;
//   SocietyType:string;
//   SocietyHead: string;
//   SocietyDescription: string;
//   DateOfRegistration: string;
// };

// const formatDate = (dateString: string): string => {
//   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//   const date = new Date(dateString);
//   return date.toLocaleDateString(undefined, options);
// };


// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
// const Society = () => {
//   const { id } = useParams();
//   const [society, setSociety] = useState<Society | null>(null);
//   const location = useLocation();
//   console.log(location)

//   useEffect(() => {
//     const fetchsociety = async () => {
//       const res = await axios.get(`${BACKEND_URL}/societies/${id}`)
//       console.log('data', res.data[0])
//       setSociety(res.data[0])
//     }
//     fetchsociety()
//   }, [])

//   if (!society) return <div>Loading...</div>;
//   const path = location.pathname === `/society/${id}`
//   return (
//     <div>
//       <Outlet/>
//       {path && (
//         <div>
//       <div className="w-full overflow-x-hidden flex justify-between bg-gradient-to-tr from-purple-200 to-gray-300">
//         <div className="md:ml-20 pl-5 md:pl-1 pt-10">
//           <h3 className="text-3xl text-purple-700 font-bold">
//             Welcome to {society.SocietyName}:  {society.SocietyType} Society
//           </h3>
//           <p className="text-muted-foreground">Building a Legacy Since {formatDate(society.DateOfRegistration)}</p>
//         </div>
//         <div>
//           <img src={drishti} alt="society" className="h-full" />
//         </div>
//       </div>

//       <div className="w-full px-20 flex justify-center py-10 gap-7">
//         <div className="flex justify-center gap-7 p-4 md:p-10 rounded-md border-4">
//           <div>
//             <img src='https://ipubuzz.com/wp-content/uploads/2021/03/gd-1024x576.jpg' width={600} alt="" className="transform duration-300 ease-in-out hover:scale-105"/>
//           </div>
//           <div>
//             <Card className="rounded-lg md:space-y-3 border-0">
//               <CardHeader className="text-center">
//                 <h2 className="font-bold text-2xl md:text-4xl">Who We Are</h2>
//                 <hr className="h-[4px] text-black" />
//               </CardHeader>
//               <CardContent className="md:my-10">
//                 <h1 className="text-xl font-extrabold">Guided by Excellence: {society.SocietyHead}</h1>
//                 <p>{society.SocietyDescription}</p>
//               </CardContent>
//               <CardFooter className="flex justify-center">
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </div>

      
//       </div>
//       )}
//     </div>
//   );
// };

// export default Society;


import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
// import drishti from "../assets/drishti-hero.png";

type Society = {
  SocietyName: string;
  SocietyType: string;
  SocietyHead: string;
  SocietyDescription: string;
  DateOfRegistration: string;
};

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Society = () => {
  const { id } = useParams();
  const [society, setSociety] = useState<Society | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchSociety = async () => {
      const res = await axios.get(`${BACKEND_URL}/societies/${id}`);
      setSociety(res.data[0]);
    };
    fetchSociety();
  }, [id]);

  if (!society) return <div>Loading...</div>;

  const path = location.pathname === `/society/${id}`;

  return (
    <div>
      <Outlet />
      {path && (
        <div>
          {/* Hero Section */}
          <div className="w-full overflow-x-hidden flex flex-col md:flex-row justify-between bg-gradient-to-tr from-purple-200 to-gray-300">
            <div className="md:ml-20 pl-5 md:pl-1 pt-10 md:pt-20 md:max-w-[50%] text-center">
              <h3 className="text-3xl md:text-4xl text-purple-700 font-bold">
                Welcome to {society.SocietyName}: {society.SocietyType} Society
              </h3>
              <p className="text-gray-600 mt-2">
                Building a Legacy Since {formatDate(society.DateOfRegistration)}
              </p>
            </div>
            {/* <div className="mt-5 md:mt-0">
              <img
                src={drishti}
                alt="society"
                className="md:h-80 h-60 w-full md:w-80 object-cover"
              />
            </div> */}
          </div>

          {/* Who We Are Section */}
          <div className="w-full px-5 md:px-20 flex justify-center py-10 gap-7">
            <div className="flex flex-col md:flex-row justify-center gap-7 p-4 md:p-10 rounded-md border-4">
              {/* Society Image */}
              <div className="flex-shrink-0 w-full md:w-[400px]">
                <img
                  src="https://ipubuzz.com/wp-content/uploads/2021/03/gd-1024x576.jpg"
                  width={400}
                  height={300}
                  className="object-cover h-64 md:h-80 rounded-lg transform duration-300 ease-in-out hover:scale-105"
                  alt="society activity"
                />
              </div>

              {/* Society Details Card */}
              <div className="flex-grow">
                <Card className="rounded-lg border-0">
                  <CardHeader className="text-center">
                    <h2 className="font-bold text-2xl md:text-4xl">Who We Are</h2>
                    <hr className="h-[4px] bg-black mt-2" />
                  </CardHeader>
                  <CardContent className="md:my-10 text-center md:text-left">
                    <h1 className="text-xl font-extrabold">
                      Guided by Excellence: {society.SocietyHead}
                    </h1>
                    <p className="mt-3 text-gray-600">
                      {society.SocietyDescription}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center md:justify-start"></CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Society;
