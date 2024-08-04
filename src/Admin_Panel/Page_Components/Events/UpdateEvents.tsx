import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  Events : z.string().nonempty("Events is required"),
  Date : z.string().nonempty("Date is required"),
  Society : z.string().nonempty("society is required"),
  SocietyID : z.string().nonempty("societyID is required"),
  EventID : z.string().nonempty("EventID is required"),
  title : z.string().nonempty("title is required"),
  EventType : z.string().nonempty("EventType is required"),
  EventMode : z.string().nonempty("EventMode is required"),
  EventLocation : z.string().nonempty("EventLocation is required"),
  Link : z.string().nonempty("Link is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const UpdateEvents = () => {

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
            Update Events Information
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

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
            <label className="block text-md font-medium">Event ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("EventID")}
              placeholder="Enter a unique EventID"
            />
            {errors.EventID && (
              <span className="text-red-500">{errors.EventID.message}</span>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-md font-medium">Event Title</label>
            <textarea
              className={`${classes}`}
              {...register("title")}
              placeholder="Enter Event's Title"
            ></textarea>
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Description</label>
            <textarea
              className={`${classes}`}
              {...register("Events")}
              placeholder="Enter Event's description"
            ></textarea>
            {errors.Events && (
              <span className="text-red-500">{errors.Events.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Type</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("EventType")}
              placeholder="Enter the Event's Type, ex, competition,.. "
            />
            {errors.EventType && (
              <span className="text-red-500">{errors.EventType.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Mode Of Event</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("EventMode")}
              placeholder="Online, Offline,..."
            />
            {errors.EventMode && (
              <span className="text-red-500">{errors.EventMode.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Location</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("EventLocation")}
              placeholder="Seminar Hall, Google Meet,..."
            />
            {errors.EventLocation && (
              <span className="text-red-500">{errors.EventLocation.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event's Link</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Link")}
              placeholder="Enter the Event's Link, if any"
            />
            {errors.Link && (
              <span className="text-red-500">{errors.Link.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Event's Date 
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Date")}
              placeholder="Enter Date"
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
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default UpdateEvents