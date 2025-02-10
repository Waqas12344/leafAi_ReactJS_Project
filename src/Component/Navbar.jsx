import React, { useState } from 'react'
import { logo } from '../assets'
import { navLinks } from '../constant'
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }


  return (
    <div className='flex items-center justify-between max-w-[1260px] mx-auto my-[40px] px-3 lg:px-0'>
      <div className='flex items-center w-[90px] md:w-[111px] '>
        <img src={logo} alt="" />
      </div>
      <div className='hidden md:flex gap-[48px]'>
        <ul className='flex items-center justify-between gap-[48px]'>
          {
            navLinks.map((item, index) => (
              <li key={index} className='hover:text-[#317B22]' >
                <a href='#' className='text-base'> {item.title}</a>
              </li>
            ))
          }
        </ul>
        <button className='bg-[#317B22] py-[12px] px-[22px] text-[16px] rounded-[7px] text-[#ffffff]'>Get Started</button>
      </div>
      {/* mobile view start */}

      <div className="md:hidden flex items-center">
        <button onClick={toggleNavbar} className="text-2xl">{mobileDrawerOpen ? <RxCross1 /> : <CiMenuBurger />}</button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed right-0 top-18 z-20  w-full p-12 flex flex-col justify-center items-center bg-[#ffffff] lg:hidden">
          <ul>
            {
              navLinks.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href='#' className='text-base'> {item.title}</a>
                </li>
              ))
            }
          </ul>
          <button className='bg-[#317B22] py-[12px] px-[20px] rounded text-[#ffffff]'>Get Started</button>
        </div>
      )}
      {/* mobile view end */}
    </div>
  )
}

export default Navbar