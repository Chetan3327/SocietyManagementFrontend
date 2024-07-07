import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Coordinator = {
  name: string;
  title: string;
  email: string;
  image: string;
}

const coordinators: Coordinator[] = [
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abxXYZ12@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abXXYZ12@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "Dr. Shweta Taneja",
    title: "ASSOCIATE PROFESSOR & HOD CSE",
    email: "abxXYZ12@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  }
];

const Coordinators = () => {
  return (
    <div className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Coordinators
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coordinators.map(({ title, name, email, image }) => (
          <Card key={title}>
            <CardHeader>
              <img
                src={image}
                alt="Job Section"
                className="w-[80px] lg:w-[160px] mx-auto rounded-full"
              />
            </CardHeader>

            <CardContent className="font-bold text-3xl">
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Coordinators