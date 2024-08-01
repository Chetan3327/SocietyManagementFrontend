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
  // Add more societies as needed
];

const societyPositions = [
  { id: 1, name: "President" },
  { id: 2, name: "Vice President" },
  { id: 3, name: "Tech Team Member" },
  { id: 4, name: "Core Team Member" },
  { id: 5, name: "Junior Council Member" },
  { id: 6, name: "Senior Council Member" },
]
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
  <>
    <div className="relative mt-0 mx-auto w-full">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="Member spotlight intro"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-white text-center text-4xl text-bold">
            WANT TO BECOME A MEMBER OF THE SOCIETY OF YOUR CHOICE ?
          </h2>
          <p className="text-black font-bold text-center my-5 text-xl">
            Fill the form and the Society will get back to you !! <br /> CONNECT AND
            THRIVE
          </p>
        </div>
      </div>
    <div className="py-8 px-6 lg:px-20 bg-white mt-10 w-7/12 mx-auto text-black">
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
            {societyPositions.map((society) => (
              <option key={society.id} value={society.id}>
                {society.name}
              </option>
            ))}
          </select>
          {errors.societyID && (
            <p className="text-red-600">Society is required.</p>
          )}
        </div>
        {/* <div>
          <label>Student Contributions:</label>
          <textarea
            {...register("studentContributions")}
            className="border p-2 w-full"
          />
        </div> */}
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
  </>
  );
};

export default Become_Member_Form;
