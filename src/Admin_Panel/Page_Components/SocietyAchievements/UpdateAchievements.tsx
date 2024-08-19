import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = z.object({
  DateAchieved: z.date(),
  SocietyAchievementID: z.number(),
  SocietyID: z.number(),
  Title: z.string().nonempty("Title is required"),
  Description: z.string().nonempty("Description is required"),
})

// type AchievementType = {
//   SocietyID : number ,
//   SocietyAchievementID : number ,
//   Title : string ,
//   Description : string ,
//   DateAchieved : Date 
// }
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const UpdateAchievement = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  let { achievementID } = useParams()
  const ACHIEVEMENTID: number | null = achievementID ? parseInt(achievementID, 10) : null;

  if (ACHIEVEMENTID === null) {
    return (
      <div className="text-2xl font-semibold">Invalid  id</div>
    )
  }

  type formData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formData) => {
    console.log('in submit')
    console.log(data)
    axios.put(`${BACKEND_URL}/achievements/${ACHIEVEMENTID}`, data).then((response) => {
      console.log(response)
      setSubmit(true)
      setIsError(false)
      setError('')
      setTimeout(() => {
        navigate('/admin/societyAchievements/')
      }, 3000)
    }).catch((error) => {
      console.log(error)
      setSubmit(false)
      setIsError(true)
      setError(error)
    })
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
            Create Society Achievement
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create Society Achievement Form
        </h2>
        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Achievement updated successfully ! Redirecting to all achievements page</div>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Achievement ID</label>
            <input
              className={`${classes}`}
              type="number"
              {...register("SocietyAchievementID", { valueAsNumber: true })}
              placeholder="Enter Testimonial ID"
            />
            {errors.SocietyAchievementID && (
              <span className="text-red-500">{errors.SocietyAchievementID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type="number"
              {...register("SocietyID", { valueAsNumber: true })}
              placeholder="Enter Society ID"
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Title")}
              placeholder="Enter Society ID"
            />
            {errors.Title && (
              <span className="text-red-500">{errors.Title.message}</span>
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
              {...register("DateAchieved", { valueAsDate: true })}
              placeholder="Enter Date of the achievement"
            />
            {errors.DateAchieved && (
              <span className="text-red-500">
                {errors.DateAchieved.message}
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

export default UpdateAchievement