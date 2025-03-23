import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ContactUs from './components/ContactUs'
import AllServices from './components/AllServices'
import Project from './components/Project'
import Footer from './components/Footer'
import Flag from './components/Flag'
import Map from './components/Map'
import GoogleMaps from './components/GoogleMaps'
import Photos from './components/Photos'

function App() {
  return (
    <>
    <Navbar/>
    <Photos/>
    <Project/>
    <Flag/>
    <Map/>
    <Hero/>
    <AllServices/>
    <ContactUs/>
    <GoogleMaps/>
    <Footer/>
    </>
  )
}

export default App
