import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    Name : z.string().nonempty("Name is required"),
    Establishment : z.string().nonempty("Date of Establishment is required"),
    Description : z.string().nonempty("Describe about your Scoiety is required"),
    Head : z.string().nonempty("Society Head Name is required"),
    Coordinators : z.string().nonempty("Coordinators Name is required"),
    NoMembers : z.string().nonempty("No of members is required"),
    Category : z.string().nonempty("Category is required"),

})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const UpdateSociety = () => {

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
            Update society Information
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-md font-medium">Name of Society</label>
            <input
              type="text"
              className={`${classes}`}
              {...register("Name")}
              placeholder="Enter Name of the Society"
            />
            {errors.Name && (
              <span className="text-red-500">{errors.Name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Date of Establishment
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Establishment")}
              placeholder="Enter Date"
            />
            {errors.Establishment && (
              <span className="text-red-500">
                {errors.Establishment.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Describe Your Society</label>
            <textarea
              className={`${classes}`}
              {...register("Description")}
              placeholder="Enter Society description"
            ></textarea>
            {errors.Description && (
              <span className="text-red-500">{errors.Description.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society Head Name</label>
            <input
              placeholder="Enter Society Head Name"
              {...register("Head")}
              type="text"
              className={`${classes}`}
            />
            {errors.Head && (
              <span className="text-red-500">{errors.Head.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Society coordinators Name</label>
            <input
              placeholder="Enter Society Coordinators Name"
              {...register("Coordinators")}
              type="text"
              className={`${classes}`}
            />
            {errors.Coordinators && (
              <span className="text-red-500">{errors.Coordinators.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Number of Members</label>
            <input
              placeholder="Enter Number of members"
              {...register("NoMembers")}
              type="text"
              className={`${classes}`}
            />
            {errors.NoMembers && (
              <span className="text-red-500">{errors.NoMembers.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Category of Society</label>
            <input
              placeholder="Enter Category of Society"
              {...register("Category")}
              type="text"
              className={`${classes}`}
            />
            {errors.Category && (
              <span className="text-red-500">{errors.Category.message}</span>
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

export default UpdateSociety