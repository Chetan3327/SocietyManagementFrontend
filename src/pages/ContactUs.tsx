import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
    name : z.string().nonempty('Name is required'),
    email : z.string().nonempty('Email is required'),
    message : z.string().nonempty('Message is required'),
    contact : z.string().nonempty('Contact is required'),
    subject : z.string().nonempty('Subject is required'),
})

const ContactUs = () => {

    type formData = z.infer<typeof schema>

    const {register , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data : formData) => {
        console.log(data)
    }

    return(
         <div className='h-full w-full flex items-center justify-center flex-col bg-gray-100 py-10 sm:py-20 px-4'>
              <form onSubmit={handleSubmit(onSubmit)}
               className='bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md'
              >
             <h2 className='text-3xl font-bold text-center text-gray-900'>Contact Us</h2>
             <p className='text-center text-gray-900 mb-4'>Pls use the form below to contact us </p>

             <div className='flex flex-col sm:flex-row mb-2'>
                <label className='block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4' htmlFor='name'>Name</label>
                <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right '
                 type='text' id='name'
                 {...register('name')} placeholder='Enter your name'
                />
           
             </div>
             {errors.name && <span className='text-red-500 '>{errors.name.message}</span>}

             <div className='flex flex-col sm:flex-row mb-2'>
                <label className='block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4' htmlFor='email'>Email</label>
                <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right '
                 type='email' id='email'
                 {...register('email')} placeholder='Enter your email'
                
                />
                
             </div>
             {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

             <div className='flex flex-col sm:flex-row mb-2'>
                <label className='block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4' htmlFor='contact'>Contact</label>
                <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right '
                 type='text' id='contact'
                 {...register('contact')} placeholder='Enter your contact'

                />
                
             </div>
             {errors.contact && <span className='text-red-500'>{errors.contact.message}</span>}

             <div className='flex flex-col sm:flex-row mb-2'>
                <label className='block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4' htmlFor='subject'>Subject</label>
                <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right '
                 type='text' id='subject'
                 {...register('subject')} placeholder='Enter your subject'
                />
                
             </div>
             {errors.subject && <span className='text-red-500'>{errors.subject.message}</span>}

             <div className='flex flex-col sm:flex-row mb-2'>
                <label className='block text-gray-700 pt-2 font-bold md:text-left mb-1 sm:w-1/3 sm:pr-4' htmlFor='message'>Message</label>
                <textarea
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-right '
                  id='message' rows={4}
                 {...register('message')} placeholder='Enter your message'
                ></textarea>
                 
             </div>
             {errors.message && <span className='text-red-500'>{errors.message.message}</span>}

             <button type='submit' className='w-full px-2 py-3 mb-4 mt-4 text-xl bg-gray-800 text-white'>Submit</button>
              </form>
         </div>
    )
}

export default ContactUs;