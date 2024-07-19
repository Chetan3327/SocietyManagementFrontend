import {  useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '../ui/button'


const schema = z.object({
  firstName: z.string().nonempty('Student name is required'),
  lastName: z.string().nonempty('Last name is required'),
  email: z.string().nonempty('email is required'),
  EnrolmentNumber: z.string().length(11, 'Invalid enrollment number'),
  Branch: z.string().length(4, 'Invalid batch'),
  Message: z.string().nonempty('This field is required')
})

const classes = 'w-full px-3 py-1 block mt-2 border border-black-900 border-md text-gray-900 rounded'

const GetInTouchForm = () => {
    type formData = z.infer<typeof schema>
    const { control, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })
    const onSubmit = (data: formData) => {
        console.log(data)
    }
    return (
        <div className='max-w-lg mx-auto mt-8 p-4 rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5">
                    <div className='mb-4'>
                        <label className='block text-md font-medium'>First Name</label>
                        <input className={`${classes}`} type='text'
                            {...control.register('firstName')} placeholder='First Name'
                        />
                        {errors.firstName && <span className='text-red-500'>{errors.firstName.message}</span>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-md font-medium  '>Last Name</label>
                        <input className={`${classes}`} type='text'
                            {...control.register('lastName')} placeholder='Last name'
                        />
                        {errors.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}
                    </div>
                </div>

                <div className='mb-4'>
                    <label className='block text-md font-medium  '>Email</label>
                    <input className={`${classes}`} type='text'
                        {...control.register('email')} placeholder='email'
                    />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                </div>

                <div className='flex gap-5'>
                    <div className='mb-4'>
                        <label className='block text-md font-medium  '>Enrollment Number</label>
                        <input className={`${classes}`} type='text'
                            {...control.register('EnrolmentNumber')} placeholder='enrollment no.'
                        />
                        {errors.EnrolmentNumber && <span className='text-red-500'>{errors.EnrolmentNumber.message}</span>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-md font-medium  '>branch</label>
                        <input className={`${classes}`} type='text'
                            {...control.register('Branch')} placeholder='branch'
                        />
                        {errors.Branch && <span className='text-red-500'>{errors.Branch.message}</span>}
                    </div>
                </div>


                <div className='mb-4'>
                    <label className='block text-md font-medium'>Message</label>
                    <textarea
                        placeholder='Write a message.'
                        {...control.register('Message')} className={`${classes}`}
                    ></textarea>
                    {errors.Message && <span className='text-red-500'>{errors.Message.message}</span>}
                </div>
                <div className="flex justify-center"><Button className='bg-yellow-600' type='submit'>Submit</Button></div>
            </form>
        </div>
    )
}

export default GetInTouchForm