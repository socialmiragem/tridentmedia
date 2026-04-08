import React from 'react'
import Hero from '@/app/frontend/components/Hero';
import AboutSection from '@/app/frontend/components/AboutSection';
import ServiceSection from '@/app/frontend/components/ServiceSection';
import WhyChooseUs from '@/app/frontend/components/WhyChooseUs';
import ContactSection from '@/app/frontend/components/ContactSection';
const index = () => {
  return (
    <div className="">
        <Hero/>
        <AboutSection/>
        <ServiceSection/>
        <WhyChooseUs/>
        <ContactSection/>
    </div>
  )
}

export default index