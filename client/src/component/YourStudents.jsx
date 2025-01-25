import React, { useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import CourseSmallCard from "./CourseSmallCard";

const YourStudents = () => {

    const [title, setTitle] = useState("");
    const [pricing, setPricing] = useState("");
    const [description, setDescription] = useState("");
    const [modulee, setModulee] = useState("");
    const [level, setLevel] = useState("");

    
    // mazal ta3 el file

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    return(

        <div>
            <div className="w-[1440px] h-[1024px] flex justify-center items-center ">
                <div className=" w-[385px] h-[1024px] border-black border-[1px] ">

                </div>
                <div className=" w-[1055px] h-[1024px] border-black border-[1px] ">

                <div className=" w-[1055px] h-[80px] border-black border-[1px] "></div>
                <div className=" w-[1055px] h-[129px] bg-[#F3F5F6] border-[#D8D8D8] border-[1px] ">

                    <div className=" w-[255px] h-[42px] flex justify-center items-center mt-[38px] ml-[31px] text-[#021936] text-[36px] font-bold ">
                    <p>Your <span className=" text-[#525FE1] ">Students</span></p>
                    
                    </div>

                </div>
                <div className=" w-[1055px] h-[815px] border-black border-[1px] ">
                    <div className=" flex justify-left items-left h-[101px] w-[1055px] overflow-hidden  ">
                        <CourseSmallCard/>
                        <CourseSmallCard/>
                        <CourseSmallCard/>
                    </div>
                    <div className=" flex flex-wrap  w-[1044px] h-[670px] mt-[24px] ml-[11px]  ">
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    <StudentCard/>
                    </div>
                </div>

                </div>
            
            </div>
        </div>
    )

}
export default YourStudents;