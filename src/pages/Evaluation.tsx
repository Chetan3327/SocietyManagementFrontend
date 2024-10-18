// // src/components/TabComponentStudent.tsx

// import React, { useState , useEffect } from "react";
// import "./Tab_Component_student.css";
// import { useLocation , useParams } from "react-router-dom";
// import EvaluationCard from "@/components/Page-Components/EvaluationCard";
// import axios from "axios";
// // import Testimonials from "./Testimonials";
// // import TestimonialCard from "@/components/Page-Components/Testimonials";

// // interface WorkExperience {
// //   title: string;
// //   company: string;
// //   location: string;
// //   duration: string;
// // }

// // interface Award {
// //   title: string;
// //   details: string;
// // }

// // interface Certificate {
// //   title: string;
// //   details: string;
// // }

// // interface Project {
// //   title: string;
// //   description: string;
// //   deployedLink: string;
// //   githubLink: string;
// // }
// export type Data = {
//   EnrollmentNo : number,
//   SocietyID: number,
//   AchievementID: number
//   Title: string,
//   Description: string,
//   DateAchieved: string
// };

// // const achievements: Data[] = [
// //   {
// //     heading: "Project Leadership: AI Chatbot Development",
// //     date: "January 2022",
// //     points: [
// //       "Led a team to develop a chatbot for campus information dissemination, resulting in a 20% increase in user engagement.",
// //       "Led multiple projects in the AI society and aims to pursue a career in research.",
// //     ],
// //   },
// // ];

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const TabComponentStudent: React.FC = () => {

//   // const [activeTab, setActiveTab] = useState<
//   //   "personal" | "Work Experience" | "achievements" | "projects"
//   // >("personal");

//   //const [fullName, setFullName] = useState<string>("");
//  // const [dob, setDob] = useState<string>("");
//  // const [gender, setGender] = useState<string>("");
//   // const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
//   // const [batch, setBatch] = useState<string>("");
//   // const [branch, setBranch] = useState<string>("");
//   // const [contact, setContact] = useState<string>("");
//   // const [email, setEmail] = useState<string>("");
//   // const [societyPosition, setSocietyPosition] = useState<string>("");
//   // const [linkedIn, setLinkedIn] = useState<string>("");
//   // const [github, setGithub] = useState<string>("");
//   // const [twitter, setTwitter] = useState<string>("");

//   const [achievement,setAchievement] = useState([])

//   const location = useLocation()

//   let {enrollmentNo } = useParams()
//   const EnrollmentNo: number | null = enrollmentNo ? parseInt(enrollmentNo, 10) : null;
 
//   if (EnrollmentNo === null) {
//     return (
//       <div className="text-2xl font-semibold m-4">Invalid enrollment number </div>
//     )
//   }

//   const {member} = location.state || {}
//   console.log('in member',member)

//   useEffect(() => {
//     const fetchAchievement = async () => {
//       let res;
//       if (EnrollmentNo) {
//         res = await axios.get(`${BACKEND_URL}/studentachievements/${enrollmentNo}`);
//       } else {
//         res = await axios.get(`${BACKEND_URL}/studentachievements`);
//       }
//       setAchievement(res.data);
//     };

//     fetchAchievement();
//   }, [EnrollmentNo]);

//   if (achievement.length <= 0) {
//     return <div className="text-3xl font-bold">Loading data...</div>;
//   }

  
//   return (
//     <div className="tab-container flex flex-col text-black">
//       <div className="content-wrapper w-10/12 mx-auto">
//         <div className="content-container w-full">
//           <img
//             className="w-32 h-32 rounded-full mx-auto"
//             src={member.ProfilePicture}
//             alt="profile picture"
//           />

//           <div className="content mt-8">
//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border  border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter first name"
//                 value={member.FirstName} 
//                 //onChange={(e)=>{setFullName(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 readOnly
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text"
//                 placeholder="Enter last name"
//                 value={member.LastName} 
//                   // onChange={(e)=>{setFullName(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Enrollment Number</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter Enrollment Number"
//                 value={EnrollmentNo}   
//                 //onChange={(e)=>{setEnrollmentNumber(e.target.value)}}
//               />
//             </div>
//             {/* <div className="form-group">
//               <label>User id</label>
//               <input
//                 disabled
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text"
//                 placeholder="Loading ..."
//                 value={gender}
//               />
//             </div> */}
//             <div className="form-group">
//               <label>Batch Year</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter Batch Year"
//                 value={member.BatchYear}  
//                 //onChange={(e)=>{setBatch(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Branch</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter Branch Year"
//                 value={member.Branch}  
//                 //onChange={(e)=>{setBranch(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Contact</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter contact"
//                 value={member.MobileNo}  
//                 //  onChange={(e)=>{setContact(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="email" readOnly
//                 placeholder="Enter Email"
//                 value={member.Email}  
//                 //onChange={(e)=>{setEmail(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Society Position</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter Your Society Position"
//                 value={member.SocietyPosition}  
//                 // onChange={(e)=>{setSocietyPosition(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Linkedin</label>
//               <input

//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter linkedin profile"
//                 value={member.LinkedInProfile}
//                // onChange={(e) => setLinkedIn(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label>GitHub</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text" readOnly
//                 placeholder="Enter github profile"
//                 value={member.GithubProfile} 
//                 //onChange={(e)=>{setGithub(e.target.value)}}
//               />
//             </div>
//             <div className="form-group">
//               <label>Twitter Profile</label>
//               <input
//                 className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
//                 type="text"
//                 placeholder="Enter twitter profile"
//                 value={member.TwitterProfile}  
//                 //onChange={(e)=>{setTwitter(e.target.value)}}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full flex justify-center flex-col">
//         <EvaluationCard arr={achievement} head={"Achievements"} />
//         <EvaluationCard arr={member.StudentContributions} head={"Contributions"} />
//       </div>
//     </div>
//   );
// };

// export default TabComponentStudent;


import React, { useState, useEffect } from "react";
import "./Tab_Component_student.css";
import { useLocation, useParams } from "react-router-dom";
import EvaluationCard from "@/components/Page-Components/EvaluationCard";
import axios from "axios";

export type Data = {
  EnrollmentNo: number;
  SocietyID: number;
  AchievementID: number;
  Title: string;
  Description: string;
  DateAchieved: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const TabComponentStudent: React.FC = () => {
  const [achievement, setAchievement] = useState<Data[]>([]);
  const location = useLocation();
  const { enrollmentNo } = useParams();

  const EnrollmentNo: number | null = enrollmentNo ? parseInt(enrollmentNo, 10) : null;

  if (EnrollmentNo === null) {
    return <div className="text-2xl font-semibold m-4">Invalid enrollment number</div>;
  }

  const { member } = location.state || {};

  useEffect(() => {
    const fetchAchievement = async () => {
      let res;
      if (EnrollmentNo) {
        res = await axios.get(`${BACKEND_URL}/studentachievements/${enrollmentNo}`);
      } else {
        res = await axios.get(`${BACKEND_URL}/studentachievements`);
      }
      setAchievement(res.data);
    };

    fetchAchievement();
  }, [EnrollmentNo]);

  if (achievement.length <= 0) {
    return <div className="text-3xl font-bold">Loading data...</div>;
  }

  return (
    <div className="tab-container flex flex-col text-black w-full px-4 md:px-0">
      <div className="content-wrapper w-full max-w-4xl mx-auto">
        <div className="content-container w-full">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={member.ProfilePicture}
            alt="profile picture"
          />

          <div className="content mt-8">
            {["First Name", "Last Name", "Enrollment Number", "Batch Year", "Branch", "Contact", "Email", "Society Position", "LinkedIn", "GitHub", "Twitter Profile"].map((label, index) => (
              <div className="form-group" key={index}>
                <label>{label}</label>
                <input
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                  type={label === "Email" ? "email" : "text"}
                  readOnly
                  placeholder={`Enter ${label.toLowerCase()}`}
                  value={member[label.replace(" ", "")]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <EvaluationCard arr={achievement} head={"Achievements"} />
        <EvaluationCard arr={member.StudentContributions} head={"Contributions"} />
      </div>
    </div>
  );
};

export default TabComponentStudent;
