// import { useState } from 'react';
// import { Link , useLocation , useParams } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './Sidebar.css';
// import { Menu, X } from 'lucide-react';

// function Sidebar() {
//   const [sidebar, setSidebar] = useState(false);
//   const searchParams=useParams()
//  let location = useLocation();
//  console.log('in search params',!searchParams.societyID)
//  console.log('in side bar',location.search)
//  //if(location.search)
//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//         <div className='navbar dark:bg-black'>
//           <Link to='#' className='menu-bars'>
//             <Menu onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu' : 'nav-menu active '}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <X color="white"/>
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => (
//               <li key={index} className={item.cName}>
//                 { !searchParams.societyID && 
//                   <Link to={item.path}> {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 }
//                 { searchParams.societyID &&  <Link to={`${item.path}/${searchParams.societyID}`}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>}               
//               </li>
//             ))}
//           </ul>
//         </nav>
//     </>
//   );
// }

// export default Sidebar;

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { Menu, X } from 'lucide-react';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const searchParams = useParams();
  // let location = useLocation();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar dark:bg-black'>
        <Link to='#' className='menu-bars'>
          <Menu onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <X color="white" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            // Ensure 'Contact Us' and 'Logout' retain their original paths
            const path = (item.title === 'Contact Us' || item.title === 'Logout') 
              ? item.path 
              : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

            return (
              <li key={index} className={item.cName}>
                <Link to={path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;

