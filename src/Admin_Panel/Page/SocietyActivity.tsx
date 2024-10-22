// import BarChart from '../Page_Components/Socities/BarChart'
// import SocietyPieChart from '../Page_Components/Socities/SocietyPieChart'
import SocietyDetailsTable from '../Page_Components/Socities/SocietyDetailsTable'
import Sidebar from '../Page_Components/Sidebar/Sidebar'
import Header from '../Page_Components/Sidebar/Header'


const SocietyActivity = () => {
  return (
    <div>
      <Header/>
    <div className='flex gap-2 w-full overflow-x-hidden h-full.0.0.0.0.0.0.0.0.0.0'  >
      <Sidebar/>                       
    <div className='mt-10 '>
        {/* <div className='flex flex-col w-9/12 overflow-x-hidden lg:flex-row mx-5'>
            <BarChart />
            <div>
              <h2 className='text-center mb-4'>Activity Society</h2>
            <SocietyPieChart/>
            </div>
            
        </div> */}
        <SocietyDetailsTable/>
    </div>
    </div>
    </div>
  )
}

export default SocietyActivity