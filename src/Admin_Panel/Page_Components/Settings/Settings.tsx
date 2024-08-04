import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Sidebar from '../Sidebar/Sidebar'

const ProfileSchema = z.object({
    FirstName: z.string().nonempty('This field is required'),
    LastName: z.string().nonempty('This field is required'),
    Email: z.string().nonempty('This field is required'),
    PhoneNumber: z.string().length(10, 'The phone number is invalid'),
    CurrentPassword: z.string().nonempty('This field is required'),
    NewPassword: z.string().nonempty('This field is required'),
    ConfirmPassword: z.string().nonempty('This field is required'),
    Notifications: z.string().optional(),
})



const Settings = () => {

    const [_, setSubmit] = useState(false)
    type ProfileData = z.infer<typeof ProfileSchema>


    const { register, handleSubmit, formState: { errors } } = useForm<ProfileData>({
        resolver: zodResolver(ProfileSchema)
    })

    const onSubmit = (data: ProfileData) => {
        setSubmit(true)
        console.log(data)
    }
    return (
        <div className="flex gap-2 w-screen overflow-x-hidden">
            <Sidebar/>
        <div>
            <h1 className='text-2xl font-semibold mt-10 lg:pl-10 pl-4'>Account Settings</h1>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col lg:flex-row lg:space-x-10 pt-10 w-screen lg:ml-20'>
                        <div className='lg:w-1/3'>
                            <h2 className='text-lg mb-4 pl-4'>Edit Profile</h2>
                            <div className='border border-md border-gray-600 px-4 py-8 '>
                                <div className='flex flex-col space-y-1 mb-4'>
                                    <label>First Name</label>
                                    <input
                                        type='text' {...register('FirstName')} placeholder='First Name ' className='bg-gray-200 p-2 rounded '
                                    />

                                    {errors.FirstName && <span className='text-red-500'>{errors.FirstName.message}</span>}
                                </div>
                                <div className='flex flex-col space-y-1 mb-4'>
                                    <label>Last Name</label>
                                    <input
                                        type='text' {...register('LastName')} placeholder='Last Name ' className='bg-gray-200 p-2 rounded '
                                    />
                                    {errors.LastName && <span className='text-red-500'>{errors.LastName.message}</span>}
                                </div>
                                <div className='flex flex-col space-y-1 mb-4'>
                                    <label>Phone number</label>
                                    <input
                                        type='text' {...register('PhoneNumber')} placeholder='Phone number' className='bg-gray-200 p-2 rounded '
                                    />
                                </div>
                                {errors.PhoneNumber && <span className='text-red-500'>{errors.PhoneNumber.message}</span>}
                                <div className='flex flex-col space-y-1 mb-4'>
                                    <label>Email</label>
                                    <input
                                        type='email' {...register('Email')} placeholder='Email ' className='bg-gray-200 p-2 rounded '
                                    />
                                    {errors.Email && <span className='text-red-500'>{errors.Email.message}</span>}
                                </div>
                            </div>
                        </div>

                        <div className='lg:w-1/3'>
                            <h2 className='text-lg mb-4 mt-4 lg:mt-0  pl-4'>Change Password</h2>
                            <div className='border border-md border-gray-600 px-4 py-8 max-w-2xl'>
                                <div className='flex flex-col space-y-1 mb-4'>
                                    <label>Current Password</label>
                                    <input
                                        type='password' {...register('CurrentPassword')} placeholder='Current Password ' className='bg-gray-200 p-2 rounded '
                                    />
                                    {errors.CurrentPassword && <span className='text-red-500'>{errors.CurrentPassword.message}</span>}
                                </div>
                                <div className='flex flex-col lg:flex-row lg:space-x-4'>
                                    <div className='flex flex-col space-y-1 mb-4'>
                                        <label>New Password</label>
                                        <input
                                            type='password' {...register('NewPassword')} placeholder='New Password ' className='bg-gray-200 p-2 rounded '
                                        />
                                        {errors.NewPassword && <span className='text-red-500'>{errors.NewPassword.message}</span>}
                                    </div>
                                    <div className='flex flex-col space-y-1 mb-4'>
                                        <label>Confirm Password</label>
                                        <input
                                            type='password' {...register('ConfirmPassword')} placeholder='Confirm Password ' className='bg-gray-200 p-2 rounded '
                                        />
                                        {errors.ConfirmPassword && <span className='text-red-500'>{errors.ConfirmPassword.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col space-y-1 mb-4 text-lg mb-4 mt-4  pl-4 lg:pl-0'>
                                <label>Notifications</label>
                                <textarea
                                    className='bg-gray-200 p-2 rounded '
                                >
                                </textarea>
                                {errors.Notifications && <span className='text-red-500'>{errors.Notifications.message}</span>}
                            </div>

                            <div className='flex justify-around'>
                                <button className='bg-blue-500 text-white px-8 py-2' type='submit'>Save</button>
                                <button className='bg-gray-500 text-black px-8 py-2'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Settings