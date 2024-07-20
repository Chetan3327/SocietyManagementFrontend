import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

type Section = {
  title: string;
  description: string;
  image: string;
  route: string;
}

const sections: Section[] = [
  {
    title: "Technical Roles",
    description: "If you believe you are technically proficient, these roles are for you!!",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  },
  {
    title: "Non-Technical Roles",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  },
  {
    title: "Become a Member",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing eliti sed.",
    image: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg",
    route: '/roles'
  }
];

const Openings = () => {
  const router = useNavigate()
  return (
    <div className="container py-24 sm:py-0 space-y-20">
      <div className="relative mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-black text-center text-4xl font-extrabold uppercase">Join Our Dynamic Team Today !</h2>
                    <p className="text-white text-center my-5 text-xl font-extrabold uppercase">Explore our current openings and take the first step towards an enriching and rewarding college experience.</p>
                </div>
        </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Openings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map(({ title, description, image, route }) => (
          <Card className="cursor-pointer" onClick={() => router(route)} key={title}>
            <CardHeader>
              <img
                src={image}
                alt="Job Section"
                className="w-[200px] lg:w-[300px] mx-auto rounded-md"
              />
            </CardHeader>

            <CardContent className="font-bold text-2xl">{title}</CardContent>

            <CardFooter>
              {description}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Openings
