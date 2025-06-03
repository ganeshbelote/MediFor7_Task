import React, { useRef, useState } from 'react'
import menuIcon from '../assets/menu.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = ({
  handleNavPageAnimation,
  navPage,
  setNavPage,
  handleNavPageReverseAnimation,showMenuBtn, setshowMenuBtn
}) => {
  const navRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(navRef.current, {
      opacity: 0,
      width: '30px',
      duration: 1,
      ease: 'expo.inOut'
    })
    tl.from('.menuOptions', {
      opacity: 0,
      width: '30px',
      duration: 1,
      ease: 'expo.inOut'
    })
    tl.from(
      '.btn-wrapper',
      {
        opacity: 0,
        duration: 0.5,
        ease: 'expo.inOut'
      },
      '<'
    )
    tl.from(
      '#LogoImg',
      {
        opacity: 0,
        duration: 0.5,
        ease: 'expo.inOut'
      },
      '<'
    )
  })

  const handleNavPage = () => {
    document.body.style.overflow = 'hidden';
    setshowMenuBtn(false)
    setTimeout(() => setNavPage(prev => !prev), 1500)
    !navPage ? handleNavPageAnimation() : handleNavPageReverseAnimation()
  }
  return (
    <div
      id='Navbar'
      className='overflow-hidden w-screen px-4 lg:px-24 py-4 font-medium flex items-center justify-center relative'
    >
      <header
        ref={navRef}
        className='w-full bg-[#0d0d0d] text-white px-6 py-3 rounded-2xl flex justify-between'
      >
        <img
          id='LogoImg'
          src='/medifor7_white_logo.png'
          alt='logo'
          className='logo h-12'
        />
        <ul className='menuOptions px-4 py-2 rounded-xl w-fit bg-[#252525] hidden lg:flex items-center justify-center gap-6'>
          <li className='hover:text-[#FF3B30]'>Home</li>
          <li className='hover:text-[#FF3B30]'>About</li>
          <li className='hover:text-[#FF3B30]'>Features</li>
          <li className='hover:text-[#FF3B30]'>Achievements</li>
        </ul>
        <div className='btn-wrapper flex gap-8'>
          <button className='free-trial-btn hidden md:block lg:block px-4 py-2 rounded-xl bg-white text-black hover:scale-105'>
            Free Trial
          </button>
          {showMenuBtn && (
            <button onClick={handleNavPage} className='lg:hidden relative z-50'>
              <img className='h-8' src={menuIcon} alt='menuIcon' />
            </button>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar
