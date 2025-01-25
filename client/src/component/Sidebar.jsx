import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white text-black flex flex-col p-6">
      <div className="flex items-center mb-10">
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600">E</span>
          <span className="text-black">ducate</span>
        </h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-6">
          <li>
            <Link to="/teacher/home" className="block text-lg hover:bg-blue-500 p-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/teacher/students" className="block text-lg hover:bg-blue-500 p-2 rounded">
              Students
            </Link>
          </li>
          <li>
            <Link to="/teacher/courses" className="block text-lg hover:bg-blue-500 p-2 rounded">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/teacher/resources" className="block text-lg hover:bg-blue-500 p-2 rounded">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/teacher/profile" className="block text-lg hover:bg-blue-500 p-2 rounded">
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
