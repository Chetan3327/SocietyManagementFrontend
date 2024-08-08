import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  RoleName : z.string().nonempty("RoleName is required"),
  RoleType : z.string().nonempty("RoleType is required"),
  Role : z.string().nonempty("Role is required"),
  RoleID : z.string().nonempty("RoleID is required"),
  SocietyID : z.string().nonempty("SocietyID is required"),
  Date : z.string().nonempty("Date is required"),
  Responsibilities : z.string().nonempty("Responsibilities is required"),
  Link : z.string().nonempty("Link is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const CreateRole = () => {

    const [_ , setSubmit] = useState(false)
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
            Update Society Role Details
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
            Update Society Role Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
            <label className="block text-md font-medium">Role ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("RoleID")}
              placeholder="Enter Role ID"
            />
            {errors.RoleID && (
              <span className="text-red-500">{errors.RoleID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("SocietyID")}
              placeholder="Enter Society ID"
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Name</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("RoleName")}
              placeholder="Enter Role Name"
            />
            {errors.RoleName && (
              <span className="text-red-500">{errors.RoleName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Type</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("RoleType")}
              placeholder="Enter Type of the Role"
            />
            {errors.RoleType && (
              <span className="text-red-500">{errors.RoleType.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Description</label>
            <textarea
              placeholder="Enter your reviews"
              {...register("Role")}
              className={`${classes}`}
            ></textarea>
            {errors.Role && (
              <span className="text-red-500">{errors.Role.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Last Date for Application</label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Date")}
              placeholder="Last Date to apply for the role"
            />
            {errors.Date && (
              <span className="text-red-500">
                {errors.Date.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Responsibilities</label>
            <textarea
              placeholder="Responsibilities of the role"
              {...register("Responsibilities")}
              className={`${classes}`}
            ></textarea>
            {errors.Responsibilities && (
              <span className="text-red-500">{errors.Responsibilities.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Link</label>
            <input
              placeholder="Link to apply for the role"
              {...register("Link")}
              className={`${classes}`}
            ></input>
            {errors.Link && (
              <span className="text-red-500">{errors.Link.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-2 py-3 mb-4 text-xl bg-gray-800 text-white"
          >
            Update
          </button>
        </form>
      </div>
    </>
  )
}

export default CreateRole