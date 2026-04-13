import React from 'react'
import Innerbanner from '../frontend/components/Innerbanner'
import AboutPageSection from '../frontend/components/AboutPageSection'
import Purpose from '../frontend/components/Purpose'
import WhyChooseUs from '../frontend/components/WhyChooseUs'
import Cta from '../frontend/components/Cta'

const page = () => {
  return (
    <>
      <Innerbanner 
        title="About"
      />
      <AboutPageSection/>
      <Purpose/>
      <WhyChooseUs/>
      <Cta/>
    </>
  )
}

export default page