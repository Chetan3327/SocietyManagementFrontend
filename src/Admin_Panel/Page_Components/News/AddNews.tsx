import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Title } from 'chart.js';

const schema = z.object({
    News : z.string().nonempty(" News is required"),
    Date : z.string().nonempty("Date is required"),
    Society : z.string().nonempty("society is required"),
    SocietyID : z.string().nonempty("SocietyID is required"),
    NewsID : z.string().nonempty("NewsID is required"),
    title : z.string().nonempty("News Title is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";

const AddNews = () => {

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
            Add News Details
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          New News Form
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
            <label className="block text-md font-medium">News ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("NewsID")}
              placeholder="Enter a unique NewsID"
            />
            {errors.NewsID && (
              <span className="text-red-500">{errors.NewsID.message}</span>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-md font-medium">News Title</label>
            <textarea
              className={`${classes}`}
              {...register("title")}
              placeholder="Enter News Title"
            ></textarea>
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">News Description</label>
            <textarea
              className={`${classes}`}
              {...register("News")}
              placeholder="Enter News description"
            ></textarea>
            {errors.News && (
              <span className="text-red-500">{errors.News.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Date of News
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Date")}
              placeholder="Enter Date of the news"
            />
            {errors.Date && (
              <span className="text-red-500">
                {errors.Date.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Author Name</label>
            <input
              placeholder="Author/Society of the News"
              {...register("Society")}
              type="text"
              className={`${classes}`}
            />
            {errors.Society && (
              <span className="text-red-500">{errors.Society.message}</span>
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

export default AddNews