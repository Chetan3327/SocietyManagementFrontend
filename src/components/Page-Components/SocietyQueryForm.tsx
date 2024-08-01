import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  StudentName: z.string().nonempty("Student name is required"),
  StudentEnrollmentNumber: z.string().length(11, "Invalid enrollment number"),
  StudentBatch: z.string().nonempty("Invalid batch"),
  Branch: z.string().nonempty("Branch name is required"),
  societyID: z.string().nonempty("Society is required"),
  Query: z.string().nonempty("This field is required"),
});

const branches = ["CSE", "IT", "CSE-DS", "ECE", "EEE"];

const batches = [
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
  { id: 3, name: "WIBD" },
  { id: 3, name: "GDSC" },
  { id: 3, name: "WIE" },
  { id: 3, name: "IEEE" },
  { id: 3, name: "Electonauts" },
  { id: 3, name: "Dhrishti" },
  { id: 3, name: "Opti Click" },
  { id: 3, name: "Avaran" },
  { id: 3, name: "Octave" },
  { id: 3, name: "Panache" },
  { id: 3, name: "Mavericks" },
  { id: 3, name: "Kalam" },
  { id: 3, name: "Chromavita" },
  // Add more societies as needed
];

const classes =
  "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const SocietyQueryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative mt-0 mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-white text-center text-4xl text-bold">
            ENGAGE WITH YOUR SOCIETY
          </h2>
          <p className="text-white text-center my-5 text-xl">
            STEP INTO CAMPUS LIFE: REACH OUT TO YOUR SOCIETY! <br /> CONNECT AND
            THRIVE
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Society Query Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-md font-medium">Student Name</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("StudentName")}
              placeholder="Enter your name"
            />
            {errors.StudentName && (
              <span className="text-red-500">{errors.StudentName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
              Enrollment Number
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("StudentEnrollmentNumber")}
              placeholder="Enter your enrollment number"
            />
            {errors.StudentEnrollmentNumber && (
              <span className="text-red-500">
                {errors.StudentEnrollmentNumber.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Batch</label>
            <select {...register("StudentBatch")} className={`${classes}`}>
              {batches.map((batch, index) => (
                <option value={batch} key={index}>
                  {batch}
                </option>
              ))}
            </select>
            {errors.StudentBatch && (
              <span className="text-red-500">
                {errors.StudentBatch.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Branch</label>
            <select {...register("Branch")} className={`${classes}`}>
              {branches.map((branch, index) => (
                <option value={branch} key={index}>
                  {branch}
                </option>
              ))}
            </select>
            {errors.Branch && (
              <span className="text-red-500">{errors.Branch.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society</label>
            <select {...register("societyID")} className="border p-2 w-full">
              <option value="">Select a Society</option>
              {societyOptions.map((society) => (
                <option key={society.id} value={society.id}>
                  {society.name}
                </option>
              ))}
            </select>
            {errors.societyID && (
              <span className="text-red-500">{errors.societyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Query</label>
            <textarea
              placeholder="Write your query here"
              {...register("Query")}
              className={`${classes}`}
            ></textarea>
            {errors.Query && (
              <span className="text-red-500">{errors.Query.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-2 py-3 mb-4 text-xl bg-gray-800 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SocietyQueryForm;
