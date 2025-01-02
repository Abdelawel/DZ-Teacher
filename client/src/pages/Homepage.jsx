import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import LeftArrow from '../assets/LeftArrow.png';
import RightArrow from '../assets/RightArrow.png';
import HomepageTutor from '../assets/HomepageTutor.png';
import MathCourseImage from '../assets/Mathcourse.jpg';
import ScienceCourseImage from '../assets/Science.webp';
import EnglishCourseImage from '../assets/English.jpg';
import HistoryCourseImage from '../assets/History.jpg';
import GeoCourseImage from '../assets/geo.webp';
import PhysicsCourseImage from '../assets/physics.webp';
import Layout from '../component/Layout'

const courses = [
  { title: "Math Course", price: "1500 DA", image: MathCourseImage },
  { title: "Science Course", price: "1500 DA", image: ScienceCourseImage },
  { title: "English Course", price: "1500 DA", image: EnglishCourseImage },
  { title: "History Course", price: "1500 DA", image: HistoryCourseImage },
  { title: "Geography Course", price: "1500 DA", image: GeoCourseImage },
  { title: "Physics Course", price: "1500 DA", image: PhysicsCourseImage },
];

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.floor(courses.length / 3) : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === Math.floor(courses.length / 3) ? 0 : prev + 1));
  };

  return (
    <Layout>
    <div className="bg-white min-h-screen">
      {/* Header */}
      {/* <Header /> */}
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Getting <span className="text-blue-600">Quality Education</span> Is Now More <span className="text-blue-600">Easy</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100">Sign In</button>
              <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Register</button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative">
              <img src="/Rectangle 6.png" alt="Student at computer" className="rounded-lg shadow-lg" />
              <div className="absolute top-4 left-4 bg-yellow-400 w-12 h-12 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Better Than Others Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Why We Are <span className="text-blue-600">Better</span> Than Others
          </h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">Best Tutors</h4>
              <p className="mt-2 text-gray-600">
                Highly qualified and experienced tutors for better learning.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-yellow-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">Best Curriculum</h4>
              <p className="mt-2 text-gray-600">
                Structured curriculum tailored for modern education.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-green-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">Certifications</h4>
              <p className="mt-2 text-gray-600">
                Recognized certificates to enhance your career.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-red-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">Affordable</h4>
              <p className="mt-2 text-gray-600">
                Affordable courses with flexible payment plans.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-purple-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">Flexible Timing</h4>
              <p className="mt-2 text-gray-600">
                Learn at your own pace with flexible timings.
              </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl transform hover:scale-105 transition-all">
              <div className="bg-orange-600 w-16 h-16 rounded-lg mx-auto"></div>
              <h4 className="mt-4 text-2xl font-bold text-gray-800">24/7 Support</h4>
              <p className="mt-2 text-gray-600">
                Our team is available 24/7 to help you with any queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Courses Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Our Most Popular <span className="text-blue-600">Courses</span>
          </h3>
          <div className="mt-12 relative">
            {/* Carousel Container */}
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Adjusted for 3 items
              >
                {courses.map((course, index) => (
                  <div key={index} className="min-w-[33.33%] p-6 bg-white rounded-lg shadow">
                    <img src={course.image} alt={course.title} className="w-full h-48 rounded-lg object-cover" />
                    <h4 className="mt-4 text-xl font-bold text-gray-800">{course.title}</h4>
                    <p className="mt-2 text-gray-600">{course.price}</p>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
                <button
                  onClick={prevSlide}
                  className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  <img src={LeftArrow} alt="Previous" className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                >
                  <img src={RightArrow} alt="Next" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800">
              We Have <span className="text-blue-600">Highly</span> Expert & Experienced Tutors
            </h3>
            <p className="mt-4 text-gray-600">
              Our team of professional tutors are here to help you succeed.
            </p>
            <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Learn More</button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img 
              src={HomepageTutor} 
              alt="Tutors" 
              className="rounded-lg w-full h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
    </Layout>
  );
};

export default Homepage;
