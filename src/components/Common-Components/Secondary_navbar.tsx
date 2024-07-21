import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "../ui/button";

const navItems = [
    {
        href: "/",
        label: "About",
    },
    {
        href: "/",
        label: "Events",
        href : "/events",
        label : "Events",
    },
    {
        href: "/members",
        label: "Members",
    },
    {
        href: "/evaluation",
        label: "Member Evaluation",
    },
    {
        href: "/news",
        label: "News",
    },
    {
        href: "/societygallery",
        label: "Gallery",
    },
    {
        href: "/query",
        label: "Send a Query",
    },
    {
        href: "/coordinators",
        label: "Coordinators",
    },
    {
        href: "/openings",
        label: "Openings",
    },
    {
        href: "/testimonials",
        label: "Testimonials",
    },
];

const filtered = navItems.filter((navItem) => navItem.href !== '/');
const routes = filtered.map((navItem) => navItem.href);
routes.push('/society');

const SecondaryNavbar = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkRoute = () => {
            const pathname = location.pathname;
            const route = pathname.split('/').pop();
            setIsVisible(routes.includes('/' + route));
        };

        checkRoute();
    }, [location.pathname]);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="w-screen flex flex-wrap px-4 py-3 bg-gray-200 text-gray-900">
                    {navItems.map((navItem, index) => (
                        <NavigationMenuItem key={index}>
                            <a
                                href={navItem.href}
                                className={`px-6 py-2 text-gray-90 text-s font-semibold text-center ${buttonVariants({ variant: "ghost" })}`}
                            >
                                {navItem.label}
                            </a>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default SecondaryNavbar;
