import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

const AddCoordinator = () => {
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
            Add Coordinator Details
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          New Coordinator Form
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
            <label className="block text-md font-medium">Coordinator ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("CoordinatorID")}
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

export default AddCoordinator