"use client"
import React from "react"

// Tools List
const tools = [
  "VSCode", "React", "Next.js", "Git", "Figma", "Tailwind CSS",
  "Node.js", "Python", "MongoDB Atlas", "Vercel"
]

const AboutMe = () => {
  return (
    <section
      id="about"
      className="ml-0 md:ml-60 min-h-screen p-8 bg-white dark:bg-darkTheme text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Heading */}
      <h2 className="text-4xl font-Prata text-center mb-12">About Me</h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mb-14">
        
        {/* Education */}
        <div className="flex-1 bg-lightHover dark:bg-gray-900 p-6 rounded-xl shadow-none hover:shadow-black dark:hover:shadow-white transform transition duration-300 ease-in-out hover:-translate-y-2">
          <h3 className="text-2xl font-Outfit mb-2">Education</h3>
          <p className="text-gray-700 dark:text-gray-300">
            B.Tech in Computer Science, Bapatla Engineering College <br />
            CGPA: 8.3
          </p>
        </div>

        {/* Skills */}
        <div className="flex-1 bg-lightHover dark:bg-gray-900 p-6 rounded-xl shadow-none hover:shadow-black dark:hover:shadow-white transform transition duration-300 ease-in-out hover:-translate-y-2">
          <h3 className="text-2xl font-Outfit mb-2">Skills</h3>
          <p className="text-gray-700 dark:text-gray-300">
            MERN Stack, React, Next.js, Python, MySQL, HTML, CSS, Bootstrap, JavaScript.
          </p>
        </div>

        {/* Experience */}
        <div className="flex-1 bg-lightHover dark:bg-gray-900 p-6 rounded-xl shadow-none hover:shadow-black dark:hover:shadow-white transform transition duration-300 ease-in-out hover:-translate-y-2">
          <h3 className="text-2xl font-Outfit mb-2">Experience</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Worked in TCS , contributed to many open source projects.
          </p>
        </div>
      </div>

      {/* Tools Scrolling Row */}
      <div className="overflow-hidden max-w-5xl mx-auto">
        <div className="flex animate-scroll whitespace-nowrap gap-8 text-lg font-Outfit">
          {tools.concat(tools).map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-darkHover text-white rounded-lg shadow-black"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutMe
