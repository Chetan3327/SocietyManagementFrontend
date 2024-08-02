import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    News : z.string().nonempty(" News is required"),
    Date : z.string().nonempty("Date is required"),
    Society : z.string().nonempty("society is required"),
    Category : z.string().nonempty("Category is required"),
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
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          New News Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-md font-medium">News</label>
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
            Date 
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

          <div className="mb-4">
            <label className="block text-md font-medium">Society Name</label>
            <input
              placeholder="Enter Society Name"
              {...register("Society")}
              type="text"
              className={`${classes}`}
            />
            {errors.Society && (
              <span className="text-red-500">{errors.Society.message}</span>
            )}
          </div>

          
          <div className="mb-4">
            <label className="block text-md font-medium">
            News Category
            </label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Category")}
              placeholder="Enter category of the news"
            />
            {errors.Category && (
              <span className="text-red-500">
                {errors.Category.message}
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

export default AddNews