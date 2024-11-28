import React from 'react'
import HeroSection from "./HeroSection/HeroSection"
import AboutUs from "./AboutUs/AboutUs"
import ServiceCards from "./ServiceCards/ServiceCards"
import ArbitrationCard from "./ArbitrationCard/ArbitrationCard"
import Footer from "./Footer/Footer"
const Pages = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <AboutUs/>
      <ServiceCards/>
      <ArbitrationCard/>
      <hr className='h-[3px]'/>
      <Footer/>
    </div>
  )
}

export default Pages
