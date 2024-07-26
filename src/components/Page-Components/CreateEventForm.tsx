import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  Title: z.string().nonempty("Title is required"),
  Description: z.string().nonempty("Description is required"),
  EventType: z.string().nonempty("Event Type is required"),
  ModeOfEvent: z.string().nonempty("Mode of Event is required"),
  Location: z.string().nonempty("Location is required"),
  EventDateTime: z.string().nonempty("Event Date and Time is required"),
});

const eventTypes = [
  "Workshop",
  "Seminar",
  "Meetup",
  "Hackathon",
  "Competition",
];

const modesOfEvent = ["Online", "Offline", "Hybrid"];

const classes =
  "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded bg-gray-200";

const CreateEventForm = () => {
  type formData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: formData) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center flex-col bg-white py-10 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md"
        >
          <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">
            Register For The Event
          </h2>

          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Title"
            >
              Full Name
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
              type="text"
              id="Title"
              placeholder="Enter Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Description"
            >
              Email
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
              type="text"
              id="Title"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Title"
            >
              Branch
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
              type="text"
              id="Title"
              placeholder="Enter Your Branch"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Title"
            >
              Batch
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
              type="text"
              id="Title"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Title"
            >
              Enrollment Number
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right "
              type="text"
              id="Title"
              placeholder="Enter Your Name"
            />
          </div>
          <button
            type="submit"
            className="w-full px-2 py-3 mb-4 mt-4 text-xl bg-gray-800 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEventForm;
