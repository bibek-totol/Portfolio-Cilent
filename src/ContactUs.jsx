import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center text-white px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  p-4 rounded-lg max-w-6xl w-full">
        
        {/* Left Side - Form */}
        <div className="bg-[#0b071c] p-14 rounded-lg">
          <h2 className="text-4xl font-bold text-purple-400">Let’s work together!</h2>
          <p className="text-gray-400 mt-2">
            I design and code beautifully simple things, and I love what I do. Just simple like that!
          </p>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="text" placeholder="Last name" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="Email address" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
              <input type="tel" placeholder="Phone number" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <select className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Select an option</option>
              <option>Front End Development</option>
              <option>Back End Development</option>
              <option>Full Stack Development</option>
            </select>

            <textarea placeholder="Message" className="w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"></textarea>

            <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 px-6 rounded-lg font-bold hover:opacity-80 transition duration-300 w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col space-y-6 mt-10 lg:mt-36">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <p className="text-lg font-semibold">+8801776569120</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p className="text-lg font-semibold">bibektotol@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p className="text-lg font-semibold">
              Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// // Tailwind custom styles
// const inputStyle = "w-full p-3 bg-black border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500";

// // Apply global styles to inputs
// document.querySelectorAll(".input-style").forEach(el => el.className = inputStyle);

export default ContactUs;
