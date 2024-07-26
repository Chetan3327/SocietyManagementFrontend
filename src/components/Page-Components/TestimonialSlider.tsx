import Slider from "react-slick";
import { Settings } from "react-slick";

const TestimonialSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "ease-in-out",
  };

  return (
    <Slider {...settings} className="flex border-2 w-full rounded my-28">
      <div className="flex flex-col py-20">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-3xl underline underline-offset-2 mb-10">
            Top Reviews
          </h1>
          <img
            src="https://images.news18.com/webstories/2023/10/Shah-Rukh-Khan_172fa644f21_original-ratio.jpg"
            className="rounded w-2/12 mx-auto mb-4"
            alt="Reviewer"
          />
          <h1 className="text-center text-xl font-semibold">Tanmay Gupta</h1>
        </div>
        <div className="px-5 flex mt-10">
          <p className="text-center mx-20 max-w-md:mx-12 max-w-sm:mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            totam magni, officia dolorum voluptates est fugit vero! Sunt neque
            at fugit, maxime harum vel doloremque officia ullam. Labore illum
            vero necessitatibus voluptate itaque, a molestias repudiandae
            dolorum asperiores expedita delectus aut nemo voluptatum impedit
            nostrum quas tenetur libero consectetur! Maiores.
          </p>
        </div>
      </div>
      <div className="flex flex-col py-20">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-3xl underline underline-offset-2 mb-10">
            Top Reviews
          </h1>
          <img
            src="https://images.news18.com/webstories/2023/10/Shah-Rukh-Khan_172fa644f21_original-ratio.jpg"
            className="rounded w-2/12 mx-auto mb-4"
            alt="Reviewer"
          />
          <h1 className="text-center text-xl font-semibold">Tanmay Gupta</h1>
        </div>
        <div className="px-5 flex mt-10">
          <p className="text-center mx-20 max-w-md:mx-12 max-w-sm:mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            totam magni, officia dolorum voluptates est fugit vero! Sunt neque
            at fugit, maxime harum vel doloremque officia ullam. Labore illum
            vero necessitatibus voluptate itaque, a molestias repudiandae
            dolorum asperiores expedita delectus aut nemo voluptatum impedit
            nostrum quas tenetur libero consectetur! Maiores.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
