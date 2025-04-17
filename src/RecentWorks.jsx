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
    <div className='mt-32 px-4'>
      <div className='text-center'>
        <p className='text-4xl lg:text-6xl font-bold text-[#8953F7] mt-5'>
          My Recent <span className='text-[#B694FA]'>Works</span>
        </p>
        <p className='text-[#B694FA] font-bold max-w-xl mx-auto mt-5'>
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <Tabs>
        <TabList className='flex justify-center gap-5 text-xs lg:text-xl w-full lg:w-1/2 mx-auto mt-14 border text-amber-50 font-bold bg-black p-3 rounded-full'>
          <Tab>MERN Stack Projects</Tab>
          <Tab>Next.js Projects</Tab>
        </TabList>

        <TabPanel className='mt-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 justify-center items-start p-5'>

            {/* Card 1 */}
            <Zoom>
              <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-xl rounded-2xl overflow-hidden  w-full p-5 hover:scale-105 transition-transform duration-300">
                <img src={im1} alt="IEMS" className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4">
                  <a className='text-blue-300 font-bold underline text-lg' href="https://bibek-iems-portal.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  <p className='text-fuchsia-300 font-semibold mt-2'>
                    IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline scheduling, resource sharing, and management.
                  </p>
                  <div className="flex justify-end mt-4">
                    <Link to="/details1">
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>

            {/* Card 2 */}
            <Zoom>
              <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-xl rounded-2xl overflow-hidden  w-full p-5 hover:scale-105 transition-transform duration-300">
                <img src={im2} alt="GameCritics-Hub2" className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4">
                  <a className='text-blue-300 font-bold underline text-lg' href="https://unruly-destruction.surge.sh/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  <p className='text-fuchsia-300 font-semibold mt-2'>
                    GameCritics-Hub2 is a game review platform with user ratings, recommendations, and real-time news & updates for gamers.
                  </p>
                  <div className="flex justify-end mt-4">
                    <Link to="/details2">
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>

            {/* Card 3 */}
            <Zoom>
              <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-xl rounded-2xl overflow-hidden  w-full p-5 hover:scale-105 transition-transform duration-300">
                <img src={im3} alt="Tech-Tales" className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4">
                  <a className='text-blue-300 font-bold underline text-lg' href="https://tech-tales2025.netlify.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  <p className='text-fuchsia-300 font-semibold mt-2'>
                    Tech-Tales is a feature-rich blogging app with comments, calendar, and wishlist integration to enhance writing experiences.
                  </p>
                  <div className="flex justify-end mt-4">
                    <Link to="/details3">
                      <button className="btn btn-primary">View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>

          </div>
        </TabPanel>



        {/* 2nd Tab */}

        <TabPanel className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 gap-y-10 justify-center items-start p-5'>

        <Zoom>
              <div className="bg-gradient-to-br from-purple-700 via-fuchsia-600 to-black shadow-xl rounded-2xl overflow-hidden  w-full p-5 hover:scale-105 transition-transform duration-300">
                <img src={im4} alt="Tech-Tales" className="w-full h-60 object-cover rounded-lg" />
                <div className="mt-4">
                  <a className='text-blue-300 font-bold underline text-lg' href="https://schedule-processing-next-js.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                  <p className='text-fuchsia-300 font-semibold mt-2'>
                   <span className='font-bold text-fuchsia-300 '>Schedule Processing </span>is a web application used for managing and scheduling events and tasks based on dynamic secure role and dynamic notification system.
                  </p>
                  <div className="flex justify-end mt-4">
                    <Link to="/details4">
                      <button className="btn btn-primary">View Details</button>
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
