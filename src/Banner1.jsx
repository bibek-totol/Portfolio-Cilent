import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import im2 from './assets/Screenshot_4-Photoroom.png'
import './App.css'
import { motion } from 'framer-motion';
import BibekCV from './assets/Bibek CV(2.0).pdf';

export default function Banner1() {

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  // Right section animation (Fade in from right)
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8} },
  };

  return (
    <div>
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center p-10 lg:p-25 gap-x-50 relative'>

      {/* Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, }}
          variants={fadeInLeft}
          className='relative z-20'
        >
        <p className='text-3xl lg:text-4xl font-bold text-[#D7C4FC]'>Hi, I'm Bibek</p>
        <p className='text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          Next Level <span className='text-[#D7C4FC]'> Web Developer</span>
        </p>
        
        
        <p className='text-[#D7C4FC] font-bold text-1xl lg:text-2xl mt-5 relative '>
          I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
        </p>



        <p className='pookie2 mt-10   text-cyan-400'>Please Click on these buttons</p>

        <div className='flex gap-3'>
       
        <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'>
      <a href={BibekCV} download="Bibek_CV.pdf">
        <span>Download CV<MdOutlineFileDownload /></span> 
      </a>
    </button>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'><a href='https://www.linkedin.com/in/bibek-bhowmick-1a0646206/'><FaLinkedinIn /></a></button>
          <button className='btn btn-outline text-[#8953F7] rounded-full p-4 mt-5'><a href='https://github.com/bibekbowmick2-2'><FaGithub /></a></button>
        </div>
        </motion.div>

      
      
      <p className='pookie animate__animated animate__heartBeat animate__infinite animate__slower animate__delay-0.5s font-bold text-[#550b56] [font-size:280px] absolute lg:top-36 lg:left-[480px] z-10
      opacity-20 lg:opacity-50'>
        HI
      </p>

      
      {/* // Right Section */}
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, }}
          variants={fadeInRight}
          className='h-[400px] w-[300px] lg:h-[500px] lg:w-[400px] mt-8 relative z-30'
        >
        <img className="rounded-3xl border-4 border-[#8953F7]" src={im2} alt="Profile" />
      </motion.div>

      <div className=''>
        <span className='text-[#D7C4FC] [font-size:50px] lg:[font-size:90px] font-extrabold '>2+ <span className='text-2xl text-[#D7C4FC]  '>Years of Experience</span></span>
      
      </div>


      <div className=''>
        <span className='text-[#D7C4FC] [font-size:50px] lg:[font-size:90px] font-extrabold '>20+ <span className='text-2xl text-[#D7C4FC]  '>Projects Completed</span></span>
      
      </div>


    </div>


    


    </div>
  )
}
