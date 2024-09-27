import React from 'react'
import Header from './components/Header'
import './assets/css/style.css'
import Banner from './components/Banner'
import BandTeam from './components/BandTeam'
import BandMember from './components/BandMember'
import TourSection from './components/TourSection'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <BandTeam />
      <BandMember />
      <TourSection />
      <Contact />
      <Map />
      <Footer />
      
    </div>
  )
}
