// src/components/TabComponentStudent.tsx

import React, { useState } from "react";
import "./Tab_Component_student.css";
import EvaluationCard from "@/components/Page-Components/EvaluationCard";
// import Testimonials from "./Testimonials";
// import TestimonialCard from "@/components/Page-Components/Testimonials";

// interface WorkExperience {
//   title: string;
//   company: string;
//   location: string;
//   duration: string;
// }

// interface Award {
//   title: string;
//   details: string;
// }

// interface Certificate {
//   title: string;
//   details: string;
// }

// interface Project {
//   title: string;
//   description: string;
//   deployedLink: string;
//   githubLink: string;
// }

const TabComponentStudent: React.FC = () => {
  type Data = {
    heading: string;
    date: string;
    points: string[];
  };

  const achievements: Data[] = [
    {
      heading: "Project Leadership: AI Chatbot Development",
      date: "January 2022",
      points: [
        "Led a team to develop a chatbot for campus information dissemination, resulting in a 20% increase in user engagement.",
        "Led multiple projects in the AI society and aims to pursue a career in research.",
      ],
    },
    // You can add more achievement entries if needed
  ];

  // const [activeTab, setActiveTab] = useState<
  //   "personal" | "Work Experience" | "achievements" | "projects"
  // >("personal");

  const [fullName, setFullName] = useState<string>("");
 // const [dob, setDob] = useState<string>("");
 // const [gender, setGender] = useState<string>("");
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [societyPosition, setSocietyPosition] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");
  const [github, setGithub] = useState<string>("");
  const [twitter, setTwitter] = useState<string>("");

  return (
    <div className="tab-container flex flex-col text-black">
      <div className="content-wrapper w-10/12 mx-auto">
        <div className="content-container w-full">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
            alt="John Doe"
          />

          <div className="content mt-8">
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="w-full p-2 bg-gray-100 border  border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter full name"
                value={fullName} onChange={(e)=>{setFullName(e.target.value)}}
              />
            </div>
            {/* <div className="form-group">
              <label>Last Name</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={fullName}  onChange={(e)=>{setFullName(e.target.value)}}
              />
            </div> */}
            <div className="form-group">
              <label>Enrollment Number</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter Enrollment Number"
                value={enrollmentNumber}   onChange={(e)=>{setEnrollmentNumber(e.target.value)}}
              />
            </div>
            {/* <div className="form-group">
              <label>User id</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={gender}
              />
            </div> */}
            <div className="form-group">
              <label>Batch Year</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter Batch Year"
                value={batch}  onChange={(e)=>{setBatch(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter Branch Year"
                value={branch}  onChange={(e)=>{setBranch(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter contact"
                value={contact}  onChange={(e)=>{setContact(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="email"
                placeholder="Enter Email"
                value={email}  onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Society Position</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter Your Society Position"
                value={societyPosition}  onChange={(e)=>{setSocietyPosition(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Linkedin</label>
              <input

                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter linkedin profile"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>GitHub</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter github profile"
                value={github} onChange={(e)=>{setGithub(e.target.value)}}
              />
            </div>
            <div className="form-group">
              <label>Twitter Profile</label>
              <input
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Enter twitter profile"
                value={twitter} onChange={(e)=>{setTwitter(e.target.value)}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col">
        <EvaluationCard arr={achievements} head={"Achievements"} />
        <EvaluationCard arr={achievements} head={"Contributions"} />
      </div>
    </div>
  );
};

export default TabComponentStudent;
