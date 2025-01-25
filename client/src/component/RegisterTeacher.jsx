    import React, { useState } from "react";
    // import MyImage from "C:/Users/HP User/dz-teacher/src/assets/Group 231.png"
    import axios from "axios";
    import { onRegisterTeacher } from '../api/auth';
    import Layout from "../component/Layout";

    const server_url = import.meta.env.VITE_SERVER_URL

    const RegisterTeacher = () => {



        // State for form inputs
        const [email, setEmail] = useState("");
        const [phonenumber, setPhonenumber] = useState("");
        const [firstname, setFirstname] = useState("");
        const [lastname, setLastname] = useState("");
        const [address, setAddress] = useState("");
        const [bday, setBday] = useState("");
        const [bmonth, setBmonth] = useState("");
        const [byear, setByear] = useState("");
        const [expyear, setExpyear] = useState("");
        const [expmonth, setExpmonth] = useState("");
        const [link, setLink] = useState("");



        const [password, setPassword] = useState("");
        
        //mazalo ta3 qualifications
        // State for feedback
        const [error, setError] = useState(null);
        
        // Handle form submission
        const [success, setSuccess] = useState(null);
        const handleSubmit = async (e) => {
            e.preventDefault();
        
            const formData = {
            teacher_name: lastname,
            teacher_firstname: firstname,
            teacher_email: email,
            teacher_password: password,
            cv_link: link,
            teacher_date_of_birth: `${byear}-${bmonth}-${bday}`,
            teacher_address: address,
            teacher_phone: phonenumber,
            teacher_status: 1,
            };
        
            // console.log(formData)
            try {
        const result = await onRegisterTeacher({formData})

            setError('');
            //   setSuccessMessage(data.data.message);
            navigate('/login');
            } catch (error) {
            if (error.response && error.response.status === 409) {
                setError("This email is already in use. Please try a different one.");
            } else {
                setError("An error occurred. Please try again later.");
            }
            //   setSuccessMessage('');
            }
        };
        
        



        return(
            <Layout>
            <div>
                <div className="flex items-center justify-center w-[1440px] h-auto ">
                    
                    
                <div className=" w-[1440px] h-[87px]  absolute top-0 bg-[#021936]">
                </div>
                <div className=" w-[824px] h-[60px] absolute top-[180px] text-[#021936] text-[54px] font-bold  ">
                    Join DZ-TEACHERS Family Now!
                </div>
                <div className=" w-[511px] h-[48px] text-[#7A7A7A] absolute top-[259px] text-center  ">
                        some meaningfull text should be inserted here inchalah ma ychoufhach azouaouo hhhhh
                </div>

                <div className=" w-[1254px] h-[761px] absolute top-[367px] border-[#D8D8D8] rounded-[8px] border-[1px] ">
                <form className="  w-[1254px] h-[761px] " onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className=" flex justify-center items-center h-[104px] w-[1042px]  mt-[80px] ml-[106px] ">
                        <div className=" mr-[70px] ">
                            <p className=" text-[22px] text-[#021936] font-bold ">First Name</p>
                            <input 
                                        type="text"
                                        id="firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        required
                                        placeholder="Enter your First name"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                        <div>
                            <p className=" text-[22px] text-[#021936] font-bold ">Last Name</p>
                            <input 
                                        type="text"
                                        id="lastname"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                        required
                                        placeholder="Enter your Last name"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center h-[104px] w-[1042px]  mt-[20px] ml-[106px] ">
                        <div className=" mr-[70px] ">
                            <p className=" text-[22px] text-[#021936] font-bold ">Email</p>
                            <input 
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your e-mail"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                        <div>
                            <p className=" text-[22px] text-[#021936] font-bold ">Phone Number</p>
                            <input 
                                        type="tel"
                                        id="phonenumber"
                                        value={phonenumber}
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                        required
                                        placeholder="Enter your phone number"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center h-[104px] w-[1042px]  mt-[20px] ml-[106px] ">
                        <div className=" mr-[70px] ">
                            <p className=" text-[22px] text-[#021936] font-bold ">Address</p>
                            <input 
                                        type="text"
                                        id="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        placeholder="Enter your address"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                        <div>
                            <p className=" text-[22px] text-[#021936] font-bold ">Birthday</p>
                            <input
                                        type="number"
                                        min={1}
                                        max={31} 
                                        id="bday"
                                        value={bday}
                                        onChange={(e) => setBday(e.target.value)}
                                        required
                                        placeholder=" Day"
                                        className="w-[152px] h-[62px] mt-[7px] mr-[15px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                                        <input 
                                        type="number"
                                        min={1}
                                        max={12}
                                        id="bmonth"
                                        value={bmonth}
                                        onChange={(e) => setBmonth(e.target.value)}
                                        required
                                        placeholder=" Month "
                                        className="w-[152px] h-[62px] mt-[7px] mr-[15px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                                        <input
                                        type="number"
                                        min={1920}
                                        max={2024} 
                                        id="byear"
                                        value={byear}
                                        onChange={(e) => setByear(e.target.value)}
                                        required
                                        placeholder=" Year "
                                        className="w-[150px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center h-[104px] w-[1042px]  mt-[20px] ml-[106px] ">
                    <div className=" mr-[70px] ">
                            <p className=" text-[22px] text-[#021936] font-bold ">Your Qualifications</p>
                            <div className=" relative ">
                            <input 
                                        type="file"
                                        id="qualif"
                                        name="qualif"
                                        onChange={(e)=>setLink(e.target.value)}
                                        placeholder="No file selected"
                                        className=" flex-grow w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                                            
                                            </div>       
                        </div>
                        <div>
                            <p className=" text-[22px] text-[#021936] font-bold ">Password</p>
                            <input 
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Enter your password"
                                        className="w-[486px] h-[62px] mt-[7px] px-5 py-2 border-[2px] border-[#525FE1] rounded-[14px] focus:outline-none focus:ring focus:ring-blue-500"/>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center mt-[64px] ml-[106px] h-[60px] w-[1042px] ">
                    <button className="rounded-[8px] pl-[65px] text-[22px] font-bold ml-[599px] border-[1px] border-[#525FE1] flex items-center px-3 w-[212px] h-[60px] bg-[#EAEAEA] text-[#525FE1] ">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="rounded-[8px] pl-[65px] text-[22px] font-bold ml-[19px] border-[1px] border-[#525FE1] flex items-center px-3 w-[212px] h-[60px] bg-[#525FE1] text-white ">
                        Submit
                    </button>
                    {/* onClick={handleSubmit(e)} */}
                    </div>

                </form>
                </div>

            <div className=" w-[1440px] h-[495px] absolute top-[1222px] bg-[#021936] ">

            </div>

                </div>
            </div>
            </Layout>
        )

    }
    export default RegisterTeacher;