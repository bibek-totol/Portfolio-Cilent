import React from "react";
import im4 from './assets/Screenshot_2.png'
import './App.css'
import { Link } from "react-router";

const ProfileDetails4 = () => {
  return (
    <div className="bg-[linear-gradient(60deg,_rgba(33,3,55,1)_0%,_rgba(85,11,86,1)_52%,_rgba(42,10,96,1)_100%)] text-white min-h-screen p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">




    <div>
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/"><button className="bg-gray-800 px-4 py-2 rounded-lg">🔙 Back</button></Link>
        <span className="text-gray-400">Projects &gt; Schedule Pro: A Schedule Management Application </span>
      </div>

      {/* Hero Section */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-white">
        Schedule Pro: <span className="text-purple-400">A Schedule Management Application </span>
        </h1>
        <p className="text-gray-400 mt-6">
        The Schedule Processing Application (Schedule Pro) is a web-based scheduling and task 
management platform designed to streamline organizational workflows. It allows administrators 
to manage tasks, assign them to employees, organize events, and track progress through interactive 
dashboards and calendar views. The platform includes robust user authentication, real-time 
notifications, and an integrated AI assistant for employee support.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex space-x-4 mt-6">
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">9</p>
          <p className="text-gray-400">Total Technologies</p>
        </div>
        <div className="pookie3 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">5</p>
          <p className="text-gray-400">Features Included</p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6">
        <a href="https://schedule-processing-next-js.vercel.app/" className="bg-blue-600 px-6 py-2 rounded-lg mr-4">Live Demo</a>
        <a href="https://github.com/bibekbowmick2-2/Schedule-Processing-Next-js-" className="bg-purple-600 px-6 py-2 rounded-lg">GitHub(Client and Server)</a>
      </div>

      {/* Technologies Used */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB","Axios", "JWT", "React-Query", "React-SweetAlert"].map((tech) => (
            <span key={tech} className="pookie3 px-3 py-1 rounded-lg">{tech}</span>
          ))}
        </div>
      </div>

      </div>




      <div>

      {/* Key Features */}
      <div className="mt-8">
      <img className=" rounded-lg" src={im4}/>
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="mt-2 space-y-2">

       














          <li className="pookie3 p-3 rounded-lg">🔹  User Authentication & Security: Google Sign-In, Password Reset, Account Lockout on multiple attempts and JWT token basd authentication </li>
          <li className="pookie3 p-3 rounded-lg">🔹 AI Integration: An AI Assistant is integrated to support employees by answering frequently asked questions and 
guiding them through the application functionalities. This improves user engagement and reduces 
dependency on support staff.</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Notifications System: Real-time updates are sent from the admin panel to employees regarding new tasks, 
upcoming events, and any changes to assignments.</li>
          <li className="pookie3 p-3 rounded-lg">🔹 Calendar and Scheduling System: Google Calendar-style Event System  Built with FullCalendar, this allows admins to: <br/> <br/>
o Create, update, and delete events.  <br/>
o Assign tasks based on scheduled events.  <br/>
o Track employee participation and progress.</li>
<li className="pookie3 p-3 rounded-lg">🔹 Role-Based Access(Admin Panel): <br/> <br/>
o Task creation, editing, and deletion functionalities. <br/>
o View and manage all employee data.<br/> 
o Event scheduling and task assignment via FullCalendar. <br/>
o Notification system to inform employees of updates. <br/>
o Visual analytics using charts for better decision-making.<br/>
</li>



<li className="pookie3 p-3 rounded-lg">🔹 Role-Based Access(Employee Panel): <br/> <br/>
o View assigned tasks and deadlines. <br/>
o Receive real-time notifications from admin.<br/> 
o Access a personalized schedule and event calendar. <br/>
o Communicate through integrated features. <br/>
</li>
         
        </ul>
      </div>
      </div>


    </div>
    </div>
  );
};

export default ProfileDetails4;
