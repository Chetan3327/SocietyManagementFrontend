import Member_Cards from "../Page_Components/Members/Member_Cards";
import Member_Table from "../Page_Components/Members/Member_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";

const Admin_Members = () => {
  return (
    <div className="flex">
      <Sidebar/>
       <div className="p-5">
      <Member_Cards />
      <Member_Table />
      </div>
    </div>
  );
};

export default Admin_Members;
