import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = z.object({
  Image : z.string().nonempty("image is required"),
  GalleryID : z.number(),
  SocietyID : z.number()
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateGallery = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  type formData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formData) => {
    console.log(data)
    axios.post(`${BACKEND_URL}/admin/gallery`, data).then((response) => {
      console.log(response)
      setSubmit(true)
      setIsError(false)
      setError('')
      setTimeout(() => {
        navigate('/admin/gallery/')
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
            Create Gallery for your Society
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
            Create Society Gallery Form
        </h2>

        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Form submitted successfully ! Redirecting to all members page</div>}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Gallery ID</label>
            <input
              className={`${classes}`}
              type="number"
              {...register("GalleryID", { valueAsNumber: true })}
              placeholder="Enter Gallery ID"
            />
            {errors.GalleryID && (
              <span className="text-red-500">{errors.GalleryID.message}</span>
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
            <label className="block text-md font-medium">Image Link</label>
            <textarea
              placeholder="Enter link of the image"
              {...register("Image")}
              className={`${classes}`}
            ></textarea>
            {errors.Image && (
              <span className="text-red-500">{errors.Image.message}</span>
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

export default CreateGallery