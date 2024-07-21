import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Openings from './pages/Openings'
import Coordinators from './pages/Coordinators'
import Testimonials from './pages/Testimonials'
import Roles from './pages/Roles'
import SocietyForm from './pages/SocietyForm'
import Allsocities from './pages/Allsociety/Allsocities'
import AboutUs from './components/Page-Components/AboutUs'
import Vision from './components/Page-Components/Vision'
import News from './components/Page-Components/News'
import AllNews from './components/Page-Components/AllNews'
import SocietyQueryForm from './components/Page-Components/SocietyQueryForm'
import Evaluation from './pages/Evaluation'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import Footer from './components/Common-Components/Footer'
import FeedbackButton from './components/Common-Components/FeedbackButton'
import FeedbackForm from './components/Common-Components/FeedbackForm'
import ScrollToTop from './components/ScrollToTop'
import Society from './pages/Society'
import SocietyGallery from './pages/SocietyGallery'
import SocietMembers from './components/Page-Components/SocietMembers'
import AllGallery from './pages/AllGallery'
import Secondary_navbar from './components/Common-Components/Secondary_navbar'
import StudentLogin from './pages/StudentLogin'
import Events from './components/Page-Components/Events/Events'
import Societyjoiningform from './pages/Societyjoiningform'
import Societyjoiningrequst from './pages/Societyjoiningrequst';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Secondary_navbar />
      <div className='font-mono transition-colors duration-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/openings' element={<Openings />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/coordinators' element={<Coordinators />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/create' element={<SocietyForm />} />
          <Route path='/members' element={<SocietMembers />} />
          <Route path='/societies' element={<Allsocities />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/news' element={<News />} />
          <Route path='/all-news' element={<AllNews />} />
          <Route path='/query' element={<SocietyQueryForm />} />
          <Route path='/evaluation' element={<Evaluation />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/allgallery' element={<AllGallery />} />
          <Route path='/society' element={<Society />} />
          <Route path='/societygallery' element={<SocietyGallery />} />
          <Route path='/snavbar' element={<Secondary_navbar />} />
          <Route path='/slogin' element={<StudentLogin />} />
          <Route path='/events' element={<Events />} />
          <Route path='/societyjoinform' element={<Societyjoiningform />} />
          <Route path='/societyjoinrequest' element={<Societyjoiningrequst />} />
          <Route path='/feedbackform' element={<FeedbackForm />} />
        </Routes>
      </div>
      <FeedbackButton/>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
