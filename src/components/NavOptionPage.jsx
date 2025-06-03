import React, { useEffect, useState } from 'react'
import cross from '../assets/cross.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const NavOptionPage = ({
  setNavPage,
  setShowBg,
  showMenuBtn,
  setshowMenuBtn
}) => {

  useEffect(() => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVh(); // Initial set
  window.addEventListener('resize', setVh);

  return () => window.removeEventListener('resize', setVh);
}, []);


  const handleNavPage = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowBg(true)
        setNavPage(false)
        setshowMenuBtn(true)
        document.body.style.overflow = '' // Only after animation completes
      }
    })

    tl.to(['.navpage-up', '.nav-options'], {
      opacity: 0,
      duration: 0.4,
      delay: 0.2,
      ease: 'power4.inOut'
    })

    tl.to('#NavOptionPage', {
      height : '40px',
      width : '40px',
      scale: 0.05, // You had `-100`, which flips the element and causes weirdness
      borderRadius: '50%',
      duration: 1,
      transformOrigin: '115% -15%',
      ease: 'power2.inOut'
    })
  }

  useGSAP(() => {
    gsap.set(['.navpage-up', '.nav-options'], { opacity: 0 }) // prevent flash
    gsap.to(['.navpage-up', '.nav-options'], {
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: 'power4.inOut'
    })
  })

  return (
    <div
      id='NavOptionPage'
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      className={`fixed top-0 right-0 z-50 w-screen overflow-x-hidden flex flex-col justify-between py-8 md:px-10 px-6 bg-[#FF3B30] `}
    >
      <div className='navpage-up w-full flex justify-end'>
        <button onClick={handleNavPage}>
          <img className='h-8' src={cross} alt='cross' />
        </button>
      </div>
      <div className='nav-options flex flex-col items-start justify-between'>
        <ul className='md:text-7xl text-4xl md:font-semibold font-bold flex flex-col md:gap-5 gap-8'>
          <li className='hover:text-white transition-all ease-in-out duration-300'>
            Home
          </li>
          <li className='hover:text-white transition-all ease-in-out duration-300'>
            About
          </li>
          <li className='hover:text-white transition-all ease-in-out duration-300'>
            Features
          </li>
          <li className='hover:text-white transition-all ease-in-out duration-300'>
            Achievements
          </li>
          <li className='md:hidden flex items-end bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent'>Get One &gt;</li>
        </ul>
      </div>
    </div>
  )
}

export default NavOptionPage

