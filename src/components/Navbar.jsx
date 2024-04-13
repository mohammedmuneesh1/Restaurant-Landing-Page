import React, { useState } from 'react';
import {BsCart2} from "react-icons/bs";
import { Link } from 'react-router-dom';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" lg:px-16 px-4 bg-transparent flex flex-wrap items-center py-4 ">
    <div className="flex-1 flex justify-between items-center">
       {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link to="/" className="font-serif font-extrabold text-xl tracking-normal sm:tracking-wider">FreshBite Café</Link>
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
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><Link to="/" className="md:p-4 py-3 px-0 block" href="#Home" >Home</Link></li>
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a href="#About" className="md:p-4 py-3 px-0 block">About</a></li>
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a className="md:p-4 py-3 px-0 block" href="#">Testimonials</a></li>
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a></li>
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 " href="#"><BsCart2 className='text-2xl'/></a></li>
           {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li><button className=' bg-white py-3 px-5 rounded-3xl  font-semibold  md:mx-4  '>Booking Now</button></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
