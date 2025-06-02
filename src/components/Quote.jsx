import React, { useRef } from 'react'
import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Quote = () => {
  const scrolltext = useRef(null)
  const down = useRef(null)

  useGSAP(() => {
    gsap.to(scrolltext.current, {
      x: '-100%',
      duration: 3,
      delay: 1,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: down.current,
        scrub: true,
        // markers : true,
        start: 'top 100%',
        end: 'top -70%',
      }
    })
  })
  return (
    <div
      ref={down}
      className='down h-fit w-screen flex items-start overflow-x-hidden'
    >
      <p
        ref={scrolltext}
        className='lg:pl-12 pl-5 text-7xl lg:text-9xl font-semibold whitespace-nowrap self-start pb-8 lg:pb-12'
      >
        <span className='text-[#909090]'>Medi</span>
        For7 - Smarter Health Starts With Smarter Reminders.
      </p>
    </div>
  )
}

export default Quote
