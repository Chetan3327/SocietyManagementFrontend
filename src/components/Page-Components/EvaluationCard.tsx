import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,

  } from "@/components/ui/card";
import { Data } from "@/pages/Evaluation";

const EvaluationCard = ({head,arr}:{head:string,arr:Data[]}) => {
  return (
    <div className="flex justify-center flex-col items-center ">
        <h1 className="p-2 bg-blue-800 text-white px-2 mt-4 rounded-lg">{head}</h1>
        <Card className="p-2 border-none">
          <CardContent className="p-2">
            {
                arr.map(({ heading,date,points}, index: number)=>{
                  return(
                     <CardDescription key={index} className="bg-blue-100 m-3 rounded-lg ">
                      <CardTitle className="py-2 px-4 border border-b-2 border-b-black">
                       <h1 className="text-black">{heading}</h1>
                       <h6 className="text-sm">Duration: {date}</h6>
                        </CardTitle>
                        
                        <ul className="list-disc list-outside py-2 px-6 font-medium text-black">
                         {
                          points.map((val:string, index: number)=>{
                            return(
                              <li key={index} className="p-1">{val}</li>
                          )})
                         }
                        </ul>

                     
                    

                     </CardDescription>

                  )

                })
            }
          </CardContent>
        </Card>
    </div>
  )
}

export default EvaluationCard