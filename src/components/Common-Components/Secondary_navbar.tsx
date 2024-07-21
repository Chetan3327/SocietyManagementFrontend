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
        href : "/events",
        label : "Events",
    },
    {
        href : "/members",
        label : "Members",
    },
    {
        href : "/evaluation",
        label : "Member Evaluation",
    },
    {
        href : "/news",
        label : "News",
    },{
        href : "/societygallery",
        label : "Gallery",
    },
    {
        href : "/query",
        label : "Send a Query",
    },
 
    {
        href : "/coordinators",
        label : "Coordinators",
    },{
        href : "/openings",
        label : "Openings",
    },
    {
        href : "/testimonials",
        label : "Testimonials",
    },

  ]

const Secondary_navbar = () => {
return(
    <div className=" ">
      <NavigationMenu className="mx-auto">
         <NavigationMenuList className=" w-screen flex flex-wrap px-4 py-3 bg-gray-200 text-gray-900 ">
           {
            navItems.map((navItem : {href :string , label: string} , index)=>(
                   <NavigationMenuItem key={index}>
                       <a
                         href={navItem.href}
                         className={`px-6 py-2 text-gray-90 text-s font-semibold text-center ${buttonVariants({variant:"ghost"})}`}
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