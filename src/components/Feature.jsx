import React, { useEffect, useRef } from 'react'
import star from '../assets/star.svg'
import { useAnimation, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const Feature = () => {
  const text = 'Features Of Our Device'
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, {
    once: true,
    margin: '0px 0px -100px 0px'
  })
  const letters = text.split('')
  const center = Math.floor(letters.length / 2)

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center justify-between overflow-x-hidden md:mt-5 lg:mt-5 px-6 lg:px-24 py-8'
    >
      <div className='feature-section-start-logo-line flex justify-center items-center bg-black w-3/5 h-[3px] rounded-4xl'>
        <img className='h-8 lg:h-16' src={star} alt='starLogo' />
      </div>
      <h2 className='mt-12 text-center leading-none text-6xl lg:text-8xl font-semibold'>
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
      </h2>
      <motion.div
        className='feature-points flex flex-col md:items-center lg:items-center justify-center mt-8 px-6 md:px-0 lg:px-0'
        initial='hidden'
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            transition: {
              duration: 2,
              delay: 0.5,
              ease: [0.65, 0, 0.35, 1]
            }
          },
          hidden: { opacity: 0 }
        }}
      >
        <div className='feature-points-up w-full flex flex-wrap'>
          <div className='feature-point md:px-8 lg:px-8 py-8 relative md:w-1/2 lg:w-1/2'>
            <h2 className='text-3xl lg:text-4xl font-semibold'>
              <span className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                28 Weekly
              </span>
              <br /> Medicine Containers
            </h2>
            <p className='text-xl lg:text-2xl text-[#909090]'>
              Allows daily 4 doses for a week.
            </p>
            <div className='border-right hidden lg:block md:block absolute right-0 bottom-0 h-4/5 w-[3px] bg-gradient-to-b from-[#90909000] to-black'></div>
            <div className='border-bottom hidden lg:block md:block absolute right-0 bottom-0 w-4/5 h-[3px] bg-gradient-to-r from-[#90909000] to-black'></div>
          </div>
          <div className='feature-point md:px-8 lg:px-8 py-8 relative md:w-1/2 lg:w-1/2'>
            <h2 className='text-3xl lg:text-4xl font-semibold'>
              <span className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                4 Special
              </span>
              <br /> Purpose Containers
            </h2>
            <p className='text-xl lg:text-2xl text-[#909090]'>
              For additional medications.
            </p>
            <div className='border-bottom hidden lg:block md:block absolute left-0 bottom-0 w-4/5 h-[3px] bg-gradient-to-l from-[#90909000] to-black'></div>
          </div>
        </div>
        <div className='feature-points-middle flex flex-wrap'>
          <div className='feature-point md:px-8 lg:px-8 py-8 relative md:w-1/2 lg:w-1/2'>
            <h2 className='text-3xl lg:text-4xl font-semibold'>
              LED Alerts
              <br />
              <span className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                For Liquid Medications
              </span>
            </h2>
            <p className='text-xl lg:text-2xl text-[#909090]'>
              Ensures timely consumption.
            </p>
            <div className='border-right hidden lg:block md:block absolute right-0 top-0 h-full w-[3px] bg-gradient-to-t from-[#909090] to-black'></div>
            <div className='border-bottom hidden lg:block md:block absolute right-0 bottom-0 w-4/5 h-[3px] bg-gradient-to-r from-[#90909000] to-black'></div>
          </div>
          <div className='feature-point md:px-8 lg:px-8 py-8 md:w-1/2 lg:w-1/2 relative'>
            <h2 className='text-3xl lg:text-4xl font-semibold'>
              LED Alerts <br />
              <span className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                For Insulin
              </span>
            </h2>
            <p className='text-xl lg:text-2xl text-[#909090]'>
              Ideal for diabetes patients.
            </p>
            <div className='border-bottom hidden lg:block md:block absolute left-0 bottom-0 w-4/5 h-[3px] bg-gradient-to-l from-[#90909000] to-black'></div>
          </div>
        </div>
        <div className='feature-points-bottom md:px-8 lg:px-8 py-8 relative'>
          <h2 className='text-3xl lg:text-4xl font-semibold'>
            <span className='font-bold text-4xl lg:text-5xl bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
              Voice Alerts
            </span>
            <br />
            With LED Indicators
          </h2>
          <p className='text-xl lg:text-2xl text-[#909090]'>
            Clear and timely reminders for every dose.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Feature
