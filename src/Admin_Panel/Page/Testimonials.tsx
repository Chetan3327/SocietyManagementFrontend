import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Testimonial_table from '../Page_Components/Testimonials/Testimonial_table';

const Testimonials = () => {
  return (
    <div>
      <Header/>
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Testimonial_table/>
    </div>
    </div>
  )
}

export default Testimonials