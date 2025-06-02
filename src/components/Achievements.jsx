import React, { useEffect, useMemo, useRef, useState } from 'react'
import achievement from '../assets/achievement.svg'
import achievementFirstImg from '../assets/achievement01.jpeg'
import achievementSecondImg from '../assets/achievement02.jpeg'
import achievementThirdImg from '../assets/achievement03.jpeg'
import achievementFourthImg from '../assets/achievement04.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const Achievements = () => {
  const [minimize, setMinimize] = useState(false)
  const parentRef = useRef()

  useEffect(() => {
    if (window.innerHeight <= 710) {
      setMinimize(true)
    } else {
      setMinimize(false)
    }
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.achivement-img-section',
        scrub: true,
        pin: true,
        // markers: true,
        start: 'top top',
        end: '200% 0%'
      }
    })

    // Image animations
    tl.to(
      '#image03',
      {
        top: '0%',
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    tl.to(
      '#image04',
      {
        top: '0%',
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    // Show new content
    tl.to(
      ['#content03', '#content04'],
      {
        opacity: 1,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    // Hide old content
    tl.to(
      ['#content01', '.content02'],
      {
        opacity: 0,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    tl.to(
      ['#title03', '#title04'],
      {
        opacity: 1,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    // Hide old content
    tl.to(
      ['#title01', '#title02'],
      {
        opacity: 0,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    tl.to(
      ['#num03', '#num04'],
      {
        opacity: 1,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )

    // Hide old content
    tl.to(
      ['#num01', '#num02'],
      {
        opacity: 0,
        duration: 15,
        ease: 'power3.inOut'
      },
      0
    )
  })

  return (
    <div
      ref={parentRef}
      className='flex flex-col items-center justify-between overflow-x-hidden md:mt-5 lg:mt-5 px-6 lg:px-24 pt-8 bg-[#F9F9F9] rounded-[64px]'
    >
      <div className='achievement-section-start-logo-line mt-8 flex justify-center items-center bg-black w-3/5 h-[3px] rounded-4xl'>
        <div className='img-circle h-8 w-8 lg:h-16 lg:w-16 bg-black p-4 flex items-center justify-center rounded-full'>
          <img src={achievement} alt='starLogo' />
        </div>
      </div>
      <div className='achivement-img-section py-12 lg:px-0 md:px-5 px-5 h-screen w-screen flex items-center justify-center flex-wrap gap-8'>
        <div className='first-parent-img overflow-hidden lg:h-full lg:w-[45%] w-full h-1/2 bg-amber-300 relative p-4 lg:p-8 flex flex-col justify-between items-center'>
          <p
            id='content01'
            className=' backdrop-blur-[2px] lg:leading-normal leading-none z-10 lg:text-sm md:text-base text-xs font-semibold '
          >
            We are proud to announce that MediFor7 has successfully completed
            the DST NIDHI EIR Scheme from COEPs Bhau Institute, Pune. This
            recognition strengthens our mission to revolutionize medication
            management for the elderly, hospital patients, and busy
            professionals across India.
          </p>
          {/* Animation */}
          <p
            id='content03'
            className=' backdrop-blur-[2px] lg:leading-normal leading-none z-10 px-4 lg:px-8 absolute opacity-0 lg:text-sm md:text-base text-xs font-semibold'
          >
            We are thrilled to announce that MediFor7 won 1st prize in the
            Entrepreneurship sector at the Ignited Innovators of India (i2i)
            Business Model Competition, COEP Technological University, Pune. Our
            innovative solution simplifies medication management with smart
            hardware and software features.
          </p>
          <img
            className='absolute top-0 left-0 h-full w-full object-cover'
            src={achievementFirstImg}
            alt='achievementFirstImg'
          />
          {/* Animation #1 */}
          <img
            id='image03'
            className='absolute top-[100%] left-0 h-full w-full object-cover'
            src={achievementThirdImg}
            alt='achievementThirdImg'
          />
          <div className='bottom-content-section z-10 w-full flex items-end justify-between'>
            <h2 id='title01' className='text-2xl lg:text-5xl font-semibold'>
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                Recognition
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                Earned
              </span>
            </h2>
            <h2
              id='title03'
              className='absolute opacity-0 text-2xl lg:text-5xl font-semibold'
            >
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                MediFor7
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                Triumph
              </span>
            </h2>
            <span
              id='num01'
              className='text-[#858585] text-6xl lg:text-8xl font-semibold'
            >
              01
            </span>
            <span
              id='num03'
              className='absolute opacity-0 lg:right-8 right-4 text-[#858585] text-6xl lg:text-8xl font-semibold'
            >
              03
            </span>
          </div>
        </div>
        <div className='second-parent-img overflow-hidden lg:h-full lg:w-[45%] w-full h-1/2 bg-amber-300 relative p-4 lg:p-8 flex flex-col justify-between'>
          <p className='  backdrop-blur-[2px] lg:leading-normal leading-none z-10 lg:text-sm md:text-base text-xs font-semibold '>
            {minimize ? (
              <span className='content02'>
                We are thrilled to announce our startup MediFor7 has secured the
                Startup India Seed Fund Grant through COEP’s Bhau Institute,
                Pune. This milestone reflects our commitment to revolutionizing
                medication management for the elderly, patients, and
                professionals through our innovative hardware and software
                solution.
              </span>
            ) : (
              <span className='content02'>
                We Are Thrilled To Announce That Our Startup, MediFor7, Has
                Successfully Secured The Prestigious Startup India Seed Fund
                Grant Through COEPs Bhau Institute, Pune. This Remarkable
                Milestone Reflects Our Commitment To Revolutionizing Medication
                Management For Elderly Individuals, Hospital Patients, And Busy
                Professionals Through Our Innovative Hardware And Software
                Solution.
              </span>
            )}
          </p>
          {/* Animation */}
          <p
            id='content04'
            className=' backdrop-blur-[2px] z-10 pr-4 lg:pr-8 absolute opacity-0 lg:text-sm md:text-base text-xs lg:leading-normal leading-none font-semibold'
          >
            MediFor7 is a revolutionary solution for medication adherence,
            proudly granted 4 design patents by the Indian government. With
            28-dose containers, LED alerts, voice reminders, and a mobile app,
            it ensures seamless and reliable medication management.
          </p>
          <img
            className='absolute top-0 left-0 h-full w-full object-cover'
            src={achievementSecondImg}
            alt='achievementSecondImg'
          />
          {/* Animation #2 */}
          <img
            id='image04'
            className='absolute top-[100%] left-0 h-full w-full object-cover'
            src={achievementFourthImg}
            alt='achievementFourthImg'
          />
          <div className='bottom-content-section z-10 w-full flex items-end justify-between'>
            <h2 id='title02' className='text-2xl lg:text-5xl font-semibold '>
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                Startup
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                India Grant
              </span>
            </h2>
            <h2
              id='title04'
              className='absolute opacity-0 text-2xl lg:text-5xl font-semibold '
            >
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                MediFor7
              </span>
              <br />
              <span className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>
                Innovation
              </span>
            </h2>
            <span
              id='num02'
              className='text-[#858585] text-6xl lg:text-8xl font-semibold'
            >
              02
            </span>
            <span
              id='num04'
              className='text-[#858585] absolute opacity-0 lg:right-8 right-4 text-6xl lg:text-8xl font-semibold'
            >
              04
            </span>
          </div>
        </div>
      </div>
      <div className='h-[200vh] bg-transparent'></div>
    </div>
  )
}

export default Achievements
