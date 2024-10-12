import  {useState} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useNavigate , useParams , useLocation} from "react-router-dom";

// type EventType = {
//   SocietyId : number,
//   EventId : number,
//   Title : string,
//   Description : string,
//   EventType : string,
//   ModeOfEvent : string,
//   Location : string,
//   LinkToEvent : string,
//   EventDateTime : Date
// }

const schema = z.object({
  SocietyName : z.string().nonempty('Society name is required'),
  EventID : z.number(),
  Title : z.string().nonempty('Title is required'),
  Description :  z.string().nonempty('Description is required'),
  EventType :  z.string().nonempty('Event type is required'),
  ModeOfEvent :  z.string().nonempty('Mode of event is required'),
  Location :  z.string().nonempty('Location is required'),
  LinkToEvent :  z.string().nonempty('Link of event is required'),
  EventDateTime : z.date(),
})

const classes = "w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const UpdateEvents = () => {

  const [submit, setSubmit] = useState(false)
  const [iserror, setIsError] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  let { eventsID }  = useParams()
    const EVENTSID : number | null = eventsID ? parseInt(eventsID,10) : null ;
    
    if(EVENTSID === null){
      return (
        <div className="text-2xl font-semibold">Invalid event id</div>
      )
    }

    type formData = z.infer<typeof schema>
    const {eventItem} = location.state || {}

    const {register , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data : formData) => {
      console.log('in submit')
      console.log(data)
      axios.put(`${BACKEND_URL}/events/${EVENTSID}`, data).then((response) => {
        console.log(response)
        setSubmit(true)
        setIsError(false)
        setError('')
        setTimeout(() => {
          navigate('/admin/events/')
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
            Update Event Details
          </h2>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Update Event Form
        </h2>

        {iserror && <div className="mt-4 p-4 text-red-500 text-lg font-semibold">{error}</div>}
        {submit && <div className="mt-4 p-4 text-green-500 text-lg font-semibold">Event updated successfully ! Redirecting to all events page</div>}


        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
            <label className="block text-md font-medium">Society name</label>
            <input
              className={`${classes}`}
              type="text"  defaultValue={eventItem.SocietyName}
              {...register("SocietyName")}
              placeholder="Enter Society ID"
            />
            {errors.SocietyName && (
              <span className="text-red-500">{errors.SocietyName.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event ID</label>
            <input
              className={`${classes}`}
              type="number" value={EVENTSID} readOnly
              {...register("EventID", { valueAsNumber: true })}
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
              {...register("Title")}  defaultValue={eventItem.Title}
              placeholder="Enter Event's Title"
            ></textarea>
            {errors.Title && (
              <span className="text-red-500">{errors.Title.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Description</label>
            <textarea
              className={`${classes}`}
              {...register("Description")}  defaultValue={eventItem.Description}
              placeholder="Enter Event's description"
            ></textarea>
            {errors.Description && (
              <span className="text-red-500">{errors.Description.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Type</label>
            <input
              className={`${classes}`}
              type="text"  defaultValue={eventItem.EventType}
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
              type="text"  defaultValue={eventItem.ModeOfEvent}
              {...register("ModeOfEvent")}
              placeholder="Online, Offline,..."
            />
            {errors.ModeOfEvent && (
              <span className="text-red-500">{errors.ModeOfEvent.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event Location</label>
            <input
              className={`${classes}`}
              type="text"  defaultValue={eventItem.Location}
              {...register("Location")}
              placeholder="Seminar Hall, Google Meet,..."
            />
            {errors.Location && (
              <span className="text-red-500">{errors.Location.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">Event's Link</label>
            <input
              className={`${classes}`}
              type="text"  defaultValue={eventItem.LinkToEvent}
              {...register("LinkToEvent")}
              placeholder="Enter the Event's Link, if any"
            />
            {errors.LinkToEvent && (
              <span className="text-red-500">{errors.LinkToEvent.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md font-medium">
            Event's Date 
            </label>
            <input
              className={`${classes}`}
              type="date"
              {...register("EventDateTime", { valueAsDate: true })}
              placeholder="Enter Date"
            />
            {errors.EventDateTime && (
              <span className="text-red-500">
                {errors.EventDateTime.message}
              </span>
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

export default UpdateEvents