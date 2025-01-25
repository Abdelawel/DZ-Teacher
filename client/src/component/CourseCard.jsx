import React from 'react'
import image from '../assets/Mathcourse.jpg'
const CourseCard = ({ key ,courseName, price, attempt, places }) => {
  return (
    
      
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src={image} // Default placeholder if no image is provided
            alt={`${courseName}`}
            className="rounded-lg object-cover w-full h-48"
          />
          <h4 className="mt-4 text-xl font-bold text-gray-800">{courseName} Course</h4>
          <p className="mt-2 text-gray-600">{price} DA</p>
          <p className="mt-2 text-gray-700">places: {places} / {attempt}</p>          
        </div>
      
    
  )
}

export default CourseCard

  