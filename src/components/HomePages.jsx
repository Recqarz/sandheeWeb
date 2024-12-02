import React from 'react'
import HeroSection from "./HeroSection/HeroSection"
import AboutUs from "./About/AboutUs"
import ExpertiseSection from './ExpertiseSection/ExpertiseSection'
import StatsComponent from './StatsComponent/StatsComponent'
import InquiryForm from './InquiryForm/InquiryForm'
const HomePages = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <AboutUs />
      <ExpertiseSection />
      <StatsComponent />
      <InquiryForm />
      {/* <hr className='h-[3px]' /> */}
    </div>
  )
}

export default HomePages
