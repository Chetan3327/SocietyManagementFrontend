import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle.jsx";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";

const routeList = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/students",
    label: "Students",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-10">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex  items-center justify-between">

          {/* logo */}
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RzOQ_E52YXYZQ4Vwrbnbs_HaBhq0ZEvXrQ&s"
                className="h-12 navbar-img"
                alt="BPIT Logo"
              />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Name
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      style={{ width: '100%' }}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}

                  <Link to="/" className="bg-gray-200 text-purple-600 px-4 py-2 rounded ">Login
                  </Link>

                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
              <Link
                to={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}

            {/* auth */}
            <Link to="/" className="bg-gray-200 text-purple-600 px-4 py-2 rounded ">Login
            </Link>

            <div className="hidden md:flex gap-2 md:ml-5">
              <ModeToggle />
            </div>

          </nav>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar