import React, { useState, useEffect } from "react";
import Layout from "../component/Layout";
import image from "../assets/image2.png";
import axios from "axios";
import Modal from "../component/Modal";

const Myresources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);

  const [resources, setResources] = useState([])

  // const filteredResources = resources.filter((resource) =>
  //   resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

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
  

  const handleCloseModal = () => {
    setSelectedResource(null);
  };

  return (
    <Layout>
      <div style={{ paddingBottom: "150px" }}>
        {/* Search Bar */}
        {/* <div style={{ display: "flex", justifyContent: "center", padding: "20px 10px 0" }}>
          <input
            type="text"
            placeholder="Search keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "50%",
              padding: "12px",
              borderRadius: "25px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div> */}

        {/* Header */}
        <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>
            Your <span style={{ color: "#5A67D8" }}>Resources</span>
          </h1>
        </div>

        {/* Resource Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          {resources.filter((resource)=>resource.resource_status == 1 ).map((resource) => (
            <>
            <div
              key={resource.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
              onClick={() => setSelectedResource(resource)}
            >
              <img
                src={image}
                alt={resource.resource_title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "18px", margin: "10px 0", color: "#333" }}>
                {resource.resource_title}
              </h3>
              <p style={{ fontSize: "16px", color: "gray" }}>{resource.resource_price}</p>
            </div>

            
          </>
          ))}

        {selectedResource && resources.map((resource)=>(
          <>
             <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "10px",
                width: "90%",
                maxWidth: "600px",
                padding: "20px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                position: "relative",
              }}
            >
              {/* Image */}
              <img
                src={image}
                alt=""
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />

              {/* Title */}
              <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "#333" }}>
                {resource.resource_title}
              </h2>

              {/* Description */}
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "15px" }}>
                {resource.resource_description}
              </p>

              {/* Teacher Name */}
              <p style={{ fontSize: "16px", color: "green", marginBottom: "15px", fontStyle: "italic" }}>
                Teacher: {resource.resource_uploaded_by}
              </p>

              {/* Price */}
              <p style={{ fontSize: "18px", color: "#444", fontWeight: "bold" }}>
                Price: {resource.resource_price}
              </p>

              {/* View Button */}
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
                  marginTop: "20px",
                }}
              >
                View Resource
              </button>

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                &times;
              </button>
            </div>
          </div>
          </>
        )) 
         
        }
        </div>

        
        
      </div>
    </Layout>
  );
};

export default Myresources;
