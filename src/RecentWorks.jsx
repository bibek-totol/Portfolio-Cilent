import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import im1 from "./assets/Screenshot_58.webp";
import im2 from "./assets/Screenshot_14.webp";
import im3 from "./assets/Screenshot_75.webp";
import im4 from "./assets/Screenshot_2.webp";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router";




const ProjectCard = ({ img, link, desc, to }) => (
  <Zoom>
    <div className="bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-purple-500/40 transition-all duration-300 rounded-2xl overflow-hidden p-5">
      <img
        src={img}
        alt="Project Preview"
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="mt-4 space-y-3">
        <a
          className="text-cyan-300 font-bold underline text-sm sm:text-base"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Link
        </a>
        <p className="text-white/80 text-sm sm:text-base">{desc}</p>
        <div className="flex justify-end">
          <Link to={to}>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#9463F8] to-[#7d4edc] text-white text-sm sm:text-base hover:brightness-110 transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Zoom>
);


export default function RecentWorks() {
  const mernProjects = [
    {
      img: im1,
      link: "https://bibek-iems-portal.netlify.app/",
      desc:
        "IEMS: Collaborative Study Platform connects students, tutors, and administrators to streamline scheduling, resource sharing, and management.",
      to: "/details1",
    },
    {
      img: im2,
      link: "https://unruly-destruction.surge.sh/",
      desc:
        "GameCritics-Hub2 is a game review platform with user ratings, recommendations, and real-time news & updates for gamers.",
      to: "/details2",
    },
    {
      img: im3,
      link: "https://tech-tales2025.netlify.app/",
      desc:
        "Tech-Tales is a feature-rich blogging app with comments, calendar, and wishlist integration to enhance writing experiences.",
      to: "/details3",
    },
  ];

  const nextProjects = [
    {
      img: im4,
      link: "https://schedule-processing-next-js.vercel.app/",
      desc:
        "Schedule Processing is a web application used for managing and scheduling events and tasks with secure role-based access and notifications.",
      to: "/details4",
    },
  ];

  
  return (
    <section className="mt-16 rounded-4xl bg-gradient-to-b from-[#3c005f] to-[#2a0045] py-20 px-6 sm:px-10 lg:px-24">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#B694FA]">
          My Recent <span className="text-[#9463F8]">Works</span>
        </h2>
        <p className="text-[#B694FA] font-medium max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
      </div>

      <Tabs>
        <TabList className="flex flex-wrap justify-center gap-4 text-sm sm:text-base lg:text-lg mt-12 mb-6 bg-black/30 rounded-full p-3 font-semibold text-white">
          <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
            MERN Stack Projects
          </Tab>
          <Tab className="px-4 py-2 rounded-full cursor-pointer hover:bg-[#9463F8]/20 focus:outline-none focus:bg-[#9463F8]/30">
            Next.js Projects
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
            {mernProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {nextProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
}
