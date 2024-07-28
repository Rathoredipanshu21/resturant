import React from 'react'
import HeroService from './HeroService'
import OnlineOrder from './OnlineOrder'
import AboutUs from './AboutUs'
import WhyUs from './WhyUs'
import ContactUs from './ContactUs'

const MainService = () => {
  return (
    <div>
        <HeroService/>
        <AboutUs/>
        <WhyUs/>
        <ContactUs/>
        <OnlineOrder/>
    </div>
  )
}

export default MainService