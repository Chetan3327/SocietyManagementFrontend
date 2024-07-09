import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/seperator";

type Role = {
  title: string;
  lastdate: string;
  responsibilities: string[];
  link: string
}

const roles: Role[] = [
  {
    title: "Open Source Head, WiBD",
    lastdate: "july 3, 2024",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing eliti sed.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed."
    ],
    link: "https://docs.google.com/forms/d/e/1FAIpQLScqPUiPnxrrp6NBYPhzewCii3ISKRZU4ZvHRbiP4HhP5y1yiA/viewform?usp=send_form"
  }
];

const Roles = () => {
  return (
    <div className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Openings
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {roles.map(({ title, lastdate, responsibilities, link }) => (
          <Card key={title} className="w-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>Last date to apply: {lastdate}</CardDescription>
              <Separator />
            </CardHeader>
            <CardContent>
              <h2 className="font-bold">Responsibilities ans Qualifications: </h2>
              <ol>
                {responsibilities.map((responsibility, idx) => {
                  return(<li key={idx}>{responsibility}</li>)
                })}
              </ol>
            </CardContent>

            <CardFooter>
              <Button onClick={() => location.href = link}>Apply</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Roles
