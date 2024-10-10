import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Roles_table from './../Page_Components/Roles/RolesTable';

const Roles = () => {
  return (
    <div>
      <Header/>
    
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Roles_table/>
    </div>
    </div>
  )
}

export default Roles