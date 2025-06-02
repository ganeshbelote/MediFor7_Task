import React, { useEffect, useMemo, useRef } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion'

const aboutContent =
  'At MediFor7, We Are Dedicated To Solving A Common Yet Critical Problem — Medication Management. Inspired By The Challenges Faced By Elderly Relatives, Hospital Patients, And Busy Professionals, We Developed An Innovative Solution To Ensure No Dose Is Missed Or Taken Incorrectly. With A Perfect Blend Of Hardware And Software, MediFor7 Is Designed To Make Medication Adherence Simple And Hassle-Free.'

const About = () => {
  const ref = useRef()
  const Headingref = useRef()
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const textGray = useMemo(() => {
    const indexes = []
    for (let i = 12; i <= 24; i++) {
      indexes.push(i)
    }
    for (let i = 42; i < aboutContent.split(' ').length; i++) {
      indexes.push(i)
    }
    return indexes
  }, [])

  return (
    <div className='bg-[#F9F9F9] w-full rounded-t-[64px] overflow-x-hidden md:mt-5 lg:mt-5 px-6 lg:px-24 py-8'>
      <h2 ref={Headingref} className='text-5xl lg:text-7xl font-semibold'>
        {'About Us'.split('').map((char, i) => (
          <span key={i} className='inline-block overflow-hidden'>
            <motion.span
              className={`inline-block ${
                textGray.includes(i) ? 'text-[#858585]' : 'text-black'
              }`}
              initial='hidden'
              animate={controls}
              variants={{
                visible: {
                  y: '0%',
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.03,
                    ease: [0.65, 0, 0.35, 1]
                  }
                },
                hidden: { y: '100%', opacity: 0 }
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        ))}
      </h2>
      <p className='mt-5 lg:mt-16 text-xl lg:text-2xl'>
        <span ref={ref} className='inline-block'>
          {aboutContent.split('').map((char, i) => (
            <span key={i} className='inline-block overflow-hidden'>
              <motion.span
                className={`inline-block ${
                  textGray.includes(i) ? 'text-[#858585]' : 'text-black'
                }`}
                initial='hidden'
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 2,
                      ease: [0.65, 0, 0.35, 1]
                    }
                  },
                  hidden: { opacity: 0 }
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}

export default About
