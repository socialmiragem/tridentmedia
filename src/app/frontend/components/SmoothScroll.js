'use client'

import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 1.8,
      duration : 1.4,
    })

    return () => scroll.destroy()
  }, [])

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}