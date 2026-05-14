'use client'
import Innerbanner from '../frontend/components/Innerbanner'
import AboutPageSection from '../frontend/components/AboutPageSection'
import Purpose from '../frontend/components/Purpose'
import WhyChooseUs from '../frontend/components/WhyChooseUs'
import Cta from '../frontend/components/Cta'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
  const [hero, setHero] = useState(null);
  
      useEffect(() => {
          const fetchHero = async () => {
              try {
                  const res = await axios.get(
                      `${process.env.NEXT_PUBLIC_API_URL}/about-us-page`
                  );
  
                  setHero(res.data.data);
              } catch (err) {
                  console.error(err);
              }
          };
  
          fetchHero();
      }, []);
  
      if (!hero) return null; // or loader
  
      const imageUrl = hero?.image
  ? `${process.env.NEXT_PUBLIC_BASE_URL}${hero.image}`
  : '/images/banner/about.png'
  
  return (
    <>
      <Innerbanner
        bg={imageUrl} 
        title={hero.title}
      />
      <AboutPageSection/>
      <Purpose/>
      <WhyChooseUs/>
      <Cta/>
    </>
  )
}

export default page