import React, { useEffect, useRef } from 'react'
import whyUs from '../assets/whyUs.png'
import { useInView, motion, useAnimation } from 'framer-motion'

const WhyChooseUs = () => {
  const text = 'Why Choose MediFor7 ?'
  const containerRef = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(containerRef, {
    once: true,
    margin: '0px 0px -100px 0px'
  })
  const letters = text.split('')
  const center = Math.floor(letters.length / 2)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div
      ref={containerRef}
      className='bg-[#F9F9F9] rounded-[64px] flex flex-col items-center justify-center overflow-x-hidden px-6 lg:px-24 py-12'
    >
      <div className='why-choose-us-section-start-logo-line flex justify-center items-center bg-black w-3/5 h-[3px] rounded-4xl'>
        <img className='h-8 lg:h-16' src={whyUs} alt='starLogo' />
      </div>
      <motion.h2 className='mt-12 text-center text-6xl lg:text-8xl font-semibold'>
        {letters.map((char, i) => {
          const delay = Math.abs(i - center) * 0.05

          return (
            <span
              key={i}
              className='inline-block overflow-hidden'
              style={{ display: 'inline-block' }}
            >
              <motion.span
                style={{
                  paddingBottom: char == 'p' || char == 'y' ? '5px' : '',
                  display: 'inline-block',
                  whiteSpace: char === ' ' ? 'pre' : 'normal'
                }}
                initial={{ y: '100%', opacity: 0 }}
                animate={
                  isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }
                }
                transition={{
                  delay,
                  duration: 0.4,
                  ease: [0.65, 0, 0.35, 1]
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          )
        })}
      </motion.h2>
      <ul className='mt-12 px-5 md:px-8 lg:px-18 flex flex-col gap-8 list-disc overflow-hidden'>
        <motion.li
          className='text-xl lg:text-2xl lg:px-8'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          Elderly Care Made Easy -{' '}
          <span className='text-[#858585]'>
            Reliable Assistance For Managing Complex Medication Schedules.
          </span>
        </motion.li>
        <motion.li className='text-xl lg:text-2xl lg:px-8 self-end'
        initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: .5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '100%' }
          }}
        >
          Hospital Efficiency -{' '}
          <span className='text-[#858585]'>
            Helps Nurses Manage Patient Medications Seamlessly.
          </span>
        </motion.li>
        <motion.li className='text-xl lg:text-2xl lg:px-8'
        initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 1.5,
                delay: 1,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          For Busy Professionals -{' '}
          <span className='text-[#858585]'>
            No More Forgetting Daily Medications Amid A Busy Lifestyle.
          </span>
        </motion.li>
      </ul>
    </div>
  )
}

export default WhyChooseUs
