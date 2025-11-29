"use client"
import React from "react"
import { FaReact, FaDatabase, FaPalette, FaFigma } from "react-icons/fa"
import { PiBrowsersBold } from "react-icons/pi"
import { GiShoppingCart } from "react-icons/gi"
import { MdWeb } from "react-icons/md"

const services = [
  {
    title: "Ecommerce Website Development",
    description: "Building responsive and interactive web applications using React, Next.js, and Tailwind CSS.",
    icon: <GiShoppingCart size={50} className="text-black dark:text-white mb-4" />
  },
  {
    title: "Portfolio Website Development",
    description: "Creating visually appealing and functional personal or business portfolio websites.",
    icon: <PiBrowsersBold size={50} className="text-black dark:text-white mb-4" />
  },
  {
    title: "Custom Website Development",
    description: "Creating custom-built websites from scratch with unique designs, features, and functionality.",
    icon: <MdWeb size={50} className="text-black dark:text-white mb-4" />
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="ml-0 md:ml-60 min-h-screen bg-white dark:bg-darkTheme text-gray-900 dark:text-white p-6 font-Outfit transition-colors duration-500"
    >
      <h4 className="font-Outfit text-center">What I Offer</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-Prata">My Services</h2>
      <h4 className="font-Outfit text-center mb-6">Bringing Ideas to Life with Code & Creativity.</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              bg-lightHover dark:bg-gray-900 rounded-xl p-6
              shadow-md dark:shadow-white/10
              hover:shadow-2xl dark:hover:shadow-white/30
              transition-shadow duration-300
            "
          >
            <div className="flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 font-Prata text-center">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-200 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
