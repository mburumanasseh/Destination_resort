import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Conferences from './pages/Conferences'
import Weddings from './pages/Weddings'
import Accommodation from './pages/Accommodation'
import Facilities from './pages/Facilities'
import About from './pages/About'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
