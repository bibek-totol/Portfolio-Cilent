import React from 'react';
import ima1 from './assets/logo.webp';

export default function Navbar() {
  return (
    <div className="navbar bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] shadow-sm px-4 sm:px-6 lg:px-12 py-3">
      {/* Start Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] rounded-box w-48 space-y-2">
            <li><a className="text-white font-extrabold">Services</a></li>
            <li><a className="text-white font-extrabold">Works</a></li>
            <li><a className="text-white font-extrabold">Education</a></li>
            <li><a className="text-white font-extrabold">Skills</a></li>
            <li><a className="text-white font-extrabold">Contact</a></li>
          </ul>
        </div>

        {/* Logo & Email */}
        <div className="flex items-center gap-2">
          <a className="btn btn-ghost p-0">
            <img className="w-10 h-10 object-contain" src={ima1} alt="Logo" />
          </a>
          <span className="text-white text-xs sm:text-sm hidden xs:inline">bibektotol@gmail.com</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li><a className="text-white font-extrabold">Services</a></li>
          <li><a className="text-white font-extrabold">Works</a></li>
          <li><a className="text-white font-extrabold">Education</a></li>
          <li><a className="text-white font-extrabold">Skills</a></li>
          <li><a className="text-white font-extrabold">Contact</a></li>
        </ul>
      </div>

      {/* End Section */}
      <div className="navbar-end">
        <button className="btn text-xs sm:text-sm px-4 py-2 bg-[linear-gradient(30deg,_rgba(105,40,204,1)_0%,_rgba(157,78,166,1)_51%,_rgba(30,5,36,1)_100%)] hover:bg-[linear-gradient(-30deg,_rgba(30,5,36,1)_0%,_rgba(157,78,166,1)_51%,_rgba(105,40,204,1)_100%)] transition-all duration-700 text-white rounded-full">
          Hire Me
        </button>
      </div>
    </div>
  );
}
