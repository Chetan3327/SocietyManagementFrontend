import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
    StudentName: z.string().nonempty('Student name is required'),
    StudentEnrollmentNumber: z.string().length(11, 'Invalid enrollment number'),
    StudentBatch: z.string().length(4, 'Invalid batch'),
    SocietyName: z.string().nonempty('Society name is must'),
    Query: z.string().nonempty('This field is required')
})

const technicalSocieties = [
    "WIBD",
    "Namespace",
    "GDSC",
    "IEEE",
    "#Define",
    "WIE",
    "Anveshan",
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
        <div className='max-w-lg mx-auto mt-8 p-4 '>
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
                    <input className={`${classes}`} type='text'
                        {...control.register('StudentBatch')} placeholder='Enter your batch'
                    />
                    {errors.StudentBatch && <span className='text-red-500'>{errors.StudentBatch.message}</span>}
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Society Name</label>
                    <select {...control.register('SocietyName')} className={`${classes}`} >
                        {
                            technicalSocieties.map((soc, index) => (
                                <option value={soc} key={index}>{soc}</option>
                            ))
                        }
                    </select>
                    {errors.SocietyName && <span className='text-red-500'>{errors.SocietyName.message}</span>}
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
    )
}

export default SocietyQueryForm