import gsap from 'gsap'
import About from './components/About'
import Achievements from './components/Achievements'
import Application from './components/Application'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Sponsor from './components/Sponsor'
import What from './components/What'
import WhyChooseUs from './components/WhyChooseUs'
import { useEffect, useState } from 'react'
import NavOptionPage from './components/NavOptionPage'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

function App () {
  const [navPage, setNavPage] = useState(false)
  const [showBg, setShowBg] = useState(true)
  const [showMenuBtn, setshowMenuBtn] = useState(true)

  const handleNavPageAnimation = () => {
    gsap.to('.menu-option-opening-bg', {
      scale: 100,
      duration: 1.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setShowBg(false) // React-safe way to remove the element
      }
    })
  }

  const handleNavPageReverseAnimation = () => {
    gsap.to('.menu-option-opening-bg', {
      scale: 0,
      duration: 1.6,
      ease: 'power2.inOut',
      onComplete: () => {
        setShowBg(true) // React-safe way to remove the element
      }
    })
  }

  const [isResizing, setIsResizing] = useState(false)
  let resizeTimeout

  useEffect(() => {
  let resizeTimeout;
  let lastWindowWidth = window.innerWidth;

  const handleResize = () => {
    if (window.innerWidth !== lastWindowWidth) {
      lastWindowWidth = window.innerWidth;

      setIsResizing(true);

      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div className={`app ${navPage ? 'h-screen overflow-hidden' : ''}`}>
      {isResizing && (
        <div className='resize-overlay'>
          <p>Please keep the device stable. Adjusting layout…</p>
        </div>
      )}
      {navPage ? (
        <NavOptionPage
          showMenuBtn={showMenuBtn}
          setshowMenuBtn={setshowMenuBtn}
          handleNavPageReverseAnimation={handleNavPageReverseAnimation}
          handleNavPageAnimation={handleNavPageAnimation}
          navPage={navPage}
          setNavPage={setNavPage}
          setShowBg={setShowBg}
        />
      ) : (
        ''
      )}
      <>
        <Navbar
          showMenuBtn={showMenuBtn}
          setshowMenuBtn={setshowMenuBtn}
          handleNavPageReverseAnimation={handleNavPageReverseAnimation}
          handleNavPageAnimation={handleNavPageAnimation}
          navPage={navPage}
          setNavPage={setNavPage}
        />
        <div id='page_1'>
          <Hero />
          <Sponsor />
        </div>
        <div id='page_2'>
          <About />
          <What />
        </div>
        <Feature />
        <Quote />
        <WhyChooseUs />
        <Application />
        <Achievements />
        <Footer />
      </>
      {showBg && (
        <div className='menu-option-opening-bg h-10 w-10 bg-[#FF3B30] absolute -top-15 -right-15 rounded-full z-40' />
      )}
    </div>
  )
}

export default App
