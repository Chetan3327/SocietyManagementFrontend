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
import ScrollToTop from './components/ScrollToTop'
import Society from './pages/Society'
import SocietyGallery from './pages/SocietyGallery'
import SocietMembers from './components/Page-Components/SocietMembers'
import AllGallery from './pages/AllGallery'

const App = () => {
  return (
    <Router>
      <Navbar />
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

        </Routes>
      </div>
      <Footer />
      <ScrollToTop />
    </Router>
  )
}

export default App
