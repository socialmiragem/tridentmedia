'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    let locomotiveScroll = null

    const initScroll = async () => {
      if (!scrollRef.current) return

      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,

        // smooth only on desktop
        smooth: true,

        // smoother feel
        lerp: 0.08,

        // tablet settings
        tablet: {
          smooth: false,
          breakpoint: 1024,
        },

        // mobile settings
        smartphone: {
          smooth: false,
        },

        reloadOnContextChange: true,
      })

      // optional refresh after load
      setTimeout(() => {
        if (
          locomotiveScroll &&
          typeof locomotiveScroll.update === 'function'
        ) {
          locomotiveScroll.update()
        }
      }, 500)
    }

    initScroll()

    // refresh on resize
    const handleResize = () => {
      if (
        locomotiveScroll &&
        typeof locomotiveScroll.update === 'function'
      ) {
        locomotiveScroll.update()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      if (
        locomotiveScroll &&
        typeof locomotiveScroll.destroy === 'function'
      ) {
        locomotiveScroll.destroy()
      }
    }
  }, [])

  return (
    <main
      data-scroll-container
      ref={scrollRef}
      style={{
        overflow: 'hidden',
      }}
    >
      {children}
    </main>
  )
}