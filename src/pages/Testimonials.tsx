import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Testimonial = {
  name: string;
  degree: string;
  year: string;
  description: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "SHIVANI SHARMA",
    degree: "Bachelors Of Technology",
    year: "2022-23",
    description: "XYZ promotes the culture Of coding and conducts various events which help students to explore their interests, Along with these, XYZ provides a platform to the freshmen to interact with Other Colleges as well as their seniors to get the benefit out Of their experience as well as get their doubts resolved.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "SHIVANI SHARMA",
    degree: "Bachelors Of Technology",
    year: "2022-23",
    description: "XYZ promotes the culture of coding and conducts various events which help students to explore their interests. Along with these. XYZ provides a platform to the freshmen to interact with other colleges as well as their seniors to get the benefit out of their experience as well as get their doubts resolved.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  },
  {
    name: "SHIVANI SHARMA",
    degree: "Bachelors Of Technology",
    year: "2022-23",
    description: "XYZ promotes the culture Of coding and conducts various events which help students to explore their interests. Along with these, XYZ provides a platform to the freshmen to interact With Other colleges as well as their seniors to get the benefit out of their experience as well",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs12SHC36eFS4JYDUiE9IjJyaj6q97gCsy9A&s"
  }
]

const Testimonials = () => {
  return (
  <>
    <div className="container py-24 sm:py-0 space-y-20">

    <div className="relative mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-black text-center text-4xl font-extrabold">REAL EXPERIENCES, REAL IMPACT</h2>
                    <p className="text-white text-center my-5 text-xl font-extrabold">Hear from Our Members About Their Growth, Challenges, and Successes.</p>
                </div>
        </div>

      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Discover the True Impact Through Honest Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ name, image, degree, year, description }) => (
          <Card key={name} className="bg-gradient-to-b from-gray-100 to-gray-300">
            <CardContent className="flex pt-5 items-center gap-10">
              <div>
                <img
                  src={image}
                  alt="Job Section"
                  className="w-[60px] lg:w-[120px] rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">{name}</p>
                <p className="text-muted-foreground">{degree}</p>
                <p className="text-muted-foreground">{year}</p>
              </div>
            </CardContent>

            <CardFooter>
              {description}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </>
  )
}

export default Testimonials