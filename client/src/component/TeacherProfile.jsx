import React, { useState } from "react";
import axios from "axios";

const TeacherProfile = () => {


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
                <div className=" w-[385px] h-[1243px] border-black border-[1px] ">

                </div>
                <div className=" w-[1055px] h-[1243px] border-black border-[1px] ">

                <div className=" w-[1055px] h-[80px] border-black border-[1px] "></div>
                <div className=" w-[1055px] h-[129px] bg-[#F3F5F6] border-[#D8D8D8] border-[1px] ">


                    <div className=" w-[199px] h-[42px] flex justify-center items-center mt-[38px] ml-[31px] text-[#021936] text-[36px] font-bold ">
                    <p>Your <span className=" text-[#525FE1] ">Profile</span></p>
                    </div>

                </div>
                <div className=" flex justify-center items-center w-[987px] h-[170px] mt-[35px] ml-[28px] rounded-[8px] border-[#D8D8D8] border-[1px] shadow-md shadow-[#A9A9A9]">

                <div className=" w-[95px] h-[95px] rounded-full border-[#D8D8D8] border-[1px] ">
                    <img src="" alt="" className=" w-[95px] h-[95px] rounded-full  "/>
                </div>
                <div className=" w-[521px] h-[170px] text-[36px] pl-[27px] pt-[60px] text-[#021936] font-bold ">
                    Ziyad Algahwani
                </div>
                
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[25px] text-[14px] font-bold  border-[1px] border-[#525FE1] flex items-center px-3 w-[148px] h-[42px] bg-[#EAEAEA] text-[#525FE1] ">
                            Delete Picture
                        </button>
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[25px] text-[14px] font-bold ml-[14px] border-[1px] border-[#525FE1] flex items-center px-3 w-[148px] h-[42px] bg-[#525FE1] text-white ">
                            Change Picture
                        </button>
                
                </div>
                <form className=" w-[987px] h-[789px] mt-[17px] ml-[28px]  rounded-[8px] border-[#D8D8D8] border-[1px] shadow-md shadow-[#A9A9A9] ">
                
                    <div className=" flex justify-center items-center w-[954px] h-[104px] ml-[33px] mt-[46px] ">
                        <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                First Name
                            </div>
                            <input 
                            type="text"
                            id="firstname"
                            
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[36px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Last Name
                            </div>
                            <input 
                            type="text"
                            
                            id="lastname"
                            
                            value={pricing}
                            onChange={(e) => setPricing(e.target.value)}
                            required
                            className="shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[954px] h-[99px] ml-[31px] mt-[28px]  ">
                        <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Email
                            </div>
                            <input
                            
                            type="email"
                            
                            id="email"
                            
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                             className="shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[35px] ">
                            <div className=" w-[150px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Phone number
                            </div>
                            <input 
                            type="number"
                            
                            id="phonenumber"
                            
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >
                                
                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[954px] h-[104px] ml-[31px] mt-[28px]  ">
                        <div>
                            <div className=" w-[165px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Address
                            </div>
                            <input
                            type="text"
                            
                            id="address"
                            
                             className="shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " 
                            value={places}
                            onChange={(e) => setPlaces(e.target.value)}
                            required >
                            </input>
                        </div>
                        <div className=" ml-[35px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Birthday
                            </div>
                            <input 
                            type="number"
                            min={1}
                            max={31}
                            id="bdday"
                            
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[139px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[16px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                
                            </div>
                            <input
                            type="number"
                            min={1}
                            max={12}
                            id="bdmonth"
                            
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                             className=" shadow-md shadow-[#A9A9A9] w-[139px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[16px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                
                            </div>
                            <input
                            type="number"
                            min={1900}
                            max={2024}
                            id="bdyear"
                            
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                             className=" shadow-md shadow-[#A9A9A9] w-[146px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[954px] h-[99px] ml-[31px] mt-[28px]  ">
                        <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                CV
                            </div>
                            <input
                            
                            type="file"
                            
                            id="cv"
                            
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                             className="shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[35px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Level
                            </div>
                            <select 
                            type="text"
                            
                            id="level"
                            placeholder="Select a Level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >
                                <option>1 AP</option>
                                <option>2 AP</option>
                                <option>3 AP</option>
                                <option>4 AP</option>
                                <option>5 AP</option>
                                <option>1 AM</option>
                                <option>2 AM</option>
                                <option>3 AM</option>
                                <option>4 AM</option>
                                <option>1 AS</option>
                                <option>2 AS</option>
                                <option>3 AS</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-[954px] h-[99px] pl-[20px] ml-[33px] mt-[28px] ">
                    <div>
                            <div className=" w-[150px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Module Tought
                            </div>
                            <input
                            
                            type="text"
                            
                            id="moduletought"
                            
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                             className="shadow-md shadow-[#A9A9A9] w-[445px] h-[57px] mt-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mt-[44px] h-[60px] w-[1055px]  ">
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[65px] text-[22px] font-bold ml-[422px] border-[1px] border-[#525FE1] flex items-center px-3 w-[212px] h-[60px] bg-[#EAEAEA] text-[#525FE1] ">
                            Cancel
                        </button>
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[75px] text-[22px] font-bold ml-[19px] border-[1px] border-[#525FE1] flex items-center px-3 w-[212px] h-[60px] bg-[#525FE1] text-white ">
                            Save
                        </button>
                    </div>

                </form>

                </div>
            
            </div>
        </div>
    )

}
export default TeacherProfile;