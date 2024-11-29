import React from 'react'
import HeroSection from "./HeroSection/HeroSection"
import AboutUs from "./AboutUs/AboutUs"
import ServiceCards from "./ServiceCards/ServiceCards"
import ArbitrationCard from "./ArbitrationCard/ArbitrationCard"
import Footer from "./Footer/Footer"
import About from './About/About'
import ExpertiseSection from './ExpertiseSection/ExpertiseSection'
import StatsComponent from './StatsComponent/StatsComponent'
import InquiryForm from './InquiryForm/InquiryForm'
const Pages = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <About />
      <ExpertiseSection />
      <StatsComponent />
      <InquiryForm />
      <hr className='h-[3px]' />
      <Footer />
    </div>
  )
}

export default Pages
