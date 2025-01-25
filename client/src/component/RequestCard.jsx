import React, { useState } from "react";
import axios from "axios";
import Cancel from "../assets/Cancel.png"
import Vector from "../assets/Vector.png"

const RequestCard = () => {


        const [title, setTitle] = useState("");
        const [pricing, setPricing] = useState("");
        const [description, setDescription] = useState("");
        const [places, setPlaces] = useState("");
        const [date, setDate] = useState("");
        const [time, setTime] = useState("");
        const [location, setLocation] = useState("");
        const [level, setLevel] = useState("");
        const [modulee, setModulee] = useState("");
        
    
        const [error, setError] = useState(null);
        const [successMessage, setSuccessMessage] = useState(null);
    

    return(

        <div className=" flex justify-center items-center w-[931px] h-[141px] mb-[14px] border-[#D5DADF] border-[2px] rounded-[8px] shadow-md shadow-[#A9A9A9]">

            <div className=" w-[87px] h-[87px] rounded-full border-[1px] border-[#D5DADF] ml-[19px]  ">
                    <img src="" alt="" className=" w-[87px] h-[87px] rounded-full "/>
            </div>
            <div className=" w-[677px] h-[141px] ">
                    <p className=" text-[20px] text-[#021936] font-bold mt-[46px] ml-[31px] ">
                        Ziyad Alrahbani
                    </p>
                    <p className=" text-[#ACACAC] text-[15px] ml-[31px] ">
                        jari@ziad.syr
                    </p>
            </div>
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] border-[1px] border-[#525FE1] flex items-center px-3 w-[47px] h-[47px] bg-[#525FE1] ">
                            <img src={Vector} alt="" className=" w-[18px] h-[11px] "/>
                        </button>
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] ml-[14px] border-[1px] border-[#E1112C] flex items-center px-3 w-[47px] h-[47px] bg-[#E1112C] ">
                            <img src={Cancel} alt="" className=" w-[33px] h-[33px] " />
                        </button>

        </div>

    )

}
export default RequestCard;