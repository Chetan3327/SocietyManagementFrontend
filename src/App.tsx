import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar'
import Openings from './pages/Openings'
import Coordinators from './pages/Coordinators'
import Testimonials from './pages/Testimonials'
import Roles from './pages/Roles'
import SocietyForm from './pages/SocietyForm'

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
        </Routes>
      </div>
    </Router>
  )
}

export default App
