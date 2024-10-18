import React from "react";
// import TestimonialSlider from "./TestimonialSlider";
// import '@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css")';

// Define the type for a single testimonial
// interface Testimonial {
//   name: string;
//   imgSrc: string;
//   text: string;
// }

// Define the component
const TestimonialCard: React.FC<any> = ({ Testimonials }) => {
  // Array of testimonials
  // const testimonials: Testimonial[] = [
  //   {
  //     name: "Kenzie Edgar",
  //     imgSrc: "https://i.pravatar.cc/100?img=1",
  //     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.`,
  //   },
  //   {
  //     name: "Stevie Tifft",
  //     imgSrc: "https://i.pravatar.cc/100?img=2",
  //     text: `Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.`,
  //   },
  //   {
  //     name: "Tommie Ewart",
  //     imgSrc: "https://i.pravatar.cc/100?img=3",
  //     text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.`,
  //   },
  //   {
  //     name: "Charlie Howse",
  //     imgSrc: "https://i.pravatar.cc/100?img=4",
  //     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.`,
  //   },
  //   {
  //     name: "Nevada Herbertson",
  //     imgSrc: "https://i.pravatar.cc/100?img=5",
  //     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!`,
  //   },
  //   {
  //     name: "Kris Stanton",
  //     imgSrc: "https://i.pravatar.cc/100?img=6",
  //     text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!`,
  //   },
  // ];

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
              Know what people <br />
              are saying.
            </h1>
            {/* <h3 className="text-xl mb-5 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3> */}
          </div>
          {/* <TestimonialSlider /> */}

          {/* BatchYear
: 
2022
Branch
: 
"Computer Science and Engineering (CSE)"
EnrollmentNo
: 
0
FirstName
: 
"Naman"
LastName
: 
"Garg"
ProfilePicture
: 
"https://th.bing.com/th/id/R.0301819f445a8855c4a577a6763fb62d?rik=TT%2fgaYZuz1YEig&riu=http%3a%2f%2fanhede.se%2fwp-content%2fuploads%2f2014%2f01%2f130221-2528.jpg&ehk=LToqkipED3KxGj7CVuMoQrvi487RY2HN6IPZ59FCWNQ%3d&risl=&pid=ImgRaw&r=0"
SocietyID
: 
2
SocietyPosition
: 
"Senior Council Member"
TestimonialDescription
: 
"Naman  */}
          <div className="">
            {Testimonials.map(({ FirstName, ProfilePicture, TestimonialDescription, SocietyPosition, BatchYear, Branch }
              : { FirstName: string, ProfilePicture: string, TestimonialDescription: string, SocietyPosition: string, BatchYear: number, Branch: string }, index: number) => (
              <div key={index} className="">
                <div className=" mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className=" flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={ProfilePicture} alt={FirstName} />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        {FirstName}
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {TestimonialDescription}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                    <p className="text-md mr-1 text-black">
                      - {SocietyPosition}
                      <br />
                      {Branch} , {BatchYear}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Buy me a beer"
            href="https://www.buymeacoffee.com/scottwindon"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
              alt="Support"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
