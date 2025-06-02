import React from 'react'

const Footer = () => {
  return (
    <div className='footer w-full relative bg-black text-white overflow-x-hidden md:mt-5 lg:mt-5 px-5 lg:px-24 py-8'>
      <div className='footer-up mt-5 lg:mt-8 flex gap-8 flex-wrap items-end justify-between'>
        <ul className='px-1 flex gap-5 lg:gap-8 text-lg lg:text-2xl text-[#858585]'>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Support</li>
        </ul>
        <h2 className='email text-3xl lg:text-5xl'>Info.medifo7@gmail.com</h2>
      </div>
      <div className='footer-white-line mt-16 absolute left-1/2 -translate-x-1/2 w-4/5 h-[3px] bg-white rounded-full'></div>
      <div className='footer-middle pt-32 pb-8 flex gap-8 flex-wrap items-start justify-between'>
        <div className='get-in-touch text-lg lg:text-xl flex gap-10 lg:gap-24 text-[#858585]'>
            <h2><span className='text-white font-extrabold'>Phone No:</span><br /> +91 7219785868</h2>
            <p><span className='text-white font-extrabold'>Address :</span><br /> COEP's Bhau Institute, Near Boat Club, <br /> Shivajinager, COEP Pune-411005 MH</p>
        </div>
        <ul className='social-media pr-8 font-bold flex flex-col gap-3 text-lg lg:text-2xl'>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="footer-bottom flex gap-8 flex-wrap items-end justify-between">
        <h2 className='bg-gradient-to-r from-[#358DD3] to-[#B32E97] bg-clip-text text-transparent text-7xl lg:text-9xl font-semibold'>Medi<span className=''>For7</span></h2>
        <h2 className='text-[#858585]'>@2025 @MediFor7. All rights reserved.</h2>
      </div>
    </div>
  )
}

export default Footer
