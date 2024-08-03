import {  EarthLock, House, LogIn, Newspaper, NotepadText, Users, Contact } from "lucide-react";

export const SidebarData = [
  {
    title: 'Home',
    path: '/admin',
    icon: <House />,
    cName: 'nav-text'
  },
  {
    title: 'Members',
    path: '/admin/members',
    icon: <Users />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/admin/news',
    icon: <Newspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Coordinators',
    path: '/admin/coordinators',
    icon: <Users />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Queries',
  //   path: '/admin/queries',
  //   icon: <NotepadText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Events',
    path: '/admin/events',
    icon: <NotepadText />,
    cName: 'nav-text'
  },
  {
    title: 'Society',
    path: '/admin/society',
    icon: <EarthLock/>,
    cName: 'nav-text'
  },
  {
    title: 'Testimonials',
    path: '/admin/testimonials',
    icon: <Users />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <Contact />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LogIn/>,
    cName: 'nav-text'
  },
];
