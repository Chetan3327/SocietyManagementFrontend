import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate, useParams ,useLocation} from "react-router-dom";

const schema = z.object({
  TestimonialDescription: z.string().nonempty("Testimonial is required"),
  EnrollmentNo: z.number(),
  TestimonialID: z.number(),
  SocietyID: z.number(),
})

// type TestimonialType={
//   TestimonialID : number ,
//   SocietyID : number ,
//   EnrollmentNo : number ,
//   TestimonialDescription : string ,
// }

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const CreateTestimonial = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation();

  let { testimonialID } = useParams()
  const {testimonial}= location.state || {};
  console.log('in testimonial',testimonial)
  const TESTMONIALID: number | null = testimonialID ? parseInt(testimonialID, 10) : null;

  if (TESTMONIALID === null) {
    return (
      <div className="text-2xl font-semibold">Invalid  id</div>
    )
  }

  type formData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formData) => {
    axios.put(`${BACKEND_URL}/testimonials/${TESTMONIALID}`, data).then((response) => {
      setSubmit(true)
      setIsError(false)
      setError('')
      console.log('data given : ', data)
      console.log('response back : ', response)
      setTimeout(() => {
        navigate('/admin/testimonials/')
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
            Update Testimonial
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Testimonial Form
        </h2>
        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Updated testimonials successfully ! Redirecting to all testimonials page</div>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type="number" defaultValue={testimonial.SocietyID} readOnly
              {...register("SocietyID", { valueAsNumber: true })}
              placeholder="Enter Society ID"
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Testimonial ID</label>
            <input
              className={`${classes}`}
              type="number"
              value={TESTMONIALID}
              {...register("TestimonialID", { valueAsNumber: true })}
              placeholder="Enter Testimonial ID" readOnly
            />
            {errors.TestimonialID && (
              <span className="text-red-500">{errors.TestimonialID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Enrollment No</label>
            <input
              className={`${classes}`}
              type="number" defaultValue={testimonial.EnrollmentNo}
              {...register("EnrollmentNo", { valueAsNumber: true })}
              placeholder="Enter Student's Enrollment No"
            />
            {errors.EnrollmentNo && (
              <span className="text-red-500">{errors.EnrollmentNo.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Testimonial Description</label>
            <textarea
              placeholder="Enter your reviews"  defaultValue={testimonial.TestimonialDescription}
              {...register("TestimonialDescription")}
              className={`${classes}`}
            ></textarea>
            {errors.TestimonialDescription && (
              <span className="text-red-500">{errors.TestimonialDescription.message}</span>
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

export default CreateTestimonial