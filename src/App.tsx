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

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='font-mono transition-colors duration-300'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/openings' element={<Openings />} />
          <Route path='/roles' element={<Roles />} />
          <Route path='/coordinators' element={<Coordinators />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/create' element={<SocietyForm />} />
          <Route path='/societies' element={<Allsocities />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/news' element={<News />} />
          <Route path='/all-news' element={<AllNews />} />
          <Route path='/query' element={<SocietyQueryForm />} />
          <Route path='/evaluation' element={<Evaluation />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
