// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './Sidebar.css';
// import { Menu, X } from 'lucide-react';

// function Sidebar() {
//   const [sidebar, setSidebar] = useState(false);
//   const searchParams = useParams();
//   // let location = useLocation();

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <div className='navbar dark:bg-black'>
//         <Link to='#' className='menu-bars'>
//           <Menu onClick={showSidebar} />
//         </Link>
//       </div>
//       <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
//         <ul className='nav-menu-items' onClick={showSidebar}>
//           <li className='navbar-toggle'>
//             <Link to='#' className='menu-bars'>
//               <X color="white" />
//             </Link>
//           </li>
//           {SidebarData.map((item, index) => {
//             // Ensure 'Contact Us' and 'Logout' retain their original paths
//             const path = (item.title === 'Contact Us' || item.title === 'Logout') 
//               ? item.path 
//               : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

//             return (
//               <li key={index} className={item.cName}>
//                 <Link to={path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default Sidebar;





import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { Menu, X } from 'lucide-react';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility
  const searchParams = useParams();
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  // Function to handle logout
  const handleLogout = () => {
    // Clear session or any other necessary cleanup
    // sessionStorage.clear();

    // Navigate to the login page and disable back navigation
    navigate('/', { replace: true });

    // Show the toast message
    setShowToast(true);
    
    console.log("showToast:", showToast);
    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // 3 seconds for the toast to disappear
  };

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
            // Special case for 'Logout'
            if (item.title === 'Logout') {
              return (
                <li key={index} className={`${item.cName} text-white`} onClick={handleLogout}>
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              );
            }

            // For other items, dynamically build the path
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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out z-50">
          You have been logged out successfully!
        </div>
      )}
    </>
  );
}

export default Sidebar;





// import { useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { SidebarData } from './SidebarData';
// import './Sidebar.css';
// import { Menu, X } from 'lucide-react';

// function Sidebar() {
//   const [sidebar, setSidebar] = useState(false);
//   const [logoutMessage, setLogoutMessage] = useState(false); // State to show logout message
//   const searchParams = useParams();
//   const navigate = useNavigate();

//   const showSidebar = () => setSidebar(!sidebar);

//   // Function to handle logout
//   const handleLogout = () => {
//     // Clear user session data if applicable (e.g., localStorage, sessionStorage, etc.)
//     // sessionStorage.clear(); // Example: Clear session storage

//     // Navigate to login page and disable going back
//     navigate('/', { replace: true }); // replace: true removes the current page from history

//     // Show logout message
//     setLogoutMessage(true);

//     // Hide the message after 3 seconds
//     setTimeout(() => {
//       setLogoutMessage(false);
//     }, 3000); // 3 seconds
//   };

//   return (
//     <>
//       <div className='navbar dark:bg-black'>
//         <Link to='#' className='menu-bars'>
//           <Menu onClick={showSidebar} />
//         </Link>
//       </div>
//       <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
//         <ul className='nav-menu-items' onClick={showSidebar}>
//           <li className='navbar-toggle'>
//             <Link to='#' className='menu-bars'>
//               <X color="white" />
//             </Link>
//           </li>
//           {SidebarData.map((item, index) => {
//             // Special case for 'Logout'
//             if (item.title === 'Logout') {
//               return (
//                 <li key={index} className={`${item.cName} text-white`} onClick={handleLogout}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </li>
//               );
//             }

//             // For other items, dynamically build the path
//             const path = (item.title === 'Contact Us' || item.title === 'Logout')
//               ? item.path
//               : (searchParams.societyID ? `${item.path}/${searchParams.societyID}` : item.path);

//             return (
//               <li key={index} className={item.cName}>
//                 <Link to={path}>
//                   {item.icon}
//                   <span>{item.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Logout Message */}
//       {logoutMessage && (
//         <div className="logout-message fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
//           You have been logged out successfully!
//         </div>
//       )}
//     </>
//   );
// }

// export default Sidebar;

