import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "../ui/button";

const navItems = [
    {
        href: "/about-us",
        label: "About",
    },
    {
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
    const navigate = useNavigate()
    useEffect(() => {
        const checkRoute = () => {
            const pathname = location.pathname;
            const route = pathname.split('/').pop();
            setIsVisible(routes.includes('/' + route) || pathname === '/society/1');
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
                            <Button onClick={() => navigate(navItem.href)} variant={'ghost'}>{navItem.label}</Button>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};

export default SecondaryNavbar;
