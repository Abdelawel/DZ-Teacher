// src/components/Footer.js
import React from 'react';
import FacebookIcon from '../assets/FB.png';  // Import your images
import LinkedInIcon from '../assets/Linked.png';
import TwitterIcon from '../assets/Twitter.png';
import Idk from '../assets/Idkwhatthatis.png'; // Update to your image

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Educate Info */}
        <div>
          <h4 className="text-2xl font-bold">Educate</h4>
          <p className="mt-2 text-gray-200">
            The best educational platform to boost your knowledge and skills.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <img src={Idk} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Other sections */}
        <div>
          <h4 className="text-xl font-bold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-gray-300">Feature</a></li>
            <li><a href="#" className="hover:text-gray-300">Courses</a></li>
            <li><a href="#" className="hover:text-gray-300">Tutorial</a></li>
            <li><a href="#" className="hover:text-gray-300">News</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-bold">Contact</h4>
          <ul className="mt-4 space-y-2">
            <li>Phone: +213-567-890123</li>
            <li>Email: educate.algeria@mail.com</li>
            <li>Address: 45 Avenue des Martyrs, Algiers, Algeria</li>
          </ul>
        </div>

        {/* Additional Fourth Section */}
        <div>
          <h4 className="text-xl font-bold">Company Info</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;