import society from "../assets/student_login_bg.jpg";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


const formval = z.object({
    Name: z.string().nonempty('Name is required'),
    EnrollmentNumber: z.string().length(11, 'Invalid enrollment number'),
    Batch: z.string().length(4, 'Invalid batch number'),
    email:z.string().nonempty("email is required"),
    year:z.string().length(4,"Enter Valid Year"),
    branch:z.string().nonempty("enter a branch"),
    reason:z.string(),
    skill:z.string().nonempty("atleast 1 profile id is required")

})

const Societyjoiningform = () => {
    type formData = z.infer<typeof formval>

    const { register, handleSubmit, formState: { errors } } = useForm<formData>({
        resolver: zodResolver(formval)
    })

    const onSubmit = (data: formData) => {

        console.log(data)
    }

  return (
    <div className="flex w-full gap-10">
      <section className="w-2/3 flex justify-start items-start flex-col pl-7">
        <h1 className="text-4xl mt-6">Join Our Society</h1>
        <div className="h-10/12 flex items-center justify-start px-5 w-full">
                    <form onSubmit={handleSubmit(onSubmit)} className=' mt-6 flex flex-col w-full'>
                        <div className="flex gap-10">
                        <div className="w-2/4">
                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Student Name</label>
                            <input placeholder="Enter Name"
                                {...register('Name')} className="w-full p-1 rounded border border-black outline-none"
                            />
                            {errors.Name && <span className="text-red-500 block">{errors.Name.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Enrollment Number</label>
                            <input placeholder="Enrollment Number"
                                {...register('EnrollmentNumber')} className="w-full p-1 rounded border border-black outline-none"
                            />
                            {errors.EnrollmentNumber && <span className="text-red-500 block">{errors.EnrollmentNumber.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Email</label>
                            <input placeholder="Enter email"
                                {...register('email')} className="w-full p-1 rounded border border-black outline-none"
                            />
                            {errors.email && <span className="text-red-500 block">{errors.email.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-900">Select branch</label>
                            <div className="px-4">
                            <div>
                            <input type="radio" name="branch" value="CSE" id="CSE"/>
                            <label className="px-2" htmlFor="CSE">CSE</label>
                            </div>
                            <div>
                            <input type="radio" name="branch" value="IT" id="IT"/>
                            <label className="px-2" htmlFor="IT">IT</label>
                            </div>
                            <div>
                            <input type="radio" name="branch" value="ECE" id="ECE"/>
                            <label className="px-2" htmlFor="ECE">ECE</label>
                            </div>
                            <div>
                            <input type="radio" name="branch" value="EEE" id="EEE"/>
                            <label className="px-2" htmlFor="EEE">EEE</label>
                            </div>
                            <div>
                            <input type="radio" name="branch" value="AIDS" id="AIDS"/>
                            <label className="px-2" htmlFor="AIDS">AIDS</label>
                            </div>
                            </div>
                        
                            
                            
                            {errors.branch && <span className="text-red-500">{errors.branch.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-900">Enter Batch</label>
                            <input placeholder="Enter Batch(2022-2026)"
                                {...register('year')} className="w-full p-1 rounded border border-black outline-none"
                            />
                            {errors.year && <span className="text-red-500 block">{errors.year.message}</span>}
                        </div>
                        
                    </div>
                        <div className="w-1/2">
                        <div className="mb-4">
                            <label className="block text-gray-900">Why do you want to join the society?</label>
                            <textarea placeholder="Enter reason" rows={10} cols={10} 
                                {...register('reason')} className="w-full p-1 rounded border border-black outline-none"
                            ></textarea>
                           
                        </div>
                       

                        <div className="mb-4">
                            <label className="block text-gray-900">Github/Linkeldn/leetcode profile Id</label>
                            <input placeholder="Enter Profile ID"
                                {...register('Batch')} className="w-full p-1 rounded border border-black outline-none"
                            />
                            {errors.Batch && <span className="text-red-500 block">{errors.Batch.message}</span>}
                        </div>

                        </div>
                        
                        </div>
                  
                        <button type='submit' className='w-full p-2 bg-gray-900 rounded-md text-white'>Submit</button>
                    </form>
                </div>

     </section>
      <section className="w-1/3 pr-4">
         <img className=" h-full blur-xs w-full" src={society} alt=" img" />
      </section>
    </div>
  );
};

export default Societyjoiningform;
