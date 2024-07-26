import { Card, CardContent, CardHeader } from "@/components/ui/card"

const mostques=["How do we enroll in a society","How do we enroll in a society","How do we enroll in a society","How do we enroll in a society","How do we enroll in a society",]

const Mostques = () => {
  return (
    <>
    <Card className="px-0 pt-3 h-fit w-full shadow-lg">
        <CardHeader className="py-2 px-3  font-bold text-xl">Most Asked Questions</CardHeader>
        <CardContent className="p-0">
             {mostques.map((ques, index) => (
                <div key={index} className="flex flex-col py-2 items-start justify-center px-3 border-b-2 border-b-muted">
                    <p className="text-lg"><span className="font-bold">Q: </span>{ques}</p>
                </div>
             ))}
        </CardContent>
    </Card>
    </>
  )
}

export default Mostques