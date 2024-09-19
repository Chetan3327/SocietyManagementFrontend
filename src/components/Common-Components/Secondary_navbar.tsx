import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";


const navItems = [
  {
    href: "",
    label: "Home",
  },
  {
    href: "events",
    label: "Events",
  },
  {
    href: "members",
    label: "Our Team",
  },
  {
    href: "Societymembers",
    label: "Members",
  },
  // {
  //   href: "evaluation",
  //   label: "Evalution",
  // },
  {
    href: "news",
    label: "News",
  },
  {
    href: "societygallery",
    label: "Gallery",
  },

  {
    href: "coordinators",
    label: "Coordinators",
  },
  {
    href: "openings",
    label: "Openings",
  },
  {
    href: "testimonials",
    label: "Testimonials",
  },
];


const SecondaryNavbar = () => {
  let id: string | undefined;
  const location = useLocation();
  const pathname = location.pathname;
  const route = pathname.split("/");
  console.log(route)
  id=route[2]
  console.log(id);



  return (
    <div className="flex w-full overflow-x-hidden">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="w-screen overflow-x-hidden gap-3 md:gap-0  px-5 flex justify-between flex-wrap  py-3 bg-gray-200 text-gray-900">
          {navItems.map((navItem, index) => {
  
            if(navItem.label==="Home"){
              return(
                <NavigationMenuItem key={index}  className="hover:text-emerald-500 transition-transform duration-300 hover:transform  hover:scale-110">
                  <Link to={`/society/${id}`}>{navItem.label}</Link>
                </NavigationMenuItem>
              )
            }else{
              return(
                <NavigationMenuItem key={index} className="hover:text-emerald-500 transition-transform duration-300 hover:transform  hover:scale-110">
                  <Link to={`/society/${id}/${navItem.href}`}>{navItem.label}</Link>
                </NavigationMenuItem>
              )
            }
})}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default SecondaryNavbar;
