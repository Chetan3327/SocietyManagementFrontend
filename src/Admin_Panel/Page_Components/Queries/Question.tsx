import { Card, CardContent } from "@/components/ui/card";
import student from "../../../assets/studentpic.jpeg";

const ques = [
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
  {
    img: student,
    name: "Adam Smith",
    ques: "How do we contribute in a society",
  },
];

const Question = () => {
  return (
    <>
      <Card className="p-2 w-full h-96 sm:h-[712px] lg:h-[544px] overflow-y-auto border-none">
        <CardContent className="p-2">
          {ques.map((item, index) => {
            return (
              <Card key={index} className="pl-4 pr-7 py-2 w-full m-3 shadow-lg">
                <CardContent className="p-2 flex gap-4 flex-col">
                  <div className="flex gap-2">
                    <img
                      src={item.img}
                      alt="student"
                      className="rounded-full h-8 w-8"
                    />
                    <h3 className="text-lg font-bold">{item.name}</h3>
                  </div>
                  <p className="text-xl">
                    <span className="font-bold">Q: </span>
                    {item.ques}
                  </p>
                  <div className="flex gap-2">
                    <img
                      src={item.img}
                      alt="student"
                      className="rounded-full h-8 w-8"
                    />
                    <input type="text" placeholder="Answer Query" className="border-2 rounded-lg w-full border-black bg-muted p-1"/>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default Question;
