import Coordinators_Table from "../Page_Components/Coordinators/Coordinators_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";

const Admin_Coordinators = () => {
  return (
    <div className="md:flex md:gap-3">
      <Sidebar/>
      <div className="h-screen">
         <Coordinators_Table />
      </div>
     
    </div>
  );
};

export default Admin_Coordinators;