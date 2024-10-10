import { BookCopy, Filter } from "lucide-react";
import Events_Table from "../Page_Components/Events/Events_Table";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Header from "../Page_Components/Sidebar/Header";
const Admin_Events = () => {
  return (
    <div className="h-screen">
      <Header/>
    <div className="md:flex md:gap-3">
      <Sidebar/>
    <div className=" flex flex-col w-full mt-1 md:mt-6 items-center">
      <div className="w-10/12 flex justify-between items-center p-2">
        <Link to="/admin/events/add" className="px-3 flex gap-6 py-1 bg-blue-700 text-white border-2 items-center rounded-lg">
          <BookCopy size={20} color="white" />
          <h1 className="text-xl">Create Events Form</h1>
        </Link>
        <Filter />
      </div>

      <Events_Table />
    </div>
    </div>
    </div>
  );
};

export default Admin_Events;
