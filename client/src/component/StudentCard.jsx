import React, { useState } from "react";
import axios from "axios";
import Cancel from "../assets/Cancel.png"

const StudentCard = () => {

    const [title, setTitle] = useState("");
    const [pricing, setPricing] = useState("");
    const [description, setDescription] = useState("");
    const [modulee, setModulee] = useState("");
    const [level, setLevel] = useState("");

    
    // mazal ta3 el file

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    return(

        <div className=" w-[294px] h-[141px] ml-[20px] mt-[20px] rounded-[8px] border-[#D5DADF] border-[1px] shadow-md shadow-[#A9A9A9] ">

            <div className=" flex justify-center items-center w-[294px] h-[84px] ">
                    <div className=" w-[56px] h-[56px] rounded-full ml-[14px]  border-[#D5DADF] border-[1px] ">
                            <img alt="" src="" className="w-[56px] h-[56px] rounded-full"/>
                    </div>
                    <div className=" w-[224px] h-[84px] ">
                        <p className=" ml-[17px] mt-[17px] font-bold text-[#021936] text-[17px] ">Ziad alherbani</p>
                        <p className=" ml-[17px] text-[15px] text-[#ACACAC] ">ziyad@herbani.dz</p>
                    </div>
            </div>
            <div className=" w-[258px] h-[0px] border-[#D5DADF] border-[1px] ml-[18px] "></div>
            <div className=" w-[294px] h-[57px] flex justify-center items-center ">
                    <p className=" w-[93px] h-[18px] mb-[10px]  text-[15px] text-[#ACACAC]  ">
                        0776734532
                    </p>
                    <button className=" w-[28px] h-[28px] rounded-[8px] ml-[141px] bg-[#525FE1]  ">
                        <img src={Cancel} alt="cancel" className=" w-[28px] h-[28px] "/>
                    </button>
            </div>
        </div>
    )

}
export default StudentCard;