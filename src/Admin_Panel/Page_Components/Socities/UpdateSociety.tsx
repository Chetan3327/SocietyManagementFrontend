import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useParams , useLocation} from "react-router-dom";
import axios from "axios";

const schema = z.object({
    SocietyID:z.string(),
    SocietyName : z.string().nonempty("Name is required"),
    DateOfRegistration : z.string().nonempty("Date of Establishment is required"),
    SocietyDescription : z.string().nonempty("Describe about your Scoiety is required"),
    SocietyHead : z.string().nonempty("Society Head Name is required"),
    SocietyType : z.string().nonempty("Category is required"),

})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const UpdateSociety = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

    let { societyId } = useParams()
    console.log(societyId)
    const SOCIETYID: number | null = societyId ? parseInt(societyId, 10) : null;

    const {society} = location.state || {};
    console.log('in society',society)
   
    if (SOCIETYID === null) {
      return (
        <div className="text-2xl font-semibold">Invalid society id</div>
      )
    }

    type formData = z.infer<typeof schema>

    const {register , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })


    const onSubmit = (data: formData) => {

      axios.put(`${BACKEND_URL}/societies/${SOCIETYID}`, data).then((response) => {
        setSubmit(true)
        setIsError(false)
        setError('')
        console.log('data given : ', data)
        console.log('response back : ', response)
        setTimeout(() => {
          navigate('/admin/societies/')
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
            Update society Information
          </h2>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Details
        </h2>

        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Society Data updated successfully</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
            <label className="block text-md font-medium">Society ID</label>
            <input
              className={`${classes}`}
              type='number'
              value={SOCIETYID}
              {...register("SocietyID", { valueAsNumber: true })}
              placeholder="Enter Society ID" required
            />
            {errors.SocietyID && (
              <span className="text-red-500">{errors.SocietyID.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Name of Society</label>
            <input
              type="text"
              className={`${classes}`}
              {...register("SocietyName")} defaultValue={society?.SocietyName}
              placeholder="Enter Name of the Society"
            />
            {errors.SocietyName && (
              <span className="text-red-500">{errors.SocietyName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Date of Establishment
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("DateOfRegistration")}
              placeholder="Enter Date"
            />
            {errors.DateOfRegistration && (
              <span className="text-red-500">
                {errors.DateOfRegistration.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Describe Your Society</label>
            <textarea
              className={`${classes}`}
              {...register("SocietyDescription")}  defaultValue={society.SocietyDescription}
              placeholder="Enter Society description"
            ></textarea>
            {errors.SocietyDescription && (
              <span className="text-red-500">{errors.SocietyDescription.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Society Head Name</label>
            <input
              placeholder="Enter Society Head Name"
              {...register("SocietyHead")}
              type="text"      defaultValue={society.SocietyHead}
              className={`${classes}`}
            />
            {errors.SocietyHead && (
              <span className="text-red-500">{errors.SocietyHead.message}</span>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-md font-medium">Society coordinators Name</label>
            <input
              placeholder="Enter Society Coordinators Name"
              {...register("Coordinators")}
              type="text"
              className={`${classes}`}
            />
            {errors.Coordinators && (
              <span className="text-red-500">{errors.Coordinators.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-md font-medium">Number of Members</label>
            <input
              placeholder="Enter Number of members"
              {...register("NoMembers")}
              type="text"
              className={`${classes}`}
            />
            {errors.NoMembers && (
              <span className="text-red-500">{errors.NoMembers.message}</span>
            )}
          </div> */}
          <div className="mb-4">
            <label className="block text-md font-medium">Category of Society</label>
            <input
              placeholder="Enter Category of Society"
              {...register("SocietyType")}
              type="text"
              className={`${classes}`}
            />
            {errors.SocietyType && (
              <span className="text-red-500">{errors.SocietyType.message}</span>
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

export default UpdateSociety