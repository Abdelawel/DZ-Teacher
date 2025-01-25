import React, { useState } from "react";
import axios from "axios";
import RequestCard from "./RequestCard";

const Requests = () => {


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

        <div>
            <div className="w-[1440px] h-[1243px] flex justify-center items-center ">
                <div className=" w-[385px] h-[1024px] border-black border-[1px] ">

                </div>
                <div className=" w-[1055px] h-[1024px] border-black border-[1px] ">

                <div className=" w-[1055px] h-[80px] border-black border-[1px] "></div>
                <div className=" w-[1055px] h-[129px] bg-[#F3F5F6] border-[#D8D8D8] border-[1px] ">


                    <div className=" w-[199px] h-[42px] flex justify-center items-center mt-[38px] ml-[31px] text-[#021936] text-[36px] font-bold ">
                    <p><span className=" text-[#525FE1] ">Requests</span></p>
                    </div>

                </div>
                <div className=" w-[931px] h-[766px] ml-[41px] mt-[49px] ">

                <RequestCard/>
                <RequestCard/>

                </div>
            
            </div>
            </div>
        </div>
    )

}
export default Requests;