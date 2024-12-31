import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import CourseCard from '../component/CourseCard';

const courses = [
  { name: 'Math', price: 1500, image: 'https://via.placeholder.com/300' },
  { name: 'Science', price: 1800, image: 'https://via.placeholder.com/300' },
  { name: 'English', price: 1200, image: 'https://via.placeholder.com/300' },
];

const CoursesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <Header /> */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Explore Our <span className="text-blue-600">Courses</span>
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.name}
                price={course.price}
                imageUrl={course.image}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default CoursesPage;
