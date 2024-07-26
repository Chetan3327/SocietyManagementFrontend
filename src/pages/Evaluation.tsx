// src/components/TabComponentStudent.tsx

import React, { useState, ChangeEvent } from "react";
import "./Tab_Component_student.css";
import EvaluationCard from "@/components/Page-Components/EvaluationCard";
import Testimonials from "./Testimonials";
import TestimonialCard from "@/components/Page-Components/Testimonials";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
}

interface Award {
  title: string;
  details: string;
}

interface Certificate {
  title: string;
  details: string;
}

interface Project {
  title: string;
  description: string;
  deployedLink: string;
  githubLink: string;
}

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

  const [activeTab, setActiveTab] = useState<
    "personal" | "Work Experience" | "achievements" | "projects"
  >("personal");

  const [fullName, setFullName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [currentAddress, setCurrentAddress] = useState<string>("");
  const [linkedIn, setLinkedIn] = useState<string>("");
  const [github, setGithub] = useState<string>("");

  return (
    <div className="tab-container flex flex-col">
      <div className="content-wrapper w-10/12 mx-auto">
        <div className="content-container w-full">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
            alt="John Doe"
          />

          <div className="content mt-8">
            <div className="form-group">
              <label>First Name</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border  border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={fullName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={fullName}
              />
            </div>
            <div className="form-group">
              <label>Enrollment Number</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={gender}
              />
            </div>
            <div className="form-group">
              <label>User id</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={gender}
              />
            </div>
            <div className="form-group">
              <label>Batch Year</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={gender}
              />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={contact}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="email"
                placeholder="Loading ..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Society Position</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={currentAddress}
              />
            </div>
            <div className="form-group">
              <label>DomainExpertise</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>GitHub</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={github}
              />
            </div>
            <div className="form-group">
              <label>Linkedin Profile</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={github}
              />
            </div>
            <div className="form-group">
              <label>Twitter Profile</label>
              <input
                disabled
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 placeholder-gray-400"
                type="text"
                placeholder="Loading ..."
                value={github}
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
