import {  EarthLock, House, LogIn, Newspaper, NotepadText, Settings, Users } from "lucide-react";

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
  {
    title: 'Queries',
    path: '/admin/queries',
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
    title: 'Setting',
    path: '/admin/setting',
    icon: <Settings />,
    cName: 'nav-text'
  },
 
  {
    title: 'Login',
    path: '/login',
    icon: <LogIn/>,
    cName: 'nav-text'
  }
];