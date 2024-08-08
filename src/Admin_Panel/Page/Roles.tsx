import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Roles_table from './../Page_Components/Roles/RolesTable';

const Roles = () => {
  return (
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Roles_table/>
    </div>
  )
}

export default Roles