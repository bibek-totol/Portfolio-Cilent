import React from 'react';
import { AiTwotoneIdcard, AiOutlineRead } from "react-icons/ai";

export default function Experience() {
  return (
    <div className='mt-16 px-4 sm:px-8 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12'>

      {/* Experience Section */}
      <div>
        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9463F8] flex items-center gap-2'>
          <AiTwotoneIdcard className="text-4xl" /> My Experience
        </p>

        {[
          {
            year: '2022–23',
            title: 'Problem Solving',
            desc: 'Leetcode, Codeforces, HackerRank, GeeksForGeeks, Coding Ninjas, PortSwigger Academy (250+) problems'
          },
          {
            year: '2021',
            title: 'Participation in 2021 ICPC Asia Dhaka Preliminary',
            link: {
              text: 'Participation Email',
              href: 'https://ibb.co.com/j9Pj34rt'
            }
          },
          {
            year: '2024',
            title: 'Internship',
            desc: 'Website and System Penetration Testing (ByteCapsuleIT)'
          },
          {
            year: '2023–(Running)',
            title: 'Project Development',
            desc: 'Built around 20+ projects. Submitted in GitHub'
          },
          {
            year: '2022–24',
            title: 'General Member',
            desc: 'BAUET COMPUTER SOCIETY'
          },
          {
            year: '2022–24',
            title: 'Participation in Programming Contest',
            desc: 'BAUET (Mindstrom 1.0, 2.0) and IT Spark (1.0)'
          },
        ].map((item, i) => (
          <div key={i} className='bg-[#301649] hover:bg-[#834EF0] transition duration-300 rounded-r-full flex flex-col gap-2 p-5 mt-8'>
            <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#9065E5]'>{item.year}</p>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#CCBAEF]'>{item.title}</p>
            {item.desc && (
              <p className='text-sm sm:text-base font-bold text-[#CCBAEF]'>{item.desc}</p>
            )}
            {item.link && (
              <a className='font-bold underline text-cyan-300 text-sm sm:text-base' href={item.link.href} target="_blank" rel="noopener noreferrer">
                {item.link.text}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div>
        <p className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9463F8] flex items-center gap-2'>
          <AiOutlineRead className="text-4xl" /> My Education
        </p>

        {[
          {
            year: '2020–24',
            title: 'All Online Learning Certificates',
            link: {
              text: 'Certificates GitHub Repository Link',
              href: 'https://github.com/bibekbowmick2-2/Online-learning-Certificates'
            }
          },
          {
            year: '2020–24',
            title: 'Bachelor of Science in Computer Science and Engineering',
            desc: 'Bangladesh Army University of Engineering and Technology'
          },
          {
            year: '2018–20',
            title: 'Higher Secondary Certificate in Science',
            desc: 'Government Tolaram College'
          },
          {
            year: '2012–18',
            title: 'Secondary School Certificate in Science',
            desc: 'Narayanganj Ideal School'
          },
        ].map((item, i) => (
          <div key={i} className='bg-[#301649] hover:bg-[#834EF0] transition duration-300 rounded-r-full flex flex-col gap-2 p-5 mt-8'>
            <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#9065E5]'>{item.year}</p>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#CCBAEF]'>{item.title}</p>
            {item.desc && (
              <p className='text-sm sm:text-base font-bold text-[#CCBAEF]'>{item.desc}</p>
            )}
            {item.link && (
              <a className='font-bold underline text-cyan-300 text-sm sm:text-base' href={item.link.href} target="_blank" rel="noopener noreferrer">
                {item.link.text}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
