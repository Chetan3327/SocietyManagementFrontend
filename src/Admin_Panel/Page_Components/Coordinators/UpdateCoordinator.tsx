import {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = z.object({
  CoordinatorName : z.string().nonempty("Coordinator name is required"),
  CoordinatorPosition : z.string().nonempty("Coordinator position is required"),
  CoordinatorDescription : z.string().nonempty("This field is required"),
  Image : z.string().nonempty("Coordinator Image is required"),
  SocietyID : z.string().nonempty("SocietyID is required"),
  CoordinatorID : z.string().nonempty("CoordinatorID is required"),
  CoordinatorEmail : z.string().nonempty("CoordinatorEmail is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const UpdateCoordinatorForm = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  let { coordinatorID } = useParams()
  const COORDINATORID: number | null = coordinatorID ? parseInt(coordinatorID, 10) : null;
 
  if (COORDINATORID === null) {
    return (
      <div className="text-2xl font-semibold">Invalid  id</div>
    )
  }
    type formData = z.infer<typeof schema>

    const {register , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data : formData) => {
      axios.put(`${BACKEND_URL}/coordinator/${COORDINATORID}`, data).then((response) => {
        setSubmit(true)
        setIsError(false)
        setError('')
        console.log('data given : ', data)
        console.log('response back : ', response)
        setTimeout(() => {
          navigate('/admin/coordinators/')
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
          Update Coordinator Details
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
           Coordinator Details Update Form
        </h2>
        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Coordinator details updated successfully ! Redirecting to all coordinators page</div>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("SocietyID", { valueAsNumber: true })}
              placeholder="Enter Society ID"
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Coordinator ID</label>
            <input
              className={`${classes}`}
              type="text" value={COORDINATORID} readOnly
              {...register("CoordinatorID", { valueAsNumber: true })}
              placeholder="Enter Coordinator ID"
            />
            {errors.CoordinatorID && (
              <span className="text-red-500">{errors.CoordinatorID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Coordinator Name</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("CoordinatorName")}
              placeholder="Enter coordinator name"
            />
            {errors.CoordinatorName && (
              <span className="text-red-500">{errors.CoordinatorName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Coordinator Designation
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("CoordinatorPosition")}
              placeholder="Enter coordinator position"
            />
            {errors.CoordinatorPosition && (
              <span className="text-red-500">
                {errors.CoordinatorPosition.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Coordinator Email
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("CoordinatorEmail")}
              placeholder="Enter Coordinator Email"
            />
            {errors.CoordinatorEmail && (
              <span className="text-red-500">
                {errors.CoordinatorEmail.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Coordinator Description</label>
            <textarea
              placeholder="Write the coordinator description  here"
              {...register("CoordinatorDescription")}
              className={`${classes}`}
            ></textarea>
            {errors.CoordinatorDescription && (
              <span className="text-red-500">{errors.CoordinatorDescription.message}</span>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-md font-medium">
            Coordinator Image
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Image")}
              placeholder="Enter coordinator's image link"
            />
            {/* {errors.Image && (
              <span className="text-red-500">
                {errors.Image.message}
              </span>
            )} */}
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

export default UpdateCoordinatorForm