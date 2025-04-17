import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Banner1 from "./Banner1";
import QualityServices from "./QualityServices";
import RecentWorks from "./RecentWorks";
import Experience from "./Experience";
import SKills from "./SKills";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import  "./App.css";

function First() {
  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (


    
    <div className="max-w-screen-xl mx-auto overflow-x-hidden bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] h-full">
      <Navbar />
      <Banner1 />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeInFromRight}
        id="services"
      
      >
        <QualityServices />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeInFromRight}
        id="works"
      >
        <RecentWorks />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={fadeInFromRight}
        id="education"
      >
        <Experience />
      </motion.div>


     <div id="skills">
      <SKills />
      </div>
      <div id="contact">
      <ContactUs />
      </div>

      <Footer />
    </div>
  );
}

export default First;
