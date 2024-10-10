import Coordinators_Table from "../Page_Components/Coordinators/Coordinators_Table";
import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";

const Admin_Coordinators = () => {
  return (
    <div className="h-screen">

   <Header/>
    <div className="md:flex md:gap-3">
      <Sidebar/>
      <div >
         <Coordinators_Table />
      </div>
      </div>
    </div>
  );
};

export default Admin_Coordinators;