import React, { useEffect, useRef } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion'

const What = () => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className='bg-[#F9F9F9] rounded-b-[64px]  overflow-x-hidden px-6 lg:px-24 py-8'>
      <div
        ref={ref}
        className='flex lg:gap-12 flex-col lg:flex-row items-center justify-between overflow-hidden'
      >
        <motion.h2
          className='text-8xl lg:text-9xl font-semibold text-[#858585]'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          How
        </motion.h2>
        <motion.div className='work-first'
        initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '100%' }
          }}
        >
          <span className='text-[#858585] text-lg lg:text-xl'>01</span>
          <h2 className='text-3xl lg:text-5xl font-semibold'>
            Load Medicines In The Device
          </h2>
          <p className='text-xl lg:text-2xl text-[#909090]'>
            Organize Medications Into Dedicated Containers.
          </p>
        </motion.div>
      </div>
      <div className='mt-8 flex lg:gap-12 flex-col-reverse lg:flex-row items-center justify-between overflow-hidden'>
        <motion.div
          className='work-second'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: 0.5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          <span className='text-[#858585] text-lg lg:text-xl'>02</span>
          <h2 className='text-3xl lg:text-5xl font-semibold'>
            Set Schedules Through The App
          </h2>
          <p className='text-xl lg:text-2xl text-[#909090]'>
            Use The Mobile App To Program Alerts And <br /> Reminders.
          </p>
        </motion.div>
        <motion.h2 className='text-8xl lg:text-9xl font-semibold text-[#858585]'
        initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: .5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '100%' }
          }}
        >
          It
        </motion.h2>
      </div>
      <div className='mt-8 flex lg:gap-12 flex-col lg:flex-row items-center justify-between overflow-hidden'>
        <motion.h2
          className='text-8xl lg:text-9xl font-semibold text-[#858585]'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          Works
        </motion.h2>
        <motion.div
          className='work-third'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '100%' }
          }}
        >
          <span className='text-[#858585] text-lg lg:text-xl'>03</span>
          <h2 className='text-3xl lg:text-5xl font-semibold'>
            Get Alerts On Time
          </h2>
          <p className='text-xl lg:text-2xl text-[#909090]'>
            LED Indicators And Voice Alerts Notify You <br /> When It’s Time To
            Take Your Medication.
          </p>
        </motion.div>
      </div>
      <div className='mt-8 flex lg:gap-12 flex-col-reverse lg:flex-row items-center justify-between overflow-hidden'>
        <motion.div
          className='work-second'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1.5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '-100%' }
          }}
        >
          <span className='text-[#858585] text-lg lg:text-xl'>04</span>
          <h2 className='text-3xl lg:text-5xl font-semibold'>Track Usage</h2>
          <p className='text-xl lg:text-2xl text-[#909090]'>
            Monitor Medicine Counts And Refills Conveniently <br /> Through The
            App.
          </p>
        </motion.div>
        <motion.h2
          className='text-8xl lg:text-9xl font-semibold text-[#858585]'
          initial='hidden'
          animate={controls}
          variants={{
            visible: {
              x: '0',
              opacity: 1,
              transition: {
                duration: 2,
                delay: 1.5,
                ease: [0.65, 0, 0.35, 1]
              }
            },
            hidden: { opacity: 0, x: '100%' }
          }}
        >
          ?
        </motion.h2>
      </div>
    </div>
  )
}

export default What

