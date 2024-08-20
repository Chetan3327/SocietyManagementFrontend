import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const schema = z.object({
  Description: z.string().nonempty(" News description is required"),
  DateOfNews: z.date(),
  Author: z.string().nonempty("Author is required"),
  SocietyID: z.number(),
  NewsID: z.number(),
  Title: z.string().nonempty("News Title is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const UpdateNews = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  let { newsID } = useParams()
  const NEWSID: number | null = newsID ? parseInt(newsID, 10) : null;
 
  if (NEWSID === null) {
    return (
      <div className="text-2xl font-semibold">Invalid news id</div>
    )
  }

  type formData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formData) => {

    axios.put(`${BACKEND_URL}/news/${NEWSID}`, data).then((response) => {
      setSubmit(true)
      setIsError(false)
      setError('')
      console.log('data given : ', data)
      console.log('response back : ', response)
      setTimeout(() => {
        navigate('/admin/news/')
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
            Update News Details
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update News Form
        </h2>
        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">News updated successfully ! Redirecting to all news page</div>}

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type='number'
              {...register("SocietyID"), { valueAsNumber: true }}
              placeholder="Enter Society ID" required
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">News ID</label>
            <input
              className={`${classes}`}
              type='number'
              {...register("NewsID"), { valueAsNumber: true }}
              value={NEWSID}
              placeholder="Enter a unique NewsID" readOnly
            />
            {errors.NewsID && (
              <span className="text-red-500">{errors.NewsID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">News Title</label>
            <textarea
              className={`${classes}`}
              {...register("Title")}
              placeholder="Enter News Title"
            ></textarea>
            {errors.Title && (
              <span className="text-red-500">{errors.Title.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">News Description</label>
            <textarea
              className={`${classes}`}
              {...register("Description")}
              placeholder="Enter News description"
            ></textarea>
            {errors.Description && (
              <span className="text-red-500">{errors.Description.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
              Date of News
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("DateOfNews", { valueAsDate: true })}
              placeholder="Enter Date of the news"
            />
            {errors.DateOfNews && (
              <span className="text-red-500">
                {errors.DateOfNews.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Author Name</label>
            <input
              placeholder="Author/Society of the News"
              {...register("Author")}
              type="text"
              className={`${classes}`}
            />
            {errors.Author && (
              <span className="text-red-500">{errors.Author.message}</span>
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

export default UpdateNews