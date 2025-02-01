import React from 'react'
import ima1 from './assets/logo.webp'

export default function Navbar() {
  return (
    <div className="navbar  bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] shadow-sm">
           <li><a className='text-white font-extrabold'>Services</a></li>
        <li><a className='text-white font-extrabold'>Works</a></li>
        <li><a className='text-white font-extrabold'>Resume</a></li>
        <li><a className='text-white font-extrabold'>Skills</a></li>
        <li><a className='text-white font-extrabold'>Contact</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-white">
        <img className='max-w-10 max-h-10' src={ima1} alt="" />
      </a>
      <a className='text-white'>bibektotol@gmail.com</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a className='text-white font-extrabold '>Services</a></li>
        <li><a className='text-white font-extrabold'>Works</a></li>
        <li><a className='text-white font-extrabold'>Resume</a></li>
        <li><a className='text-white font-extrabold'>Skills</a></li>
        <li><a className='text-white font-extrabold'>Contact</a></li>

      </ul>
    </div>
    <div className="navbar-end">
      <button className='btn bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] hover:bg-[linear-gradient(-30deg,_rgba(30,5,36,1)_0%,_rgba(157,78,166,1)_51%,_rgba(105,40,204,1)_100%)] transition-all duration-800 p-6 text-white text-center rounded-full
      '>Hire Me</button>
    </div>
  </div>
  )
}
