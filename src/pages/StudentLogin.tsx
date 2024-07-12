import user_icon from '../assets/user_icon.jpg'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


const schema = z.object({
    StudentName: z.string().nonempty('Student name is required'),
    EnrollmentNumber: z.string().length(11, 'Invalid enrollment number'),
    BatchNumber: z.string().length(4, 'Invalid batch number')
})

const StudentLogin = () => {

    type formData = z.infer<typeof schema>

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: formData) => {

        console.log(data)
    }

    return (
        <div className="relative bg-cover bg-centre h-screen"
            //    dummy image used here backaground image 
            style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7')` }}
        >
            <div className=" z-10 h-full flex items-center justify-center ">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg w-full max-w-lg">
                    <img
                        src={user_icon} alt='user-icon' className='h-20 w-20 mx-auto'
                    />
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-6'>

                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Student Name</label>
                            <input placeholder="Name"
                                {...register('StudentName')} className="w-full p-2 rounded"
                            />
                            {errors.StudentName && <span className="text-red-500">{errors.StudentName.message}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Enrollment Number</label>
                            <input placeholder="Enrollment Number"
                                {...register('EnrollmentNumber')} className="w-full p-2 rounded"
                            />
                            {errors.EnrollmentNumber && <span className="text-red-500">{errors.EnrollmentNumber.message}</span>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Batch Number</label>
                            <input placeholder="Batch Number"
                                {...register('BatchNumber')} className="w-full p-2 rounded"
                            />
                            {errors.BatchNumber && <span className="text-red-500">{errors.BatchNumber.message}</span>}
                        </div>

                        <button type='submit' className='w-full p-2 bg-gray-900 rounded-md text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin;