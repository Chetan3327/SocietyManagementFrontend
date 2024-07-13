import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { SmileIcon , MehIcon, FrownIcon } from 'lucide-react'
import { useState } from 'react'

const schema = z.object({
    smileyRating : z.string().nonempty('This field is required'),
    comments : z.string().optional()
})

const FeedbackForm = () =>{

   const [submit , setSubmit] = useState(false)
    type formData = z.infer<typeof schema>

    const {control , handleSubmit , formState : {errors} }= useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data : formData) => {
        setSubmit(true)
        console.log(data)
    }

    return(
        <div className='max-w-lg mx-auto mt-8 p-4 '>
           <h2 className='text-3xl font-semibold text-center mb-4'>Let us know your thoughts </h2>
           <form onSubmit={handleSubmit(onSubmit)}>

               <div className='mb-4 mt-6'>
                 <label className='block text-md font-medium '>Give your ratings</label>
                 <Controller
                  name = 'smileyRating'
                  defaultValue=''
                  control={control}
                  render={ ({field})=> (
                       <div className='flex justify-around mt-2'>
                           <button type='button' className='text-2xl' onClick={()=> field.onChange('happy')}>
                             <SmileIcon className={`cursor-pointer ${field.value==='happy' ? 'text-green-500' : 'text-black-900'}`}/>
                           </button>
                           <button type='button' className='text-xl' onClick={()=> field.onChange('neutral')}>
                             <MehIcon className={`cursor-pointer ${field.value==='neutral' ? 'text-yellow-500' : 'text-black-900'}`}/>
                           </button>
                           <button type='button' className='text-xl' onClick={()=> field.onChange('sad')}>
                             <FrownIcon className={`cursor-pointer ${field.value==='sad' ? 'text-red-500' : 'text-black-900'}`}/>
                           </button>
                        </div>
                  )
                  }
                 />
                 {errors.smileyRating && <span className='text-red-500'>{errors.smileyRating.message}</span>}
               </div>

               <div className='mb-4 mt-6'>
                   <label className='block text-md font-medium'>Additional Comments</label>
                   <textarea
                    placeholder='please provide your valuable comments'
                    {...control.register('comments')}  className='w-full px-3 py-1 block mt-2 h-20 border border-black-900 border-md text-gray-900'
                   ></textarea>
               </div>
             
               <button type='submit' className='w-full px-2 py-3 mb-4 mt-4 text-xl bg-gray-800 text-white'>Submit</button>
              
           </form>
                {submit && <span className='text-xl'>Thank you for your valuable feedback !!!</span>}
        </div>
    )
}

export default FeedbackForm;