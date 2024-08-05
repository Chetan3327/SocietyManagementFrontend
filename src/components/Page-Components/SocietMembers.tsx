import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoreTeamCard, MemberCard } from "./SocietyMembersCard";

type MemberType = {
  BatchYear: number;
  Branch: string;
  DomainExpertise: string;
  Email: string;
  EnrollmentNo: number;
  FirstName: string;
  GithubProfile: string;
  LastName: string;
  LinkedInProfile: string;
  MobileNo: string;
  ProfilePicture: string;
  SocietyID: number;
  SocietyPosition: string;
  StudentAchievements: string | null;
  StudentContributions: string;
  StudentMarking: string | null;
  Testimonials: string | null;
  TwitterProfile: string;
  MemberType: string;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const SocietyMembers = () => {
  const { id } = useParams<{ id: string }>();
  const [members, setMembers] = useState<MemberType[]>([]);
  const [seniorCouncil, setSeniorCouncil] = useState<MemberType[]>([]);
  const [juniorCouncil, setJuniorCouncil] = useState<MemberType[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/societies/members/${id}`);
        const fetchedMembers: MemberType[] = res.data;
        setMembers(fetchedMembers);
        setSeniorCouncil(fetchedMembers.filter(member => member.MemberType === "Senior Council"));
        setJuniorCouncil(fetchedMembers.filter(member => member.MemberType === "Junior Council"));
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchMembers();
  }, [id]);

  if (!members.length) return <div>Loading...</div>;

  return (
    <>
      <div className="relative mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-black text-center text-4xl font-extrabold">
            MEMBER SPOTLIGHTS
          </h2>
          <p className="text-white text-center text-xl font-extrabold">
            DETAILED INSIGHTS INTO LEARN ABOUT THE TALENTED INDIVIDUALS WHO
            DRIVE OUR MISSION FORWARD, PARTICIPATION AND ACHIEVEMENTS
          </p>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-300 mx-6 md:mx-20 mt-20 rounded">
        <h1 className="text-white text-5xl font-bold mb-4">
          Get to know our team
        </h1>
        <p className="text-white">
          Learn about the talented Individuals who drive our mission forward
        </p>

        <div>
          <div className="flex w-full">
            <span className="text-white text-3xl font-bold pb-4 mr-2 mt-4">
              Senior council
            </span>
            <div className="mt-8 flex-grow border-t border-white"></div>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselPrevious />
            <CarouselContent>
              {seniorCouncil.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <CoreTeamCard
                    props={{
                      name: `${member.FirstName} ${member.LastName}`,
                      position: member.SocietyPosition,
                      domain: member.DomainExpertise,
                      github: member.GithubProfile,
                      linkedin: member.LinkedInProfile,
                      x: member.TwitterProfile,
                      email: member.Email,
                      about: member.StudentContributions,
                      image: member.ProfilePicture,
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-10">
          <div className="flex w-full">
            <span className="text-white text-3xl font-bold pb-4 mr-2 mt-4">
              Junior council
            </span>
            <div className="mt-8 flex-grow border-t border-white"></div>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselPrevious />
            <CarouselContent>
              {juniorCouncil.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <MemberCard
                    props={{
                      name: `${member.FirstName} ${member.LastName}`,
                      image: member.ProfilePicture,
                      linkedin: member.LinkedInProfile,
                      x: member.TwitterProfile,
                      email: member.Email,
                      batch: member.BatchYear.toString(),
                      enrollmentNumber: member.EnrollmentNo.toString(),
                      branch: member.Branch,
                      skills: member.DomainExpertise,
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default SocietyMembers;