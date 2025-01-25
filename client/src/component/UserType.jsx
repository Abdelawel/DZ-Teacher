
import React, { useState } from "react";
import axios from "axios";
import parent from "../assets/Father.png"
import student from "../assets/Student.png"
import teacher from "../assets/Teacher.png"

const UserType = () => {


    return(

        <div>
            <div className="w-[1440px] h-auto ">
                
                
            <div className=" w-[1440px] h-[87px]  absolute top-0 bg-[#021936]">
            </div>
            <div className=" flex justify-center items-center w-[885px] h-[60px] ml-[287px] mt-[168px] text-[#021936] text-[54px] font-bold  ">
                <p>You Are <span className=" text-[#525FE1] ">Joining DZ</span>-TEACHERS As A</p>
            </div>

            <div className=" flex justify-center items-center h-[299px] w-[1042px] ml-[199px] mt-[65px]  ">

            <button className=" shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] border-[#A9A9A9] border-[2px] rounded-[5px] ">
                <div className="ml-[118px] mt-[45px]">
                <img src={student} alt="" className="w-[78px] h-[78px]"/>
                </div>
                <div className=" w-[78px] h-[24px] font-bold text-[24px] mt-[25px] ml-[110px] ">
                    Student
                </div>
                <div className=" text-center w-[234px] h-[72px] mt-[23px] ml-[28px] text-[16px] text-[#7A7A7A] ">
                    descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
                </div>
            </button>
            <button className=" shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] ml-[72px] border-[#A9A9A9] border-[2px] rounded-[5px] ">
                <div className="ml-[108px] mt-[45px]">
                <img src={teacher} alt="" className="w-[78px] h-[78px]"/>
                </div>
                <div className=" w-[78px] h-[24px] font-bold text-[24px] mt-[25px] ml-[110px] ">
                    Teacher
                </div>
                <div className=" text-center w-[234px] h-[72px] mt-[23px] ml-[28px] text-[16px] text-[#7A7A7A] ">
                    descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
                </div>
            </button>
            <button className=" shadow-md shadow-[#A9A9A9] w-[299px] h-[299px] ml-[73px] border-[#A9A9A9] border-[2px] rounded-[5px] ">
                <div className="ml-[108px] mt-[45px]">
                <img src={parent} alt="" className="w-[78px] h-[78px]"/>
                </div>
                <div className=" w-[78px] h-[24px] font-bold text-[24px] mt-[25px] ml-[110px] ">
                    Parent
                </div>
                <div className=" text-center w-[234px] h-[72px] mt-[23px] ml-[28px] text-[16px] text-[#7A7A7A] ">
                    descriptiondescrtiondes criptionde scription descriptio ndescriptiondescription
                </div>
            </button>

            </div>
            

        <div className=" w-[1440px] h-[495px] absolute top-[715px] bg-[#021936] ">

        </div>

            </div>
        </div>
    )

}
export default UserType;