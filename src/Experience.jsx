import React from "react";
import { AiTwotoneIdcard, AiOutlineRead } from "react-icons/ai";
import Card from "./Card";

export default function Experience() {
  const experienceData = [
    {
      year: "2022–23",
      title: "Problem Solving",
      desc:
        "Leetcode, Codeforces, HackerRank, GeeksForGeeks, Coding Ninjas, PortSwigger Academy (250+) problems",
    },
    {
      year: "2021",
      title: "Participation in 2021 ICPC Asia Dhaka Preliminary",
      link: {
        text: "Participation Email",
        href: "https://ibb.co.com/j9Pj34rt",
      },
    },
    {
      year: "2024",
      title: "Internship",
      desc: "Website and System Penetration Testing (ByteCapsuleIT)",
    },
    {
      year: "2023–(Running)",
      title: "Project Development",
      desc: "Built around 20+ projects. Submitted in GitHub",
    },
    {
      year: "2022–24",
      title: "General Member",
      desc: "BAUET COMPUTER SOCIETY",
    },
    {
      year: "2022–24",
      title: "Participation in Programming Contest",
      desc: "BAUET (Mindstrom 1.0, 2.0) and IT Spark (1.0)",
    },
  ];

  const educationData = [
    {
      year: "2020–24",
      title: "All Online Learning Certificates",
      link: {
        text: "Certificates GitHub Repository Link",
        href:
          "https://github.com/bibek-totol/ALL-SKILLS-CERTIFICATION",
      },
    },
    {
      year: "2020–24",
      title:
        "Bachelor of Science in Computer Science and Engineering",
      desc:
        "Bangladesh Army University of Engineering and Technology",
    },
    {
      year: "2018–20",
      title: "Higher Secondary Certificate in Science",
      desc: "Government Tolaram College",
    },
    {
      year: "2012–18",
      title: "Secondary School Certificate in Science",
      desc: "Narayanganj Ideal School",
    },
  ];

  return (
    <section className="mt-14 py-16 px-6 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
       
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-400 mb-6 flex items-center gap-3">
            <AiTwotoneIdcard className="text-4xl" /> My Experience
          </h2>
          <div className="space-y-6">
            {experienceData.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>

      
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-400 mb-6 flex items-center gap-3">
            <AiOutlineRead className="text-4xl" /> My Education
          </h2>
          <div className="space-y-6">
            {educationData.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
