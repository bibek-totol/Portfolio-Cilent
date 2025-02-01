import React from 'react'
import Marquee from "react-fast-marquee";

const skills = [
  { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", percentage: "72%", color: "text-purple-400" },
  { name: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", percentage: "80%", color: "text-orange-500" },
  { name: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", percentage: "85%", color: "text-blue-400" },
  { name: "Tailwind", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", percentage: "99%", color: "text-blue-500" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", percentage: "90%", color: "text-yellow-400" },
  { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", percentage: "96%", color: "text-blue-400" },
  { name: "Node JS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", percentage: "73%", color: "text-green-500" },
  { name: "Express JS", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", percentage: "93%", color: "text-gray-500" },
  { name: "MongoDB", image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", percentage: "80%", color: "text-green-500" },
  { name: "Next JS", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", percentage: "60%", color: "text-black" },
  { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", percentage: "81%", color: "text-blue-500" },
];



export default function SKills() {
  return (
    <div className='p-10 mt-14'>
      <section className="text-center mt-20 px-5">
      <h2 className="text-4xl lg:text-6xl font-bold text-white">
        My <span className="text-purple-400">Skills</span>
      </h2>
      <p className="text-gray-400 mt-4 max-w-xl mx-auto">
        We put your ideas and thus your wishes in the form of a unique web project
        that inspires you and your customers.
      </p>
     

      <Marquee pauseOnHover={false}  speed={150} direction='right' delay={1}>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-20 mt-14 px-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#2d1c4b] hover:bg-[#3e717d] transition duration-300 p-8 rounded-2xl flex flex-col items-center text-white"
          >
            <img src={skill.image} alt={skill.name} className="w-14 h-14 mb-3" />
            <p className="text-xl font-bold">{skill.percentage}</p>
            <p className={`${skill.color} mt-2 font-medium`}>{skill.name}</p>
          </div>
        ))}
      </div>
    </Marquee>
    </section>
    </div>
  )
}
