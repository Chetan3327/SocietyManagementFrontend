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
      <>
         <div className="relative mx-auto w-full">
                <img
                    className="w-full h-80 blur-sm"
                    src="https://th.bing.com/th/id/OIP.xxSQ2fPtgcP8x4k8aD-ujgHaDt?w=331&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    alt="Member spotlight intro"
                />   
                <div className="absolute inset-0 py-20 lg:py-28 ">

                    <h2 className="text-black text-center text-4xl text-bold">We'd love to hear from you!</h2>
                    <p className="text-white text-center my-10 text-xl">Whether you have questions, feedback, or need assistance, our team is here to help. <br /> Reach out to us through any of the following methods:</p>
                </div>
        </div>
         <div className='h-full w-full flex items-center justify-center flex-col bg-white py-10 sm:py-20 px-4'>
              <form onSubmit={handleSubmit(onSubmit)}
               className='bg-white p-6 rounded-lg shadow-lg w-full max-w-screen-md'
              >
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


             <h2 className='text-3xl font-bold text-center text-gray-900'>Contact Form</h2>
             <p className='text-center text-gray-900 mb-4'>Fill out the form below, and we will get back to you as soon as possible. </p>

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
      </>
    )
}

export default ContactUs;