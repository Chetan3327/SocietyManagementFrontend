import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = z.object({
  SocietyName:z.string(),
  Roledescription:z.string(),
    Rolename : z.string().nonempty("RoleName is required"),
    RoleType : z.string().nonempty("RoleType is required"),
    Role : z.string().nonempty("Role is required"),
    RoleID : z.string().nonempty("RoleID is required"),
    SocietyID : z.string().nonempty("SocietyID is required"),
    Date : z.string().nonempty("Date is required"),
    // Responsibilities : z.string().nonempty("Responsibilities is required"),
    Link : z.string().nonempty("Link is required"),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const CreateRole = () => {
  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  type formData = z.infer<typeof schema>

  const { register, handleSubmit, formState: { errors } } = useForm<formData>({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: formData) => {
    // const formattedData = {
    //   ...data,
    //   SocietyID: parseInt(data.SocietyID, 10),
    //   NewsID: parseInt(data.NewsID, 10),
    //   DateOfNews: new Date(data.DateOfNews),}
    console.log('in submit')
    console.log(data)
    axios.post(`${BACKEND_URL}/admin/roels`, data).then((response) => {
      console.log(response)
      setSubmit(true)
      setIsError(false)
      setError('')
      setTimeout(() => {
        navigate('/admin/roles/')
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
            Create Society Role
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
            Create Society Role Form
        </h2>

        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Form submitted successfully ! Redirecting to all roles page</div>}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-md font-medium">Role ID</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("RoleID")}
              placeholder="Enter Role ID"
            />
            {errors.RoleID && (
              <span className="text-red-500">{errors.RoleID.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society Name</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("SocietyName")}
              placeholder="Enter Society Name"
            />
            {errors.SocietyName && (
              <span className="text-red-500">{errors.SocietyName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Name</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("Rolename")}
              placeholder="Enter Role Name"
            />
            {errors.Rolename && (
              <span className="text-red-500">{errors.Rolename.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Type</label>
            <input
              className={`${classes}`}
              type="text"
              {...register("RoleType")}
              placeholder="Enter Type of the Role"
            />
            {errors.RoleType && (
              <span className="text-red-500">{errors.RoleType.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Description</label>
            <textarea
              placeholder="Enter your reviews"
              {...register("Role")}
              className={`${classes}`}
            ></textarea>
            {errors.Role && (
              <span className="text-red-500">{errors.Role.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Last Date for Application</label>
            <input
              className={`${classes}`}
              type="date"
              {...register("Date")}
              placeholder="Last Date to apply for the role"
            />
            {errors.Date && (
              <span className="text-red-500">
                {errors.Date.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Description</label>
            <textarea
              placeholder="Description of the role"
              {...register("Roledescription")}
              className={`${classes}`}
            ></textarea>
            {errors.Roledescription && (
              <span className="text-red-500">{errors.Roledescription.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Role Link</label>
            <input
              placeholder="Link to apply for the role"
              {...register("Link")}
              className={`${classes}`}
            ></input>
            {errors.Link && (
              <span className="text-red-500">{errors.Link.message}</span>
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

export default CreateRole