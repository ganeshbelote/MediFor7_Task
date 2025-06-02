import React, { useState } from 'react'
import heroImg from '../assets/hero_image.png'
import trustedByImg from '../assets/trustedByImg.png'
import playBtn from '../assets/playBtn.svg'
import mediforAtractiveLogo from '../assets/mediforAtractiveLogo.svg'
import { useGSAP } from '@gsap/react'
import gsap, { Power1 } from 'gsap'
import { motion } from 'framer-motion'
import { useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const [imgHover, setImgHover] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className='hero overflow-x-hidden md:mt-5 lg:mt-5 px-6 lg:px-24 py-8'>
      <span className='text-6xl lg:text-8xl font-semibold z-10 overflow-hidden'>
        {'MediFor7'.split('').map((char, i) => (
          <span key={i} className='inline-block overflow-hidden'>
            <motion.span
              className={`inline-block ${
                i <= 3 ? 'text-[#909090]' : 'text-black'
              }`}
              key={i}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{
                ease: [0.65, 0, 0.35, 1],
                delay: i * 0.1,
                duration: 0.6
              }}
            >
              {char}
            </motion.span>
          </span>
        ))}
      </span>
      <h2 className='text-6xl lg:text-8xl font-semibold relative z-10 flex items-center flex-wrap text-nowrap'>
        <motion.img
          className='shadow-[0_0_8px_#858585] overflow-hidden object-contain rounded-full h-8 md:h-12 lg:h-18 bg-[#FF3B30] '
          src={mediforAtractiveLogo}
          alt='mediforAtractiveLogo'
          initial={{
            opacity: 0,
            x: '-100%'
          }}
          animate={{
            opacity: 1,
            x: '0'
          }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.6
          }}
        />
        <span className='ml-1 flex items-center flex-nowrap text-nowrap'>
          {'Your Own'.split('').map((char, i) => (
            <span key={i} className='inline-block overflow-hidden'>
              <motion.span
                className={`inline-block `}
                key={i}
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  delay: i * 0.1,
                  duration: 0.6
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            </span>
          ))}
        </span>
        <br />
      </h2>
      <span className='lg:-mt-5 flex flex-wrap items-center text-6xl lg:text-8xl font-semibold relative'>
        <span className='text-[#858585] z-10'>
          <span className='flex items-center flex-nowrap text-nowrap'>
            {'Medication'.split('').map((char, i) => (
              <span key={i} className='inline-block overflow-hidden'>
                <motion.span
                  className={`inline-block `}
                  key={i}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    ease: [0.65, 0, 0.35, 1],
                    delay: i * 0.05,
                    duration: 0.4
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        </span>
        <motion.div
          className='hero-img-container relative rotate-2  hover:-rotate-2 hidden lg:block cursor-pointer hover:scale-150 transition-all ease-in-out duration-350 '
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            ease: Power1.easeInOut,
            duration: 0.8
          }}
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          <img
            className='hover:shadow-[0_0_8px_#858585] h-38 mx-3 py-4 px-12 bg-[#F2F2F2] rounded-2xl'
            src={heroImg}
            alt='heroImg'
          />
          <button
            className={`play-btn ${
              imgHover ? 'opacity-100' : 'opacity-0'
            } transition-all ease-in-out duration-350 absolute -top-3 -right-3`}
          >
            <img
              className='shadow-[0_0_8px_#858585] object-contain rounded-full h-12 bg-[#ffc100] '
              src={playBtn}
              alt='playBtn'
            />
          </button>
        </motion.div>
        <span className='z-10 md:ml-2 lg:ml-0'>
          <span className='flex items-center flex-nowrap text-nowrap overflow-hidden'>
            {'Manager'.split('').map((char, i) => (
              <span key={i} className='inline-block '>
                <motion.span
                  className={`inline-block ${char == 'g' ? 'pb-2' : ''}`}
                  key={i}
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    ease: [0.65, 0, 0.35, 1],
                    delay: i * 0.1,
                    duration: 0.6
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        </span>
      </span>
      <div className='hero-bottom mt-8 md:mt-8 lg:mt-24 flex items-end justify-between flex-wrap gap-8'>
        <p className='text-xl lg:text-2xl'>
          <span>
            {'Our Mission Is To Improve The Lives Of Individuals And Families'
              .split('')
              .map((char, i) => (
                <span key={i} className='inline-block overflow-hidden'>
                  <motion.span
                    className={`inline-block `}
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: i * 0.01,
                      duration: 0.2
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              ))}
          </span>
          <br />
          <span>
            {'By Providing A Smart, Reliable, And Affordable Solution For Medication Management.'
              .split('')
              .map((char, i) => (
                <span key={i} className='inline-block overflow-hidden'>
                  <motion.span
                    className={`inline-block `}
                    key={i}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: i * 0.01,
                      duration: 0.2
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                </span>
              ))}
          </span>
        </p>
        <div className='trusted-by flex gap-5'>
          <img className='h-9' src={trustedByImg} alt='trustedByImg' />
          <p className='text-sm lg:text-xl'>
            <span ref={ref} className='inline-block'>
              {'Trusted By 1600+ people'.split('').map((char, i) => (
                <span key={i} className='inline-block overflow-hidden'>
                  <motion.span
                    className='inline-block'
                    initial='hidden'
                    animate={controls}
                    variants={{
                      visible: {
                        y: '0%',
                        opacity: 1,
                        transition: {
                          duration: 0.2,
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
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero


