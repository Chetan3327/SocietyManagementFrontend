import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Question from "../Page_Components/Queries/Question";
import Mostques from "../Page_Components/Queries/Mostques";
import Querypie from "../Page_Components/Queries/Querypie";
const query = ["All Queries", "Answered Queries", "Unanswered Queries"];
const Queries = () => {
  return (
    <div className="w-full h-screen flex gap-10 flex-col items-center ">
      <Card className="p-3 m-2 w-10/12 mt-5">
        <CardContent className="flex justify-around items-center p-2">
          {query.map((data, index) => {
            return (
              <div key={index}>
                <Link to="/admin/queries" className="text-xl">{data}</Link>
              </div>
            );
          })}
        </CardContent>
      </Card>
      <Card className="w-10/12 flex flex-col md:flex-row border-none gap-8 bg-transparent ">
        <div className="w-full md:w-8/12 ">
            <Question />
        </div>
        <div className="flex gap-4 w-full md:w-4/12  flex-col">
            <Querypie/>
            <Mostques/>
        </div>
      </Card>
    </div>
  );
};

export default Queries;
