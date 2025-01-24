import React, { useState } from "react";
import axios from "axios";
import parent from "../assets/Father.png"
import student from "../assets/Student.png"
import teacher from "../assets/Teacher.png"

const Usertype = () => {
  return (
    <div>
      <div className="w-full h-auto">
        {/* Header Bar */}
        <div className="w-full h-[87px] bg-[#021936]"></div>

        {/* Welcome Text */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left h-auto w-full mt-[50px] px-4">
          <p className="text-[#021936] text-[32px] md:text-[54px] font-bold">
            You Are <span className="text-[#525FE1]">Joining DZ</span>-TEACHERS As A
          </p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 h-auto w-full mt-[30px] px-4">
          {/* Student Button */}
          <button className="shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] border-[#A9A9A9] border-[2px] rounded-[5px]">
            <div className="flex justify-center mt-[45px]">
              <img src={student} alt="Student" className="w-[78px] h-[78px]" />
            </div>
            <div className="text-center font-bold text-[24px] mt-[25px]">
              Student
            </div>
            <div className="text-center text-[16px] text-[#7A7A7A] mt-[23px] px-4">
              descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
            </div>
          </button>

          {/* Teacher Button */}
          <button className="shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] border-[#A9A9A9] border-[2px] rounded-[5px]">
            <div className="flex justify-center mt-[45px]">
              <img src={teacher} alt="Teacher" className="w-[78px] h-[78px]" />
            </div>
            <div className="text-center font-bold text-[24px] mt-[25px]">
              Teacher
            </div>
            <div className="text-center text-[16px] text-[#7A7A7A] mt-[23px] px-4">
              descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
            </div>
          </button>

          {/* Parent Button */}
          <button className="shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] border-[#A9A9A9] border-[2px] rounded-[5px]">
            <div className="flex justify-center mt-[45px]">
              <img src={parent} alt="Parent" className="w-[78px] h-[78px]" />
            </div>
            <div className="text-center font-bold text-[24px] mt-[25px]">
              Parent
            </div>
            <div className="text-center text-[16px] text-[#7A7A7A] mt-[23px] px-4">
              descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
            </div>
          </button>
        </div>

        {/* Footer Bar */}
        <div className="w-full h-[495px] bg-[#021936] mt-[50px]"></div>
      </div>
    </div>
  );
};

export default Usertype;
