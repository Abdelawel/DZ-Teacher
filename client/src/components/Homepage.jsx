import React from 'react';

const Homepage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Educate</h1>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100">Sign In</button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">Register</button>
          </div>
        </div>
      </header>

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

      {/* Features Section */}
      <section className="bg-blue-50 py-12 !important"> {/* Applied light blue background */}
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Why We Are <span className="text-blue-600">Best</span> From Others
          </h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Start Now
          </button>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* First Row of Features */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Best Tutors</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Best Curriculum</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-yellow-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Certificate</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Second Row of Features */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-purple-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Live Classes</h4>
              <p className="mt-2 text-gray-600">
                Participate in interactive live classes with experienced instructors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-red-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Flexible Schedule</h4>
              <p className="mt-2 text-gray-600">
                Enjoy a flexible schedule that fits your personal time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="bg-teal-600 w-12 h-12 rounded-lg"></div>
              <h4 className="mt-4 text-xl font-bold text-gray-800">Affordable Prices</h4>
              <p className="mt-2 text-gray-600">
                We offer competitive pricing to ensure education is accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
