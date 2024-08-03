import React from 'react'
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Testimonial_table from '../Page_Components/Testimonials/Testimonial_table';

const Testimonials = () => {
  return (
    <div className="flex gap-2">
      <Sidebar/>
      <Testimonial_table/>
    </div>
  )
}

export default Testimonials