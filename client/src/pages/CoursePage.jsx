import React, {useState, useEffect} from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Layout from '../component/Layout';
import CourseCard from '../component/CourseCard';
import axios from 'axios';


// const courses = [
//   { name: 'Math', price: 1500 },
//   { name: 'Science', price: 1800},
//   { name: 'English', price: 1200 },
// ];





const CoursesPage = () => {
  
  const [courses, setCourses] = useState([])
  useEffect(() => {

    const fetchData = async()=>{
      try {
        const result = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-session`)
        console.log(result)
        setCourses(result.data.data.session)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  
}, [])
  return (
    <Layout>
      
    <div className="bg-white min-h-screen">
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800">
            Explore Our <span className="text-blue-600">Courses</span>
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.session_id}
                courseName={course.session_title}
                price={course.session_price}
                attempt={course.session_attempt}
                places= {course.session_number_student}
              />
            ))}
          </div>
        </div>
      </section>
      
    </div>
    </Layout>
  );
};

export default CoursesPage;
