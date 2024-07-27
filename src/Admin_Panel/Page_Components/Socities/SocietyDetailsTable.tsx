import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHeader,
    TableHead
} from '@/components/ui/table'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const originalData = [
    {
        SocietyName : 'Drishti' , 
        DateOfEstablishment : new Date(13,9,2015),
       Description : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ',
       SocietyHead : 'John doe',
       Coordinators : 'John Doe' ,
       NumberOfMembers : 303 ,
       Category : 'Non Tech',
    },
    {
        SocietyName : 'Drishti' , 
        DateOfEstablishment : new Date(13,9,2015),
       Description : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ',
       SocietyHead : 'John doe',
       Coordinators : 'John Doe' ,
       NumberOfMembers : 303 ,
       Category : 'Non Tech'
    },
    {
        SocietyName : 'Drishti' , 
        DateOfEstablishment : new Date(13,9,2015),
       Description : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ',
       SocietyHead : 'John doe',
       Coordinators : 'John Doe' ,
       NumberOfMembers : 303 ,
       Category : 'Non Tech'
    },
    {
        SocietyName : 'Drishti' , 
        DateOfEstablishment : new Date(13,9,2015),
       Description : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit natus corporis, reiciendis laboriosam consequatur suscipit et in ipsa ea illo totam! Libero, praesentium? Reiciendis aliquid, rem quasi inventore optio sint. ',
       SocietyHead : 'John doe',
       Coordinators : 'John Doe' ,
       NumberOfMembers : 303 ,
       Category : 'Non Tech'
    },
]

const schema = z.object({
    name : z.string().nonempty('Society name is required')
})

const tableClass = "text-center text-gray-800 text-xl border-x"

const SocietyDetailsTable = () => {
    let [societyData, setSocietyData] = useState(originalData)

    type formData = z.infer<typeof schema>
    const { register, handleSubmit , formState: { errors } } = useForm<formData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data: formData) => {
        console.log(data)
        if (data.name) {
        const filteredata = societyData.filter(detail => 
        detail.SocietyName.toLowerCase()===data.name.toLowerCase()
    );
  setSocietyData(filteredata)


}
    }
  return (
    <div className="py-8 px-6 lg:px-20 bg-white mt-10 ">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-gray-300 py-4 px-2 flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">

    
                    <input
                        {...register('name')}
                        type="text" placeholder="Search society "
                        className=" bg-white p-2 px-6 w-full rounded lg:mr-2" id="date-search"
                        
                    />

                    <button type="submit"  className="text-white bg-blue-500 p-2  rounded text-md px-8">
                        Search

                    </button>
                </div>
                {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
            </form>


                <h2 className="font-bold text-bold text-center text-4xl mb-4 text-gray-800 mt-10">MEMBERS</h2>
                <div className="overflow-auto max-h-96">
                    <Table className=" bg-white border-t border-x shadow-lg table-auto ">
                      <TableHeader>
                        <TableRow>
                            <TableHead rowSpan={2} className={tableClass}>S.NO.</TableHead>
                            <TableHead rowSpan={2} className={tableClass}>List of socities</TableHead>
                            <TableHead colSpan={6} className={tableClass}>Society Details</TableHead>
                        </TableRow>
                        <TableRow>
                        <TableHead className={tableClass} >Date Of Establishment</TableHead>
                        <TableHead className={tableClass} >Description</TableHead>
                        <TableHead className={tableClass} >Society Head</TableHead>
                        <TableHead className={tableClass} > Coordinators</TableHead>
                        <TableHead className={tableClass} >Number Of Members</TableHead>
                        <TableHead className={tableClass} >  Category</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                            {societyData.map((details , index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="text-center border-x text-gray-800"  >{index + 1}.</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.SocietyName}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.DateOfEstablishment.toDateString()}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800">{details.Description}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.SocietyHead}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.Coordinators}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.NumberOfMembers}</TableCell>
                                    <TableCell className="text-center border-x text-md text-gray-800" >{details.Category}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                   </Table>
                </div>
                </div>
  )
}

export default SocietyDetailsTable