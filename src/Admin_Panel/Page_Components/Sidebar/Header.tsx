// import React from 'react'
import { Contact, LogOut, Settings } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Header = () => {
    const [show,setshow]=useState(false);
    const handleShow = () => {
        setshow(!show);
    }
  return (
    <div className='flex justify-between'> 
        <div>
        <Link to="/admin/home" className="ml-2 font-bold text-xl flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
                className="h-[61px] navbar-img transition transform duration-500 ease-in-out hover:scale-110"
                alt="BPIT Logo"
              />
            </Link>
        </div>
        <div className=' px-5 py-4  text-xl font-bold'>
          <Settings onClick={handleShow}/>
        
        <div className={show ? 'options absolute top-10 right-0 w-48':'options active'}>
            <ul className="flex flex-col justify-between items-center text-lg font-bold text-gray-600">
            <li >
                <Link to="/contact-us" className='flex justify-between p-2'>
                <Contact />
                  <span>Contact-Us</span>
                </Link>
              </li>
            <li  >
                <Link to="/" className="flex justify-between p-2">
                <LogOut/>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header