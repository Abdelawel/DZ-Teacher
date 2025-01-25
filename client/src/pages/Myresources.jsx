import React, { useState } from "react";
import Layout from "../component/Layout";
import image from "../assets/image2.png";

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    {
      id: 1,
      title: "Math Resources",
      price: "1500 DA",
      description: "Comprehensive materials for mastering mathematics.",
      teacher: "Ziyad Aldjahmani",
      image: image,
    },
    {
      id: 2,
      title: "Physics Resources",
      price: "1500 DA",
      description: "Detailed guides and problem sets for physics.",
      teacher: "Ziyad Aldjahmani",
      image: image,
    },
    {
      id: 3,
      title: "Chemistry Resources",
      price: "1500 DA",
      description: "Understand chemical reactions and equations.",
      teacher: "Ziyad Aldjahmani",
      image: image,
    },
    {
      id: 4,
      title: "Biology Resources",
      price: "1500 DA",
      description: "Learn about the living world and its complexities.",
      teacher: "Ziyad Aldjahmani",
      image: image,
    },
    {
      id: 5,
      title: "History Resources",
      price: "1500 DA",
      description: "Dive deep into historical events and figures.",
      teacher: "Ziyad Aldjahmani",
      image: image,
    },
  ];

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseModal = () => {
    setSelectedResource(null);
  };

  return (
    <Layout>
      <div style={{ paddingBottom: "150px" }}>
        {/* Search Bar */}
        <div style={{ display: "flex", justifyContent: "center", padding: "20px 10px 0" }}>
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
        </div>

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
          {filteredResources.map((resource) => (
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
                src={resource.image}
                alt={resource.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "18px", margin: "10px 0", color: "#333" }}>
                {resource.title}
              </h3>
              <p style={{ fontSize: "16px", color: "gray" }}>{resource.price}</p>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedResource && (
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
                src={selectedResource.image}
                alt={selectedResource.title}
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
                {selectedResource.title}
              </h2>

              {/* Description */}
              <p style={{ fontSize: "16px", color: "#555", marginBottom: "15px" }}>
                {selectedResource.description}
              </p>

              {/* Teacher Name */}
              <p style={{ fontSize: "16px", color: "green", marginBottom: "15px", fontStyle: "italic" }}>
                Teacher: {selectedResource.teacher}
              </p>

              {/* Price */}
              <p style={{ fontSize: "18px", color: "#444", fontWeight: "bold" }}>
                Price: {selectedResource.price}
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
        )}
      </div>
    </Layout>
  );
};

export default ResourcesPage;
