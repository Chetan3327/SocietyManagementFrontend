import { CoreTeamCard, MemberCard } from "./SocietyMembersCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import student from '../../assets/student.jpg'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHeader,
    TableHead
} from '@/components/ui/table'

const senior_council = [
    {
        name: 'Shivani Sharma',
        domain: 'Open source & data science',
        position: 'president',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        about: ' officiis delectus alias eum, distinctio corrupti laborum iusto necessitatibus maiores quisquam inventore!',
        image: student
    },
    {
        name: 'Shivani Sharma',
        domain: 'Open source & data science',
        position: 'president',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit aliquid! Recusandae neque quas voluptas voluptatum in incidunt officiis delectus alias eum, distinctio corrupti laborum iusto necessitatibus maiores quisquam inventore!',
        image: student
    },
    {
        name: 'Shivani Sharma',
        domain: 'Open source & data science',
        position: 'president',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit aliquid! Recusandae neque quas voluptas voluptatum in incidunt officiis delectus alias eum, distinctio corrupti laborum iusto necessitatibus maiores quisquam inventore!',
        image: student
    },
    {
        name: 'Shivani Sharma',
        domain: 'Open source & data science',
        position: 'president',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, impedit aliquid! Recusandae neque quas voluptas voluptatum in incidunt officiis delectus alias eum, distinctio corrupti laborum iusto necessitatibus maiores quisquam inventore!',
        image: student
    },
]

const members = [
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '04320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
    {
        name: 'Shivani Sharma',
        image: student,
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        email: 'jyotiahuja@gmail.com',
        batch: '2022-2026',
        enrollmentNumber: '12320802722',
        branch: 'CSE',
        skills: 'proficient in pyhton and mysql'
    },
]

const tableClass = "text-center text-gray-800 text-xl border-x"

type memberType = {
    name: string;
    image: string;
    linkedin: string;
    x: string;
    email: string;
    batch: string;
    enrollmentNumber: string;
    branch: string;
    skills: string;
  }

const SocietMembers = () => {

    return (
        <>
            <div className="relative mt-10 mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-white text-center text-4xl text-bold">MEMBER SPOTLIGHTS </h2>
                    <p className="text-white text-center text-xl">DETAILED INSIGHTS INTO LEARN ABOUT THE TALENTED INDIVIDUALS WHO DRIVE OUR MISSION <br /> FORWARD, PARTICIPATION AND ACHIEVEMENTS</p>
                </div>
            </div>

            <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-400 mx-6 md:mx-20 mt-20 rounded">
                <h1 className="text-white text-5xl font-bold mb-4">Get to know our team</h1>
                <p className="text-white">Learn about the talented Individuals who <br /> drive our mission forward</p>

                <div>
                    <div className="flex  w-full ">
                        <span className="text-white text-3xl font-bold pb-4 mr-2 mt-4 ">Senior council</span>   <div className="mt-8 flex-grow border-t border-white"></div>
                    </div>
                    <Carousel
                        //   className="w-10/12 ml-20"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselPrevious />
                        <CarouselContent>
                            {senior_council.map((member, index) => (
                                <CarouselItem key={index}

                                    className="md:basis-1/2 lg:basis-1/3">
                                    <CoreTeamCard props={member} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className="mt-10">

                    <div className="flex  w-full ">
                        <span className="text-white text-3xl font-bold pb-4 mr-2 mt-4 ">Junior council</span>   <div className="mt-8 flex-grow border-t border-white"></div>
                    </div>
                    <Carousel
                        //   className="w-10/12 ml-20"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselPrevious />
                        <CarouselContent>
                            {senior_council.map((member, index) => (
                                <CarouselItem key={index}

                                    className="md:basis-1/2 lg:basis-1/3">
                                    <CoreTeamCard props={member} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>

            <div className="py-8 px-6 lg:px-20 bg-white mt-10 ">
                <h2 className="font-bold text-bold text-center text-4xl mb-4 text-gray-800">MEMBERS</h2>
                <div className="overflow-auto max-h-96">
                    <Table className=" bg-white border-t border-x shadow-lg table-auto ">
                        <TableHeader className="">
                            <TableRow>
                                <TableHead rowSpan={2} className={tableClass}>S No.</TableHead>
                                <TableHead rowSpan={2} className={tableClass}>Society Members</TableHead>
                                <TableHead colSpan={4} className={tableClass}>Members Details</TableHead>
                            </TableRow>
                            <TableRow>
                                <TableHead className={tableClass} >Batch</TableHead>
                                <TableHead className={tableClass} >Enrollment no.</TableHead>
                                <TableHead className={tableClass} >Branch</TableHead>
                                <TableHead className={tableClass} >Skills</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {members.map((member : memberType, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center border-x text-gray-800"  >{index + 1}.</TableCell>
                                    <TableCell className="border-x ">
                                        <MemberCard props={member} />
                                    </TableCell>
                                    <TableCell className="text-center border-x text-lg text-gray-800" >{member.batch}</TableCell>
                                    <TableCell className="text-center border-x text-lg text-gray-800" >{member.enrollmentNumber}</TableCell>
                                    <TableCell className="text-center border-x text-lg text-gray-800">{member.branch}</TableCell>
                                    <TableCell className="text-center border-x text-lg text-gray-800" >{member.skills}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>        
        </>
    )
}

export default SocietMembers

