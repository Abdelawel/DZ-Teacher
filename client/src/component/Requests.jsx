import React from "react";
import axios from "axios";
import RequestCard from "./RequestCard";
import { useState, useEffect,useContext } from "react";

const Requests = () => {


    const [req, setReq] = useState([])
        

    const getAllRequests = async () => {
            try{

                    const requests = await axios.get("http://localhost:5000/")
                    setReq(requests.data)
            }catch{}
            console.log(req)

    };

    useEffect(()=> {
            getAllRequests() ;
        }, [])

    

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
                
                
                { req.length >= 1 ? (req.map((teachRqst) => {
                return (<RequestCard key={req._id} teachRqst={teachRqst.Username} teachEmail={teachRqst.email} />)
                }
                )) : <h2> ERROR !!!</h2>
                
                }

                </div>
            
            </div>
            </div>
        </div>
    )

}
export default Requests;