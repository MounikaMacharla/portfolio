"use client"
import React, { useState } from "react"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Try again later.");
    }
  };


  return (
    <section
      id="contact"
      className="ml-0 md:ml-60 min-h-screen p-6 font-Outfit
                 bg-white dark:bg-darkTheme text-gray-900 dark:text-white
                 transition-colors duration-500"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-Prata">
        Get in Touch
      </h2>
      <h4 className="font-Outfit text-center mb-6">Have questions? Don't hesitate to send them to me.</h4>
      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="
            bg-white dark:bg-gray-900 
            p-10 rounded-2xl shadow-xl 
            border border-gray-300 dark:border-gray-700
            transition-all duration-300 hover:shadow-2xl
          "
        >
          {/* NAME */}
          <div className="relative mb-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="
                w-full p-4 bg-white dark:bg-gray-900 
                border border-gray-300 dark:border-gray-700 
                rounded-xl outline-none text-gray-900 dark:text-white
                transition-all duration-300
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
              "
            />
            <label
              className={`absolute left-4 top-1/2 transform -translate-y-1/2
                          text-gray-600 dark:text-gray-400 
                          pointer-events-none transition-all duration-300
                          ${formData.name ? "text-xs top-2" : "text-base"}`}
            >
              Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative mb-8">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="
                w-full p-4 bg-white dark:bg-gray-900 
                border border-gray-300 dark:border-gray-700 
                rounded-xl outline-none text-gray-900 dark:text-white
                transition-all duration-300
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
              "
            />
            <label
              className={`absolute left-4 top-1/2 transform -translate-y-1/2
                          text-gray-600 dark:text-gray-400 
                          pointer-events-none transition-all duration-300
                          ${formData.email ? "text-xs top-2" : "text-base"}`}
            >
              Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative mb-10">
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full p-4 bg-white dark:bg-gray-900 
                border border-gray-300 dark:border-gray-700 
                rounded-xl outline-none text-gray-900 dark:text-white
                transition-all duration-300
                focus:ring-2 focus:ring-blue-500 focus:border-transparent
              "
            />
            <label
              className={`absolute left-4 top-4 
                          text-gray-600 dark:text-gray-400
                          pointer-events-none transition-all duration-300
                          ${formData.message ? "text-xs -top-2" : "text-base top-4"}`}
            >
              Message
            </label>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full py-3 text-lg font-semibold text-white rounded-xl
              bg-black dark:bg-blue-600 shadow-lg
              transition-colors duration-300 hover:bg-gray-900
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
