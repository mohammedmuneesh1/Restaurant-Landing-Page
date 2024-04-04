import React, { useState } from 'react';
import {BsCart2} from "react-icons/bs";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" lg:px-16 px-4 bg-transparent flex flex-wrap items-center py-4 ">
    <div className="flex-1 flex justify-between items-center">
      <a href="#" className="text-xl">Company</a>
    </div>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block" onClick={toggleMenu}>
      <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className={`md:flex md:items-center md:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
      <nav>
        <ul className="md:flex items-center justify-between text-lg font-semibold text-gray-800 pt-4 md:pt-0">
          <li><a className="md:p-4 py-3 px-0 block" href="#">Home</a></li>
          <li><a href="#about-container-id" className="md:p-4 py-3 px-0 block">About</a></li>
          <li><a className="md:p-4 py-3 px-0 block" href="#">Testimonials</a></li>
          <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a></li>
          <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 " href="#"><BsCart2 className='text-2xl'/></a></li>
          <li><button className=' bg-white py-3 px-5 rounded-3xl  font-semibold  md:mx-4  '>Booking Now</button></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
