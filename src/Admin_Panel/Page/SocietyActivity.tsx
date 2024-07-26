import React from 'react'
import BarChart from '../Page_Components/Socities/BarChart'
import SocietyPieChart from '../Page_Components/Socities/SocietyPieChart'
import SocietyDetailsTable from '../Page_Components/Socities/SocietyDetailsTable'

const SocietyActivity = () => {
  return (
    <div className='mt-10 '>
        <div className='flex flex-col lg:flex-row space-x-4 space-y-4 justify-between mx-10'>
            <BarChart />
            <div>
              <h2 className='text-center mb-4'>Activity Society</h2>
            <SocietyPieChart/>
            </div>
            
        </div>
        <SocietyDetailsTable/>
    </div>
  )
}

export default SocietyActivity