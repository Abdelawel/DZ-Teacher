import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const NewCourse = () => {

    const navigate = useNavigate()
        const [title, setTitle] = useState("");
        const [pricing, setPricing] = useState("");
        const [description, setDescription] = useState("");
        const [places, setPlaces] = useState("");
        const [date, setDate] = useState("");
        const [time, setTime] = useState("");
        const [location, setLocation] = useState("");
        const [moduleName, setModuleName] = useState(0);
        const [levelName, setLevelName] = useState(0);
        const [modules, setModules] = useState([])
        const [levels, setLevels] = useState([])
    
        const [error, setError] = useState(null);
        const [successMessage, setSuccessMessage] = useState(null);


        const {token} = useSelector((state)=>state.auth)
    // console.log(jwtDecode(token).id)



        const handleSubmit = async (e) =>{
            e.preventDefault()
            try {
                const result = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/post-session`,{
                    session_title: title,
                    session_description: description,
                    session_attempt: places,
                    session_price: pricing,
                    session_module: moduleName,
                    // session_status: 1,
                    session_teacher: jwtDecode(token).id,
                    session_date: `${date} ${time}:00`,
                    session_duration: 1,
                    session_number_student: 0
                })

                console.log(result)
                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(() => {
      
            const fetchData = async () =>{
                const responseModule = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-modules`)
                const responseLevels = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-levels`)
                setLevels(responseLevels.data.data.levels)
                setModules(responseModule.data.data.modules)
            }
        
          fetchData()
        }, [])  
    
        console.log(time)

    return(

        <div>
            <div className="w-[1440px] h-[1024px] flex justify-center items-center ">
                <div className=" w-[385px] h-[1024px] border-black border-[1px] ">

                </div>
                <div className=" w-[1055px] h-[1024px] border-black border-[1px] ">

                <div className=" w-[1055px] h-[80px] border-black border-[1px] "></div>
                <div className=" w-[1055px] h-[129px] bg-[#F3F5F6] border-[#D8D8D8] border-[1px] ">

                    <button className=" w-[160px] h-[20px] text-[#7A7A7A] mt-[22px] ml-[24px] ">
                        {'\u003C'}  back to courses list
                    </button>
                    <div className=" w-[199px] h-[42px] flex justify-center items-center mt-[16px] ml-[31px] text-[#021936] text-[36px] font-bold ">
                    <p>New <span className=" text-[#525FE1] ">Course</span></p>
                    </div>

                </div>
                <form onSubmit={(e)=>handleSubmit(e)} className=" w-[1055px] h-[815px] border-black border-[1px] ">
                
                    <div className=" flex justify-center items-center w-[984px] h-[104px] ml-[31px] mt-[63px]  ">
                        <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Title
                            </div>
                            <input 
                            type="text"
                            id="title"
                            placeholder="Add Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[474px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[35px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Pricing
                            </div>
                            <input 
                            type="number"
                            min={0}
                            id="pricing"
                            placeholder="1500 DA"
                            value={pricing}
                            onChange={(e) => setPricing(e.target.value)}
                            required
                            className="shadow-md shadow-[#A9A9A9] w-[474px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[984px] h-[104px] ml-[31px] mt-[36px]  ">
                        <div>
                            <div className=" w-[165px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Available places
                            </div>
                            <input
                            type="number"
                            min={0}
                            id="places"
                            placeholder="34"
                             className="shadow-md shadow-[#A9A9A9] w-[474px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " 
                            value={places}
                            onChange={(e) => setPlaces(e.target.value)}
                            required >
                            </input>
                        </div>
                        <div className=" ml-[35px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Date
                            </div>
                            <input 
                            type="Date"
                            min={1/1/2025}
                            id="date"
                            placeholder="01/01/2025"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[238px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                        <div className=" ml-[16px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Hour
                            </div>
                            <input
                            type="time"
                            
                            id="time"
                            placeholder="8:00"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                             className=" shadow-md shadow-[#A9A9A9] w-[221px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[984px] h-[99px] ml-[31px] mt-[36px]  ">
                        <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Location
                            </div>
                            <input
                            
                            type="text"
                            
                            id="location"
                            placeholder="Setif"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                             className="shadow-md shadow-[#A9A9A9] w-[474px] h-[55px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

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
                            value={levelName}
                            onChange={(e) => setLevelName(e.target.value)}
                            required
                            className=" shadow-md shadow-[#A9A9A9] w-[238px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >
                                {/* <option>1 AP</option>
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
                                <option>3 AS</option> */}
                                <option>level:</option>
                                {levels && levels.map((level)=>(
                                    <option key={level.level_id} value={level.level_id}>{level.level_name}</option>
                                ))}
                            </select>
                        </div>
                        <div className=" ml-[16px] ">
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Module
                            </div>
                            <select
                            type="text"
                            id="modulee"
                            placeholder="Select a Module"
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            required
                             className=" shadow-md shadow-[#A9A9A9] w-[221px] h-[60px] mt-[20px] pl-[20px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >
                                {/* <option>jcp</option>
                                <option>nfetchiw </option>
                                <option>3la 7ssab lvl</option>
                                <option>wla kifah</option> */}
                                <option >module:</option>
                                {modules && 
                                        modules.filter((module)=> module.module_level == levelName)
                                        .map((module)=>(
                                            <option key={module.module_id} value={module.module_id}>{module.module_name}</option>
                                        ))}

                            </select>
                        </div>
                    </div>
                    
                    <div className=" w-[984px] h-[198px] ml-[31px] mt-[36px]  ">
                    <div>
                            <div className=" w-[110px] h-[24px] text-[22px] text-[#021936] font-bold ">
                                Description
                            </div>
                            <input
                            
                            type="text"
                            
                            id="description"
                            placeholder="Write a description ..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                             className="shadow-md shadow-[#A9A9A9] w-[984px] h-[155px] mt-[20px] pl-[20px] pb-[100px] text-[#021936] placeholder-[#ACACAC] border-[2px] border-[#D8D8D8] rounded-[8px] focus:outline-none focus:ring focus:ring-[#021936] " >

                            </input>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mt-[44px] h-[60px] w-[1055px]  ">
                        <button className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[65px] text-[22px] font-bold ml-[572px] border-[1px] border-[#525FE1] flex items-center px-3 w-[200px] h-[60px] bg-[#EAEAEA] text-[#525FE1] ">
                            Cancel
                        </button>
                        <button type="submit" className=" shadow-md shadow-[#A9A9A9] rounded-[8px] pl-[75px] text-[22px] font-bold ml-[19px] border-[1px] border-[#525FE1] flex items-center px-3 w-[200px] h-[60px] bg-[#525FE1] text-white ">
                            Save
                        </button>
                    </div>

                </form>

                </div>
            
            </div>
        </div>
    )

}
export default NewCourse;