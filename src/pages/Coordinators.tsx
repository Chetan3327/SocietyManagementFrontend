import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail } from "lucide-react";

type Coordinator = {
  name: string;
  title: string;
  email: string;
  description: string;
  image: string;
}

const coordinators: Coordinator[] = [
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abxXYZ12@gmail.com",
    description: "Dr. Shweta Taneja serves as Facalty coordinator for Hash Define.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abXXYZ12@gmail.com",
    description: "Dr. Shweta Taneja serves as Facalty coordinator for Hash Define.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abxXYZ12@gmail.com",
    description: "Dr. Shweta Taneja serves as Facalty coordinator for Hash Define.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  }
];

const Coordinators = () => {
  return (
  <>
    <div className="container py-24 sm:py-0 space-y-10">

    <div className="relative mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-black text-center text-4xl font-extrabold">GUIDING HANDS: OUR FACULTY COORDINATORS </h2>
                    <p className="text-white text-center my-5 text-xl font-extrabold">Meet our dedicated faculty coordinators committed to guiding and supporting our students..</p>
                </div>
        </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Coordinators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coordinators.map(({ title, name, email, description, image }) => (
          <Card key={title} className="text-center bg-[#e6e6e6] dark:bg-[#3f3f3f]">
            {/* <CardHeader className="bg-gradient-to-r from-[#995252] to-[#ec7f7f] rounded-t"> */}
            <CardHeader>
              <img
                src={image}
                alt="Job Section"
                className="w-[80px] lg:w-[160px] mx-auto rounded-full shadow-2xl"
              />
            </CardHeader>

            <CardContent className="font-bold text-3xl space-y-4">
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">{name}</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-center items-center gap-3"><Mail size={20} /> {email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </>
  )
}

export default Coordinators