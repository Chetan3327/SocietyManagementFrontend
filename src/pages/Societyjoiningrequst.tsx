import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
type Student = {
  name: string;
  enrollment: string;
  batch: string;
  year: string;
  branch: string;
  reason: string;
};
const student: Student[] = [
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!",
  },
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!",
  },
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!",
  },
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!",
  },
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!s",
  },
  {
    name: "John Doe",
    enrollment: "01220802722",
    batch: "2022-2026",
    year: "3",
    branch: "CSE",
    reason:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolore, quo animi ducimus dolorem odit! Alias error iure odio cupiditate!",
  },
];
import aboutus from "../assets/about_us_bg.jpg";

const Societyjoiningrequst = () => {
  return (
    <div>
      <div className="relative w-full mx-auto">
        <img className="h-64 w-full blur-sm" src={aboutus} alt=" img" />
        <div className="absolute inset-0  opacity-100">
          <div className="absolute inset-0 flex items-center flex-col justify-center ml-15">
            <h2 className="text-white font-bold text-4xl">
              "Your Society, Your Rules"
            </h2>
            <h6 className="text-white font-bold text-md">
              Handle All Joining Requests Right Here!
            </h6>
          </div>
        </div>
      </div>
      <section className="w-full justify-center items-center flex-col flex mt-6">
        <div className="w-full flex justify-center my-4 flex-wrap">
          {student.map(({ name, enrollment, batch, year, branch, reason }) => {
            return (
              <Card className="w-1/3 flex justify-start flex-col items-start rounded-lg border-none shadow-xl shadow-gray-100 p-3 cursor-pointer h-fit bg-gray-50 my-5 mx-2">
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>{enrollment}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p>
                      <span className="font-bold px-3">Year:</span>
                      {year}
                    </p>
                    <p>
                      <span className="font-bold px-3">Batch:</span>
                      {batch}
                    </p>
                    <p>
                      <span className="font-bold px-3">Branch:</span>
                      {branch}
                    </p>

                    <details>
                      <summary className="font-bold">
                        Why you want to join society?
                      </summary>
                      <p className="text-sm">{reason}</p>
                    </details>
                  </div>
                </CardContent>
                <CardFooter className="self-center">
                  <button
                    className="bg-black hover:bg-gray-700 text-white font-bold p-2 rounded-lg"
                    onClick={(e) => e.preventDefault()}
                  >
                    View More
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Societyjoiningrequst;
