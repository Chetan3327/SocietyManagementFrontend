import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import EvaluationCard from "@/components/Page-Components/EvaluationCard";

const society:string[]=["Namespace","Anveshan","drishti","GDSC","IEEE","#Define","WIE","Octave","Mavericks"]
export type Data={
  heading:string,
  date:string,
  points:string[]
}
const achievement:Data[]=[
  {
    heading:"Project Leadership: AI Chatbot Development",
    date:"january-2022",
    points:["Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement","Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement. He has ld multiple projects in the AI society and Aim to pusue a crrer in research"]
  },
  {
    heading:"Project Leadership: AI Chatbot Development",
    date:"january-2022",
    points:["Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement","Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement. He has ld multiple projects in the AI society and Aim to pusue a crrer in research"]
  },
  {
    heading:"Project Leadership: AI Chatbot Development",
    date:"january-2022",
    points:["Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement","Led a team to develop a chatbot for campus infomaton dissemination, resulting in a 20% increase in user engagement. He has ld multiple projects in the AI society and Aim to pusue a crrer in research"]
  },
]
const Evaluation = () => {
  return (
    <div>
     
      <div className="relative w-full mx-auto">
        <img
          className="h-64 w-full blur-sm "
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="BPIT img"
        />
        <div className="absolute inset-0  opacity-100">
          <div className="absolute inset-0 flex items-center flex-col justify-center ml-15">
            <h2 className="text-white font-bold text-4xl">
              SOCIETY MEMBER EVALUATION PORTAL
            </h2>
            <h6 className="text-white font-bold text-md">
              DETAILED INSIHTS INTO STUDENT PARTICIPATION AND ACHIEVEMENTS
            </h6>
          </div>
        </div>
      </div>


     <section className="flex justify-center items-center w-full ">
      <Card className=" border-none flex flex-col md:flex-row justify-center items-center gap-10 mt-5 mb-3 w-10/12 md:w-8/12 lg:w-10/12 ">
        <Card className="rounded-3xl w-fit shadow-md shadow-slate-100 p-0 shadow-lg shadow-slate-100  ">
          <CardHeader className=" p-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="profile"
              className="h-36 w-full rounded-t-3xl bg-blue-100 mb-2"
            />
          </CardHeader>
          <CardContent className="pb-2">
            <h2 className="text-3xl">Shivani Sharma</h2>
            <p>13520802722</p>
          </CardContent>
          <CardDescription className=" border border-slate-100 p-0">
            <p className="flex items-center gap-2 p-3">
              {" "}
              <span>
                <Mail />
              </span>{" "}
              shivanicsec22@bpitindia.edu.in
            </p>
          </CardDescription>
          <CardFooter className="bg-blue-800 text-white rounded-b-3xl flex p-0 justify-center">
            <p className="my-1 p-2">Computer Science Engineering</p>
          </CardFooter>
        </Card>

        <Card className="flex w-fit h-max flex-col md:flex-row justify-center items-center border-none">
          <CardContent className="w-full md:w-3/5  py-3">
            <div className="flex gap-3 items-center ">
              <Label htmlFor="society" className="font-bold text-xl">Society</Label>
              <Select>
                <SelectTrigger className="w-[290px] rounded-3xl outline-none">
                  <SelectValue placeholder="select Society..." className="text-muted"/>
                </SelectTrigger>
                <SelectContent>
                  {
                    society.map((val:string ,index:number)=>{
                      return <SelectItem key={index} value={val}>{val}</SelectItem>
                    })
                  }
                </SelectContent> 
              </Select>
            </div>
           <CardDescription className="py-5 font-semibold text-black">
               <p>
                 John is a ddicated student passionate about AI and Machine Learning. He has led multiple projects in the AI society and aims to pursue a career in research
               </p>
           </CardDescription>

           <button className="py-2 w-full bg-blue-800 text-white font-medium text-center my-3 rounded-lg">View Achievements</button>
           <button className="w-full py-2 bg-blue-800 text-white font-medium text-center rounded-lg">View Contributions</button>
          </CardContent>
          <Card className="w-full md:w-2/5 bg-sky-100 my-2 md:my-0">
             <CardDescription className="border border-b-2 border-b-black p-2 ">
                      <h1 className="text-xl fonrt-bold text-black">Involvement Metrices</h1>
              </CardDescription>
              <CardContent className="p-2">
                 <p><span className="font-bold">Participation Level:</span>Highly active with contributions to all major events.</p>
                 <p><span className="font-bold">Attendance:</span>95% attendance in society meetings</p>
              </CardContent>
              <CardContent className=" p-0">
                 <CardTitle className="border border-b-2 border-b-black p-0">
                    <p className="font-bold text-lg px-2 py-1">Performance Ratings</p>
                 </CardTitle>
                 <CardFooter className="flex flex-col items-start p-2">
                  <p>Leadership: 8/10</p>
                  <p>Teamwork: 9/10</p>
                 </CardFooter>
              </CardContent>
          </Card>
        </Card>
      </Card>
      </section>

      <div className="w-full flex justify-center">
         <section className="w-10/12">
           <EvaluationCard arr={achievement} head={"Achievements"}/>
           <EvaluationCard arr={achievement} head={"Contrbutions"}/>
         </section>
      </div>
     
    </div>
  );
};

export default Evaluation;
