import Coordinators_Table from "../Page_Components/Coordinators/Coordinators_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";

const Admin_Coordinators = () => {
  return (
    <div className="flex gap-3">
      <Sidebar/>
      <div>
         <Coordinators_Table />
      </div>
     
    </div>
  );
};

export default Admin_Coordinators;