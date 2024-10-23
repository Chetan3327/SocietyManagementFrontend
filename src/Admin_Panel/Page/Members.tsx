// import Member_Cards from "../Page_Components/Members/Member_Cards";
import Member_Table from "../Page_Components/Members/Member_Table";
import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";

const Admin_Members = () => {
  return (
    <div >
      <Header/>
    <div className="md:flex gap-2 w-full h-full">
      <Sidebar/>
       <div>
      {/* <Member_Cards /> */}
      <Member_Table />
      </div>
    </div>
    </div>
  );
};

export default Admin_Members;
