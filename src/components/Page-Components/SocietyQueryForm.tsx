import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
    StudentName: z.string().nonempty('Student name is required'),
    StudentEnrollmentNumber: z.string().length(11, 'Invalid enrollment number'),
    StudentBatch: z.string().nonempty('Invalid batch'),
    Branch: z.string().nonempty('Branch name is must'),
    Query: z.string().nonempty('This field is required')
})

const Branch = [
    "CSE",
    "IT",
    "CSE-DS",
    "ECE",
    "EEE",
];

const Batch = [
    "2020-2024",
    "2021-2025",
    "2022-2026",
    "2023-2027",
    "2024-2028",
    "2025-2029",
];

const classes = 'w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded'

const SocietyQueryForm = () => {
    type formData = z.infer<typeof schema>
    const { control, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data: formData) => {
        console.log(data)
    }
    return (
        <>
        <div className="relative mt-0 mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-white text-center text-4xl text-bold">ENGAGE WITH YOUR SOCIETY </h2>
                    <p className="text-white text-center my-5 text-xl">STEP INTO CAMPUS LIFE: REACH OUT TO YOUR SOCIETY! <br /> CONNECT AND THRIVE</p>
                </div>
        </div>
        <div className='max-w-lg mx-auto mt-8 p-4 border rounded-md'>
            
        <h2 className='text-3xl font-bold text-center text-gray-900'>Social Media</h2>
             <p className='text-center text-gray-900 mb-4'>Follow us and send us a message on Facebook, Twitter, and Instagram. </p>
             <div className='flex'>
              <h2 className="mb-6 text-xl font-bold uppercase text-yellow-400 justify-center mt-7 ">
                Follow us:
              </h2>
              <ul className="text-gray-500  font-large flex">
                <li className="m-4">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-tVE-R6e5Uw_LRnOl1kC5MMXciei-j0VQ&s"
                      alt="LinkedIn"
                      className="w-20 h-30 rounded-full border-2 border-blue"
                    />
                  </a>
                </li>
                <li className="m-4">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://th.bing.com/th?id=OIP.-ZirgQE5pr8e7htQWowJIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Instagram"
                      className="w-10 h-30 rounded-full border-2 border-pink-600 mt-2"
                    />
                  </a>
                </li>
              </ul>
            </div>


            <h2 className='text-3xl font-semibold text-center mb-6'>Society Query Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Student Name</label>
                    <input className={`${classes}`} type='text'
                        {...control.register('StudentName')} placeholder='Enter your name'
                    />
                    {errors.StudentName && <span className='text-red-500'>{errors.StudentName.message}</span>}
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Enrollment Number</label>
                    <input className={`${classes}`} type='text'
                        {...control.register('StudentEnrollmentNumber')} placeholder='Enter your enrollment number'
                    />
                    {errors.StudentEnrollmentNumber && <span className='text-red-500'>{errors.StudentEnrollmentNumber.message}</span>}
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Batch</label>
                    <select {...control.register('StudentBatch')} className={`${classes}`} >
                        {
                            Batch.map((soc, index) => (
                                <option value={soc} key={index}>{soc}</option>
                            ))
                        }
                    </select>
                    {errors.StudentBatch && <span className='text-red-500'>{errors.StudentBatch.message}</span>}
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Branch</label>
                    <select {...control.register('Branch')} className={`${classes}`} >
                        {
                            Branch.map((soc, index) => (
                                <option value={soc} key={index}>{soc}</option>
                            ))
                        }
                    </select>
                    {errors.Branch && <span className='text-red-500'>{errors.Branch.message}</span>}
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium'>Query</label>
                    <textarea
                        placeholder='Write your query here'
                        {...control.register('Query')} className={`${classes}`}
                    ></textarea>
                    {errors.Query && <span className='text-red-500'>{errors.Query.message}</span>}
                </div>

                <button type='submit' className='w-full px-2 py-3 mb-4 text-xl bg-gray-800 text-white'>Submit</button>

            </form>
        </div>
        </>
    )
}

export default SocietyQueryForm