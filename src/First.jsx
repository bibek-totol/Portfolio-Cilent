import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Banner1 from './Banner1';
import QualityServices from './QualityServices';
import RecentWorks from './RecentWorks';
import Experience from './Experience';
import SKills from './SKills';
import ContactUs from './ContactUs';
import Footer from './Footer';

function First() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className='mx-auto max-w-[1400px] bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] h-full'>
      <Navbar />
      <Banner1 />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
        variants={fadeInFromRight}
      >
        <QualityServices />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeInFromRight}
      >
        <RecentWorks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeInFromRight}
      >
        <Experience />
      </motion.div>

      <SKills />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default First;
