import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    EnrollmentNo : z.string().nonempty(" Enrollment No is required"),
    Name : z.string().nonempty(" Name is required"),
    // Branch : z.string().nonempty("Branch is required"),
    Contact : z.string().nonempty("Contact is required"),
    Email : z.string().nonempty("Email is required"),
    StudentBatch: z.string().nonempty("Invalid batch"),
    Branch: z.string().nonempty("Branch name is must"), 
    profilePicture: z.string().nonempty("Profile Pictture Link ,if any"), 
    societyID: z.string().nonempty("SocietyID is must"), 
    societyPosition: z.string().nonempty("Society Position is must"), 
    studentContributions: z.string().nonempty("Society Contribution if any"), 
    studentDomain: z.string().nonempty("Student's Domain if any"), 
    memberType: z.string().nonempty("Member's Type if any"), 
    github: z.string().nonempty("Member's github profile if any"), 
    linkedin: z.string().nonempty("Member's LinkedIn profile if any"), 
    twitter: z.string().nonempty("Member's Twitter profile if any"), 
})

const Branch = ["CSE", "IT", "CSE-DS", "ECE", "EEE"];
const Batch = [
  "2020-2024",
  "2021-2025",
  "2022-2026",
  "2023-2027",
  "2024-2028",
  "2025-2029",
];

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const AddMembers = () => {

    const [submit , setSubmit] = useState(false)
    type formData = z.infer<typeof schema>

    const {register , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data : formData) => {
        setSubmit(true)
        console.log(data)
    }


  return (
    <>
      <div className="relative mt-0 mx-auto w-full mb-10">
        <img
          className="w-full h-80 blur-sm"
          src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt="coordinator form"
        />
        <div className="absolute inset-0 py-20 lg:py-28">
          <h2 className="text-white text-center text-4xl font-bold">
            Add Members Details
          </h2>
        </div>
      </div>
      <div className=" max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          New Member Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Enrollment No</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("EnrollmentNo")}
              placeholder="Enter Enrollment No"
            />
            {errors.Name && (
              <span className="text-red-500">{errors.EnrollmentNo.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">FirstName</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Name")}
              placeholder="Enter FirstName of the Student"
            />
            {errors.Name && (
              <span className="text-red-500">{errors.Name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">LastName</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Name")}
              placeholder="Enter LastName of the Student"
            />
            {errors.Name && (
              <span className="text-red-500">{errors.Name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-md font-medium"
            >
              Batch
            </label>
            <select {...register("StudentBatch")} className={`${classes}`}>
              {Batch.map((soc, index) => (
                <option value={soc} key={index}>
                  {soc}
                </option>
              ))}
            </select>
          </div>
          {errors.StudentBatch && (
            <span className="text-red-500">{errors.StudentBatch.message}</span>
          )}

          <div className="mb-4">
            <label
              className="block text-md font-medium"
            >
              Branch
            </label>
            <select {...register("Branch")} className={`${classes}`}>
              {Branch.map((soc, index) => (
                <option value={soc} key={index}>
                  {soc}
                </option>
              ))}
            </select>
          </div>
          {errors.Branch && (
            <span className="text-red-500">{errors.Branch.message}</span>
          )}

          <div className="mb-4">
            <label className="block text-md font-medium">Mobile No</label>
            <input
              placeholder="Enter Mobile number"
              {...register("Contact")}
              type="text"
              className={`${classes}`}
            />
            {errors.Contact && (
              <span className="text-red-500">{errors.Contact.message}</span>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-md font-medium">
            Email
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Email")}
              placeholder="Enter Email"
            />
            {errors.Email && (
              <span className="text-red-500">
                {errors.Email.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Profile Picture:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("profilePicture")}
              placeholder="Give the Link for the Profile Picture"
              />
              {errors.profilePicture && (
              <span className="text-red-500">
                {errors.profilePicture.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("societyID")}
              placeholder="Give the ID of the Society in which the member will be registered"
              />
              {errors.societyID && (
              <span className="text-red-500">
                {errors.societyID.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society Position:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("societyPosition")}
              placeholder="Enter the Member's Society Position"
              />
              {errors.societyPosition && (
              <span className="text-red-500">
                {errors.societyPosition.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Student Contributions:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("studentContributions")}
              placeholder="Enter the Student's Contribution if any"
              />
              {errors.studentContributions && (
              <span className="text-red-500">
                {errors.studentContributions.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Domain of Expertise:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("studentDomain")}
              placeholder="Enter the Member's Domain"
              />
              {errors.studentDomain && (
              <span className="text-red-500">
                {errors.studentDomain.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Member Type:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("memberType")}
              placeholder="Ex; JC,SC,Core Team,.."
              />
              {errors.memberType && (
              <span className="text-red-500">
                {errors.memberType.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">GitHub Profile:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("github")}
              placeholder="Member's GitHub Profile"
              />
              {errors.github && (
              <span className="text-red-500">
                {errors.github.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">LinkedIn Profile:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("linkedin")}
              placeholder="Member's LinkedIn Profile"
              />
              {errors.linkedin && (
              <span className="text-red-500">
                {errors.linkedin.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Twitter Profile:</label>
              <input
              className={`${classes}`}
              type="text"
              {...register("twitter")}
              placeholder="Member's Twitter's Profile if any"
              />
              {errors.twitter && (
              <span className="text-red-500">
                {errors.twitter.message}
              </span>
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
  )
}

export default AddMembers