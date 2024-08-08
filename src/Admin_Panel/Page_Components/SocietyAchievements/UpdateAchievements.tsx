import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    Date : z.string().nonempty("Date is required"),
    Achievement : z.string().nonempty("Achievement is required"),
    AchievementID : z.string().nonempty("AchievementID is required"),
    SocietyID : z.string().nonempty("SocietyID is required"),
    Description : z.string().nonempty("Description is required"),
})
const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const CreateAchievement = () => {

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
            Update Society Achievement Details
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
            Update Society Achievement Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
            <label className="block text-md font-medium">Achievement ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("AchievementID")}
              placeholder="Enter Testimonial ID"
            />
            {errors.AchievementID && (
              <span className="text-red-500">{errors.AchievementID.message}</span>
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
            <label className="block text-md font-medium">Achievement Title</label>
            <textarea
              placeholder="Enter the achievement title"
              {...register("Achievement")}
              className={`${classes}`}
            ></textarea>
            {errors.AchievementID && (
              <span className="text-red-500">{errors.AchievementID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Achievement Description</label>
            <textarea
              placeholder="More about the achievement"
              {...register("Description")}
              className={`${classes}`}
            ></textarea>
            {errors.Description && (
              <span className="text-red-500">{errors.Description.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Date of Achievement
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Date")}
              placeholder="Enter Date of the achievement"
            />
            {errors.Date && (
              <span className="text-red-500">
                {errors.Date.message}
              </span>
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

export default CreateAchievement