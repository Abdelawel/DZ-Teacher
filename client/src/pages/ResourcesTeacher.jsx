import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResourceCard from "../component/ResourceCard";
import image from "../assets/image2.png";
import Sidebar from "../component/Sidebar";
import { useSelector } from 'react-redux'
import { jwtDecode } from 'jwt-decode'
import axios from "axios";

const ResourcesTeacher = () => {
  const [resources, setResources] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // const filteredResources = resources.filter((resource) =>
  //   resource.resource_title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleEditResource = (id) => {
    navigate(`/resources/${id}`);
  };

  const {token} = useSelector((state)=>state.auth)
    // console.log(jwtDecode(token).id)

  useEffect(() => {
    const fetchData = async()=>{
      try {
        const result = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/get-resource`)
        console.log(result)
        setResources(result.data.data.resource)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  
    
  }, [])
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Your <span style={{ color: "#5A67D8" }}>Resources</span>
          </h1>
          <Link to="/">
            <button
              style={{
                backgroundColor: "#5A67D8",
                color: "#FFF",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              + Add New Resource
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search Resources"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
          {resources.filter((resource)=>resource.resource_status == 1).filter((resource)=>resource.uploaded_by == jwtDecode(token).id).map((resource) => (
            <div  onClick={() => handleEditResource(resource.resource_id)} style={{ cursor: "pointer" }}>
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesTeacher;
