import Header from "../Page_Components/Sidebar/Header";
import Sidebar from "../Page_Components/Sidebar/Sidebar";
import Achievemnts_table from './../Page_Components/SocietyAchievements/AchievementsTable';

const Achievements = () => {
  return (
    <div className="h-screen relative">
      <Header/>
    <div className="md:flex md:gap-2">
      <Sidebar/>
      <Achievemnts_table/>
    </div>
   </div>
  )
}

export default Achievements