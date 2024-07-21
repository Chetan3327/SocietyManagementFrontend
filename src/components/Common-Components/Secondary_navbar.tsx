import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu";

import { buttonVariants } from "../ui/button";  
import { useEffect } from "react";

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

const routes = navItems.map((navItem) => navItem.href)
routes.push('/society')
const Secondary_navbar = () => {
    const pathname = location.href;
    const parts = pathname.split('/')
    const route = parts[parts.length - 1]
    console.log(routes.includes('/' + route))
    if(routes.includes('/' + route)){
        return(
            <div className="flex">
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
    }else{
        return null
    }
}

export default Secondary_navbar;