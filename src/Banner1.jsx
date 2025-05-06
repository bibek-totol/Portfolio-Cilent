import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import im2 from './assets/Screenshot_4-Photoroom.png';
import './App.css';
import { motion } from 'framer-motion';
import BibekCV from './assets/Bibek CV(3.0).pdf';

export default function Banner1() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <div className="relative overflow-hidden">
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-10 lg:px-20 lg:py-20 relative'>

        {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInLeft}
          className='z-20'
        >
          <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#D7C4FC]'>Hi, I'm Bibek</p>
          <p className='text-3xl sm:text-4xl lg:text-6xl font-bold text-[#8953F7] mt-4'>
            Next Level <span className='text-[#D7C4FC]'>Web Developer</span>
          </p>
          <p className='text-base sm:text-lg lg:text-2xl text-[#D7C4FC] font-semibold mt-4'>
            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
          </p>

          <p className='text-cyan-400 mt-8 text-sm sm:text-base font-semibold'>Please Click on these buttons</p>

          <div className='flex flex-wrap gap-3 mt-4'>
            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:to-yellow-600 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out">
              <a href={BibekCV} download="Bibek CV(3.0).pdf" className="flex items-center gap-2 text-sm sm:text-base">
                <MdOutlineFileDownload className="text-xl" />
                Download CV
              </a>
            </button>

            <a href='https://www.linkedin.com/in/bibek-bhowmick-1a0646206/' target="_blank" rel="noopener noreferrer">
              <button className='btn btn-outline text-[#8953F7] rounded-full p-3'>
                <FaLinkedinIn />
              </button>
            </a>
            <a href='https://github.com/bibekbowmick2-2' target="_blank" rel="noopener noreferrer">
              <button className='btn btn-outline text-[#8953F7] rounded-full p-3'>
                <FaGithub />
              </button>
            </a>
          </div>
        </motion.div>

        {/* Big "HI" background text */}
        <p className='pookie absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[#550b56] font-bold text-[100px] sm:text-[180px] lg:text-[280px] opacity-10 lg:opacity-50 z-0'>
          HI
        </p>

        {/* Right Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInRight}
          className='mx-auto mt-10 lg:mt-0 z-30'
        >
          <img className="rounded-3xl border-4 border-[#8953F7] h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]" src={im2} alt="Profile" />
        </motion.div>
      </div>

      {/* Experience & Projects Section */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 lg:mt-0 text-center px-4 pb-10'>
        <div>
          <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>2+ </span>
          <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Years of Experience</p>
        </div>

        <div>
          <span className='text-[#D7C4FC] text-4xl sm:text-5xl lg:text-6xl font-extrabold'>20+ </span>
          <p className='text-[#D7C4FC] text-lg sm:text-xl font-semibold'>Projects Completed</p>
        </div>
      </div>
    </div>
  );
}
