'use client'

import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]')

    if (!scrollContainer) return

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,

      // desktop
      lerp: 0.08,

      // tablet
      tablet: {
        smooth: true,
      },

      // mobile
      smartphone: {
        smooth: false,
      },
    })

    setTimeout(() => {
      scroll.update()
    }, 500)

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div data-scroll-container>
      {children}
    </div>
  )
}