import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";

import { buttonVariants } from "../ui/button";  

const navItems =[
    {
        href : "/",
        label : "About",
    },
    
    {
        href : "/",
        label : "Events",
    },
    {
        href : "/",
        label : "Members",
    },
    {
        href : "/",
        label : "News",
    },{
        href : "/",
        label : "Gallery",
    },
    {
        href : "/",
        label : "Contacts",
    },
 
    {
        href : "/",
        label : "Coordinators",
    },{
        href : "/",
        label : "Openings",
    },
    {
        href : "/",
        label : "Testimonials",
    },

  ]

const Secondary_navbar = () => {
return(
    <div className="relative top-10">
      <NavigationMenu className="mx-auto">
         <NavigationMenuList className="container w-screen flex flex-wrap px-4 py-3 bg-gray-200 text-gray-900 ">
           {
            navItems.map((navItem : {href :string , label: string} , index)=>(
                   <NavigationMenuItem key={index}>
                       <a
                         href={navItem.href}
                         className={`px-6 py-2 text-gray-90 text-xl font-medium text-center ${buttonVariants({variant:"ghost"})}`}
                       >
                          {navItem.label}
                       </a>
                   </NavigationMenuItem>
            ))
           }
        </NavigationMenuList>
      </NavigationMenu>
    </div>
)
}

export default Secondary_navbar;