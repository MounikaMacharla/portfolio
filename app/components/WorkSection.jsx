"use client"
import React from "react"
import Image from "next/image"
import { assets } from "@/assets/assets"

const projects = [
  {
    name: "Ecommerce Website",
    link: "https://ishop-frontend-five.vercel.app/",
    description: "Fully functional MERN Stack Ecommerce clothing website.",
    image:  assets.ecommerce 
  },
  {
    name: "Spicy Flames Website",
    link: "https://nimomach.github.io/spicy-flames/",
    description: "A react frontend project of a resturant app.",
    image:  assets.spicyflames 
  },
  {
    name: "ToDo App",
    link: "https://nimomach.github.io/ToDo-App/",
    description: "Track and store all your activity.",
    image:  assets.todo 
  },
]

const WorkSection = () => {
  return (
    <section
      id="work"
      className="ml-0 md:ml-60 min-h-screen bg-white dark:bg-darkTheme text-gray-900 dark:text-white p-6 font-Outfit transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-Prata">
        My Work
      </h2>
      <h4 className="font-Outfit text-center mb-6">I build digital products that are fast, responsive, and meaningful.</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-lightHover dark:bg-gray-900 rounded-xl p-4 shadow-none
                       hover:shadow-black dark:hover:shadow-white
                       transform transition duration-300 ease-in-out hover:-translate-y-2"
          >
            {/* Image */}
            <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 font-Prata">{project.name}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default WorkSection
