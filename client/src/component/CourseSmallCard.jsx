import React, { useState } from "react";
import axios from "axios";

const CourseSmallCard = () => {

    const [title, setTitle] = useState("");
    const [pricing, setPricing] = useState("");
    const [description, setDescription] = useState("");
    const [modulee, setModulee] = useState("");
    const [level, setLevel] = useState("");

    
    // mazal ta3 el file

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    return(
        <div className=" w-[294px] h-[51px] mt-[48px] ml-[20px] ">
        <button className="  w-[294px] h-[51px] rounded-[8px] text-[20px] bg-[#EBEFF8] text-[#525FE1] font-bold pr-[100px] border-[#525FE1] border-[1px] shadow-md shadow-[#A9A9A9] ">
            Math course 1
        </button>
        </div>
    )

}
export default CourseSmallCard;