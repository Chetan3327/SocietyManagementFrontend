import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const schema = z.object({
  Name: z.string().nonempty("Name is required"),
  Email: z.string().nonempty("Email is required"),
  Branch: z.string().nonempty("Branch is required"),
  Batch: z.string().nonempty("Batch is required"),
  Enrollment: z.string().length(11,"Enrollment is required"),
  Society: z.string().nonempty("Invalid Society"),
});

const Branch = ["CSE", "IT", "CSE-DS", "ECE", "EEE"];

const Batch = [
  "2020-2024",
  "2021-2025",
  "2022-2026",
  "2023-2027",
  "2024-2028",
  "2025-2029",
];

const societyOptions = [
  { id: 1, name: "Namespace" },
  { id: 2, name: "Anveshan" },
  { id: 3, name: "Hash Define" },
  { id: 4, name: "WIBD" },
  { id: 5, name: "GDSC" },
  { id: 6, name: "WIE" },
  { id: 7, name: "IEEE" },
  { id: 8, name: "Electonauts" },
  { id: 9, name: "Dhrishti" },
  { id: 10, name: "Opti Click" },
  { id: 11, name: "Avaran" },
  { id: 12, name: "Octave" },
  { id: 13, name: "Panache" },
  { id: 14, name: "Mavericks" },
  { id: 15, name: "Kalam" },
  { id: 16, name: "Chromavita" },
];

const classes =
  "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded bg-gray-200";

const CreateEventForm = () => {
  type formData = z.infer<typeof schema>;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: formData) => {
    try {

      // Find the selected society by its ID
      const selectedSociety = societyOptions.find(
        (society) => society.id.toString() === data.Society
      );
      if (!selectedSociety) {
        throw new Error("Invalid society selected");
      }
  
      // Prepare the submission data, converting StudentEnrollmentNumber to integer
      const submissionData = {
        ...data,
        EnrollmentNo: parseInt(data.Enrollment, 10), // Convert to integer
        Society: selectedSociety.name, // Send the society name
      };

      const response = await axios.post(`${BACKEND_URL}/registerForEvent`, submissionData, {
      // const response = await axios.post(`http://localhost:8000/api/v1/registerForEvent`, submissionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Success:', response.data);
      setIsSubmitted(true);
      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // Handle Axios error
        console.error('Error:', error.response?.data || error.message);
      } else {
        // Handle non-Axios error
        console.error('Unexpected Error:', error);
      }
    }
  };

  return (
    <>
      <div className="h-full w-full flex items-center justify-center flex-col bg-gray-200 py-10 px-4">

      {isSubmitted ? (
          <div className="bg-green-100 p-6 rounded-lg shadow-lg w-full max-w-screen-md flex flex-col items-center gap-y-4">
            <h2 className="text-3xl font-bold text-center text-green-800">
              Thank you!
            </h2>
            <p className="text-center text-green-700 mb-4">
              You have successfully registered for the event...
            </p>
          </div>
        ) : (

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md"
        >
          <h2 className="mb-10 text-3xl font-bold text-center text-gray-900">
            Register For The Event
          </h2>


          <div className="flex flex-col sm:flex-row mb-2">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
              type="text"
              id="name"
              {...register("Name")}
              placeholder="Enter your Full Name"
            />
          </div>
          {errors.Name && (
            <span className="text-red-500">{errors.Name.message}</span>
          )}

          <div className="flex flex-col sm:flex-row mb-2">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
              type="text"
              id="email"
              {...register("Email")}
              placeholder="Enter your Email-id"
            />
          </div>
          {errors.Email && (
            <span className="text-red-500">{errors.Email.message}</span>
          )}

          <div className="flex flex-col">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="Branch"
            >
              Branch
            </label>
            <select {...register("Branch")} className={`${classes}`}>
              {Branch.map((branch, index) => (
                <option value={branch} key={index}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          {errors.Branch && (
            <span className="text-red-500">{errors.Branch.message}</span>
          )}

          <div className="flex flex-col sm:flex-row mb-2">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="StudentBatch"
            >
              Batch
            </label>
            <select {...register("Batch")} className={`${classes}`}>
              {Batch.map((batch, index) => (
                <option value={batch} key={index}>
                  {batch}
                </option>
              ))}
            </select>
          </div>
          {errors.Batch && (
            <span className="text-red-500">{errors.Batch.message}</span>
          )}

          <div className="flex flex-col sm:flex-row mb-2">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="enrollment"
            >
              Enrollment No.
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right"
              type="text"
              id="enrollment"
              {...register("Enrollment")}
              placeholder="Enter your Enrolment No."
            />
          </div>
          {errors.Enrollment && (
            <span className="text-red-500">{errors.Enrollment.message}</span>
          )}

          <div className="flex flex-col sm:flex-row mb-2">
            <label
              className="block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4"
              htmlFor="StudentSociety"
            >
              Enter the Society whose event you want TO attend
            </label>
            <select {...register("Society")} className={`${classes}`}>
              {societyOptions.map((society) => (
                <option key={society.id} value={society.id}>
                {society.name}
              </option>
              ))}
            </select>
          </div>
          {errors.Society && (
            <span className="text-red-500">{errors.Society.message}</span>
          )}

          <button
            type="submit"
            className="w-full px-2 py-3 mb-4 mt-4 text-xl bg-gray-800 text-white transform transition-transform duration-200 ease-out hover:scale-105"
          >
            Submit
          </button>
        </form>
        )}
      </div>
    </>
  );
};

export default CreateEventForm;
