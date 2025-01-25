import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ResourceCard from "../component/ResourceCard";
import image from "../assets/image2.png";
import Sidebar from "../component/Sidebar";

const TeacherResourcesPage = () => {
  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Math Resources",
      price: "1500 DA",
      description: "Comprehensive resources for teaching mathematics.",
      tags: ["Math", "Teaching"],
      image: image,
    },
    {
      id: 2,
      title: "Physics Resources",
      price: "1500 DA",
      description: "Complete physics teaching materials for high school.",
      tags: ["Physics", "Education"],
      image: image,
    },
    {
      id: 3,
      title: "Chemistry Resources",
      price: "1500 DA",
      description: "Chemistry notes and practice problems.",
      tags: ["Chemistry", "High School"],
      image: image,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditResource = (resource) => {
    navigate("/teacher/editresource", { state: { resource } });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Your <span style={{ color: "#5A67D8" }}>Resources</span>
          </h1>
          <Link to="/teacher/addresource">
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
          {filteredResources.map((resource) => (
            <div key={resource.id} onClick={() => handleEditResource(resource)} style={{ cursor: "pointer" }}>
              <ResourceCard resource={resource} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherResourcesPage;
