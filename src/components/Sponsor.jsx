import React, { useEffect, useRef } from 'react'
import sponsorTmg from '../utils/assetServer.js'
import { useAnimation, useInView } from 'framer-motion'
import { motion } from 'framer-motion'

const Sponsor = () => {
  const text = 'Sponsored By'
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
    <div className='mt-8 w-full flex flex-col items-center justify-center'>
      <h2 ref={containerRef} className='text-2xl lg:text-5xl font-semibold'>
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
                {char}
              </motion.span>
            </span>
          )
        })}
      </h2>
      <motion.div
        className='marque-wrapper overflow-hidden relative w-screen lg:w-4/5 mt-4 lg:mt-8 py-8'
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
        <div className='marque-content w-fit translate flex gap-10 lg:gap-20'>
          {sponsorTmg.map((imgSrc, i) => (
            <img
              key={i}
              className='h-8 lg:h-20'
              src={imgSrc}
              alt='sponsorImg'
            />
          ))}
          {sponsorTmg.map((imgSrc, i) => (
            <img
              key={i}
              className='h-8 lg:h-20'
              src={imgSrc}
              alt='sponsorImg'
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Sponsor
