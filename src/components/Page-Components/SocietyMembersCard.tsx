import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import github from "../../assets/github.jpg";
import linkedin from "../../assets/linkedin.jpg";
import twitter from "../../assets/twitter.jpg";

type CoreTeamProp = {
  name: string;
  position: string;
  domain: string;
  github: string;
  linkedin: string;
  x: string;
  email: string;
  about: string;
  image: string;
};

type MemberProp = {
  name: string;
  image: string;
  linkedin: string;
  x: string;
  email: string;
  batch: string;
  enrollmentNumber: string;
  branch: string;
  skills: string;
};

const CoreTeamCard = ({ props }: { props: CoreTeamProp }) => {
  return (
    <Card className="bg-white rounded h-90 overflow-y-auto text-gray-800">
      <CardContent>
        <div className="flex mt-6">
          <div>
            <img src={props.image} alt="student image" className="rounded h-20" />
          </div>
          <div className="ml-10">
            <div className="flex flex-col">
              <div className="flex space-x-4">
                <Link to={props.github}>
                  <img className="rounded-full w-10" src={github} alt="github" />
                </Link>
                <Link to={props.linkedin}>
                  <img className="rounded-full w-10" src={linkedin} alt="linkedin" />
                </Link>
                <Link to={props.x}>
                  <img className="rounded-full w-10" src={twitter} alt="twitter" />
                </Link>
              </div>
              <div className="mt-2">
                <h4 className="text-gray-600 underline">Domain Of Expertise</h4>
                <h3>{props.domain}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2>{props.name}</h2>
          <h3 className="text-gray-600">{props.position}</h3>
          <a href={`mailto:${props.email}`} className="text-sm">
            <div className="flex my-2">
              <div>
                <Mail />
              </div>
              <div>{props.email}</div>
            </div>
          </a>
        </div>

        <hr style={{ height: 2, backgroundColor: "black" }} />
        <p className="mt-2">{props.about.substring(0, 100)}</p>
      </CardContent>
    </Card>
  );
};

const MemberCard = ({ props }: { props: MemberProp }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:mr-4">
        <img className="h-20 lg:h-32" src={props.image} alt="member image" />
      </div>
      <div>
        <h3 className="font-bold text-lg lg:text-xl text-center">{props.name}</h3>
        <Link to={props.linkedin}>
          <div className="flex justify-center space-x-4 mt-2">
            <img className="rounded-full w-8 h-8" src={linkedin} alt="linkedin" />
            <p className="text-gray-600 mt-2 hidden lg:block">Connect on LinkedIn</p>
          </div>
        </Link>
        <Link to={props.x}>
          <div className="flex justify-center space-x-4 mt-2 mb-4">
            <img className="rounded-full w-8 h-8" src={twitter} alt="twitter" />
            <p className="text-gray-600 mt-2 hidden lg:block">Connect on Twitter</p>
          </div>
        </Link>
        <a
          href={`mailto:${props.email}`}
          className="hidden lg:block bg-blue-500 text-white lg:px-6 lg:py-2 rounded-full w-full text-center"
        >
          Email me
        </a>
        <div className="flex justify-center lg:hidden">
          <a href={`mailto:${props.email}`}>
            <Mail className="rounded-full w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { CoreTeamCard, MemberCard };
