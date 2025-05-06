import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import im1 from './assets/Screenshot_58.png';
import im2 from './assets/Screenshot_14.png';
import im3 from './assets/Screenshot_75.png';
import im4 from './assets/Screenshot_2.png';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router";

export default function RecentWorks() {
  return (
    <div className='mt-24 px-4 sm:px-6 lg:px-16'>
      <div className='text-center'>
        <p className='text-3xl sm:text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          My Recent <span className='text-[#B694FA]'>Works</span>
        </p>
        <p className='text-[#B694FA] font-semibold max-w-2xl mx-auto mt-4 text-sm sm:text-base'>
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <Tabs>
        <TabList className='flex flex-wrap justify-center gap-3 text-sm sm:text-base lg:text-xl w-full lg:w-2/3 mx-auto mt-10 border text-amber-50 font-bold bg-black p-3 rounded-full'>
          <Tab>MERN Stack Projects</Tab>
          <Tab>Next.js Projects</Tab>
        </TabList>

        {/* MERN Projects */}
        <TabPanel className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 justify-center items-start'>

            {[{ img: im1, link: "https://bibek-iems-portal.netlify.app/", desc: "IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline scheduling, resource sharing, and management.", to: "/details1" },
              { img: im2, link: "https://unruly-destruction.surge.sh/", desc: "GameCritics-Hub2 is a game review platform with user ratings, recommendations, and real-time news & updates for gamers.", to: "/details2" },
              { img: im3, link: "https://tech-tales2025.netlify.app/", desc: "Tech-Tales is a feature-rich blogging app with comments, calendar, and wishlist integration to enhance writing experiences.", to: "/details3" }
            ].map((proj, idx) => (
              <Zoom key={idx}>
                <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-lg rounded-2xl overflow-hidden p-5 hover:scale-105 transition duration-300">
                  <img src={proj.img} alt="Project Preview" className="w-full h-60 object-cover rounded-lg" />
                  <div className="mt-4 space-y-2">
                    <a className='text-blue-300 font-bold underline text-sm sm:text-lg' href={proj.link} target="_blank" rel="noopener noreferrer">Live Link</a>
                    <p className='text-fuchsia-300 font-medium text-sm sm:text-base'>{proj.desc}</p>
                    <div className="flex justify-end mt-3">
                      <Link to={proj.to}>
                        <button className="btn btn-primary px-4 py-2 rounded bg-[#9463F8] text-white text-sm sm:text-base hover:bg-[#7d4edc] transition">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Zoom>
            ))}

          </div>
        </TabPanel>

        {/* Next.js Projects */}
        <TabPanel className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 justify-center items-start'>
            <Zoom>
              <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-lg rounded-2xl overflow-hidden p-5 hover:scale-105 transition duration-300">
                <img src={im4} alt="Schedule Processing" className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4 space-y-2">
                  <a className='text-blue-300 font-bold underline text-sm sm:text-lg' href="https://schedule-processing-next-js.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  <p className='text-fuchsia-300 font-medium text-sm sm:text-base'>
                    <span className='font-bold'>Schedule Processing</span> is a web application used for managing and scheduling events and tasks with secure role-based access and notifications.
                  </p>
                  <div className="flex justify-end mt-3">
                    <Link to="/details4">
                      <button className="btn btn-primary px-4 py-2 rounded bg-[#9463F8] text-white text-sm sm:text-base hover:bg-[#7d4edc] transition">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
