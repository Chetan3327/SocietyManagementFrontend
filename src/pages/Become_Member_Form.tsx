import React from "react";
import { useForm } from "react-hook-form";

interface StudentProfile {
  enrollmentNo: number;
  userID: number;
  firstName: string;
  lastName: string;
  branch: string;
  batchYear: number;
  mobileNo: string;
  email: string;
  profilePicture: string;
  societyID: number;
  societyPosition: string;
  studentContributions: string;
  domainExpertise: string;
  githubProfile?: string;
  linkedInProfile?: string;
  twitterProfile?: string;
  // Assuming StudentAchievements, Testimonials, and StudentMarking are handled elsewhere
}
const societyOptions = [
  { id: 1, name: "Society A" },
  { id: 2, name: "Society B" },
  { id: 3, name: "Society C" },
  // Add more societies as needed
];
const Become_Member_Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentProfile>();

  const onSubmit = (data: StudentProfile) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div className="py-8 px-6 lg:px-20 bg-white mt-10 w-7/12 mx-auto">
      <h2 className="font-bold text-center text-4xl mb-4 text-gray-800">
        Become a Member
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>First Name:</label>
          <input
            {...register("firstName", { required: true })}
            type="text"
            className="border p-2 w-full"
          />
          {errors.firstName && (
            <p className="text-red-600">First Name is required.</p>
          )}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            {...register("lastName", { required: true })}
            type="text"
            className="border p-2 w-full"
          />
          {errors.lastName && (
            <p className="text-red-600">Last Name is required.</p>
          )}
        </div>
        <div>
          <label>Enrollment No:</label>
          <input
            {...register("enrollmentNo", { required: true })}
            type="number"
            className="border p-2 w-full"
          />
          {errors.enrollmentNo && (
            <p className="text-red-600">Enrollment No is required.</p>
          )}
        </div>

        <div>
          <label>Branch:</label>
          <input
            {...register("branch", { required: true })}
            type="text"
            className="border p-2 w-full"
          />
          {errors.branch && <p className="text-red-600">Branch is required.</p>}
        </div>
        <div>
          <label>Batch Year:</label>
          <input
            {...register("batchYear", { required: true })}
            type="number"
            className="border p-2 w-full"
          />
          {errors.batchYear && (
            <p className="text-red-600">Batch Year is required.</p>
          )}
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            {...register("mobileNo", { required: true })}
            type="text"
            className="border p-2 w-full"
          />
          {errors.mobileNo && (
            <p className="text-red-600">Mobile No is required.</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="border p-2 w-full"
          />
          {errors.email && <p className="text-red-600">Email is required.</p>}
        </div>
        <div>
          <label>Profile Picture:</label>
          <input
            {...register("profilePicture")}
            type="text"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Society:</label>
          <select
            {...register("societyID", { required: true })}
            className="border p-2 w-full"
          >
            <option value="">Select a Society</option>
            {societyOptions.map((society) => (
              <option key={society.id} value={society.id}>
                {society.name}
              </option>
            ))}
          </select>
          {errors.societyID && (
            <p className="text-red-600">Society is required.</p>
          )}
        </div>
        <div>
          <label>Position:</label>
          <select
            {...register("societyID", { required: true })}
            className="border p-2 w-full"
          >
            <option value="">Select Position</option>
            {societyOptions.map((society) => (
              <option key={society.id} value={society.id}>
                {society.name}
              </option>
            ))}
          </select>
          {errors.societyID && (
            <p className="text-red-600">Society is required.</p>
          )}
        </div>
        <div>
          <label>Student Contributions:</label>
          <textarea
            {...register("studentContributions")}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Domain Expertise:</label>
          <textarea
            {...register("domainExpertise")}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Github Profile:</label>
          <input
            {...register("githubProfile")}
            type="url"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>LinkedIn Profile:</label>
          <input
            {...register("linkedInProfile")}
            type="url"
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Twitter Profile:</label>
          <input
            {...register("twitterProfile")}
            type="url"
            className="border p-2 w-full"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Become_Member_Form;
