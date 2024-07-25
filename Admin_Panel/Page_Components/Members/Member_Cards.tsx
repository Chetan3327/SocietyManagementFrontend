
import { Card, CardContent } from "../../../src/components/ui/card";
import { Progress } from "../../../src/components/ui/progress";
import pie from "../../../src/assets/pie.png"
import member from "../../../src/assets/mem.jpeg"

const Member_Cards = () => {
  return (
    <>
     <Card className="p-2 m-4 mt-5 ">
          <CardContent className="p-3 w-full flex justify-center gap-10">
              <Card className="p-6 w-7/12 bg-blue-800  text-white flex flex-col gap-8 ">
                 
                    <div className="p-2 flex justify-between gap-10 ">
                        <section>
                            <h1 className="text-2xl">120</h1>
                            <p>Active Members</p>
                        </section>
                        <img src={member} alt="member" className="h-12 w-12" />
                    </div>
                  <div>
                  <div className="flex justify-between text-white">
                       <p>0%</p>
                        <p>100%</p>
                    </div>
                    <Progress value={50} className="bg-blue-100 w-full h-4 border-2 border-white rounded-full"/>
                  </div>
                   
              
              </Card>
              <Card className="w-7/12 p-5 flex flex-col gap-8">
                    <div className="p-2 flex justify-between  gap-10">
                        <section>
                            <h1 className="text-2xl text-muted-foreground">80+</h1>
                            <p>Contribution this week</p>
                        </section>

                       <img src={member} alt="member" className="h-12 w-24" />
                    </div>
                    <div>
                    <div className="flex justify-between">
                       <p>0%</p>
                       <p>45%</p>
                        <p>100%</p>
                    </div>
                    <Progress value={45} className="bg-blue-100 w-full h-4 border-2 border-white rounded-full"/>
                  </div>
                 
              </Card>
              <Card className="p-3 flex gap-3 items-center pr-8 shadow-lg">
                <img src={pie} alt="pie" className="skew-y-2 h-40" />
                <h1 className="text-xl text-muted-foreground ">Projects</h1>
              </Card>
          </CardContent>
     </Card>
    </>
  )
}

export default Member_Cards
