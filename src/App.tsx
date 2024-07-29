import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Activity_Feed from "./Admin_Panel/Page/Activity_Feed";
import Admin_Coordinators from "./Admin_Panel/Page/Coordinators";
import Admin_Members from "./Admin_Panel/Page/Members";
import Admin_News from "./Admin_Panel/Page/News";
import Admin_Queries from "./Admin_Panel/Page/Queries";
import FeedbackButton from "./components/Common-Components/FeedbackButton";
import FeedbackForm from "./components/Common-Components/FeedbackForm";
import Footer from "./components/Common-Components/Footer";
import Secondary_navbar from "./components/Common-Components/Secondary_navbar";
import Navbar from "./components/navbar";
import AboutUs from "./components/Page-Components/AboutUs";
import AllNews from "./components/Page-Components/AllNews";
import CreateEventForm from "./components/Page-Components/CreateEventForm";
import Events from "./components/Page-Components/Events/Events";
import News from "./components/Page-Components/News";
import SocietMembers from "./components/Page-Components/SocietMembers";
import SocietyQueryForm from "./components/Page-Components/SocietyQueryForm";
import Vision from "./components/Page-Components/Vision";
import ScrollToTop from "./components/ScrollToTop";
import AllGallery from "./pages/AllGallery";
import Allsocities from "./pages/Allsociety/Allsocities";
import Become_Member_Form from "./pages/Become_Member_Form";
import ChangePassword from "./pages/ChangePassword";
import ContactUs from "./pages/ContactUs";
import Coordinators from "./pages/Coordinators";
import Evaluation from "./pages/Evaluation";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Openings from "./pages/Openings";
import OTP from "./pages/OTP";
import ResetPasswordPage from "./pages/ResetPassword";
import Roles from "./pages/Roles";
import SignupPage from "./pages/SignUp";
import Society from "./pages/Society";
import SocietyMembers from "./pages/Society_Members";
import SocietyForm from "./pages/SocietyForm";
import SocietyGallery from "./pages/SocietyGallery";
import Societyjoiningform from "./pages/Societyjoiningform";
import Societyjoiningrequst from "./pages/Societyjoiningrequst";
import StudentLogin from "./pages/StudentLogin";
import Testimonials from "./pages/Testimonials";
import ViewPhoto from "./pages/ViewPhoto";

const App = () => {
  const location = useLocation();
  console.log(location);
  const Locations = location.pathname.split("/");
  console.log(Locations);

  if (Locations[1].toLowerCase() === "admin") {
    return (
      <Routes>
        <Route path="/admin/news" element={<Admin_News />} />
        <Route path="/admin/members" element={<Admin_Members />} />
        <Route path="/admin/queries" element={<Admin_Queries />} />
        <Route path="/admin/coordinators" element={<Admin_Coordinators />} />
        <Route path="/admin" element={<Activity_Feed />} />
      </Routes>
    );
  }

  const showSecondaryNavbar = Locations[1] === "society";

  return (
    <>
      {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "changepassword" && <Navbar />}
      <div className="font-mono transition-colors duration-300">
        {showSecondaryNavbar && <Secondary_navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BecomeMember" element={<Become_Member_Form />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/openings/:id" element={<Openings />} /> */}
          <Route path="/roles" element={<Roles />} />
          <Route path="/coordinators" element={<Coordinators />} />
          {/* <Route path="/testimonials/:id" element={<Testimonials />} /> */}
          <Route path="/create" element={<SocietyForm />} />
          <Route path="/members" element={<SocietMembers />} />
          <Route path="/societies" element={<Allsocities />} />
          <Route path="/vision" element={<Vision />} />
          {/* <Route path="/news/:id" element={<News />} /> */}
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/query" element={<SocietyQueryForm />} />
          {/* <Route path="/evaluation/:id" element={<Evaluation />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/allgallery" element={<AllGallery />} />
          {/* <Route path="/society/:id" element={<Society />}  */}
          {/* <Route path="/societygallery/:id" element={<SocietyGallery />} /> */}
          <Route path="/slogin" element={<StudentLogin />} />
          <Route path="/events" element={<Events />} />
          <Route path="/societyjoinform" element={<Societyjoiningform />} />
          {/* <Route path="/members/:id" element={<Evaluation />} /> */}
          {/* <Route path="/Societymembers/:id" element={<SocietyMembers />} /> */}
          <Route path="/gallery/:Societyid/:ImageId" element={<ViewPhoto />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />
          <Route
            path="/societyjoinrequest"
            element={<Societyjoiningrequst />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/verify-email" element={<OTP />} />
          <Route
            path="/create-event/:societyid/:eventid"
            element={<CreateEventForm />}
          />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/society/:id" element={<Society />}>
          <Route path="Societymembers" element={<SocietyMembers />} />
            <Route path="societygallery" element={<SocietyGallery />} />
            <Route path="members" element={<Evaluation />} />
            <Route path="events" element={<Events />} />
            <Route path="news" element={<News />} />
            <Route path="openings" element={<Openings />} />
            <Route path="coordinators" element={<Coordinators />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="news" element={<News />} />
            <Route path="evaluation" element={<Evaluation />} />
          </Route>
        </Routes>
      </div>
      {Locations[1].toLowerCase() !== "login" &&
        Locations[1].toLowerCase() !== "signup" &&
        Locations[1].toLowerCase() !== "verify-email" &&
        Locations[1].toLowerCase() !== "reset-password" &&
        Locations[1].toLowerCase() !== "changepassword" &&
        Locations[1].toLowerCase() !== "verify-email" && <FeedbackButton /> && (
          <Footer />
        )}

      <ScrollToTop />
    </>
  );
};

export default App;
