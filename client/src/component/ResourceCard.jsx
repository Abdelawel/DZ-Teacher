// ResourceCard.jsx
import React from "react";

const ResourceCard = ({
  resource,
  onCardClick,
  showStudentCount = false,
  showButton = false,
  buttonText = "",
  onButtonClick,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: onCardClick ? "pointer" : "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
      onClick={() => onCardClick && onCardClick(resource)}
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
      {showStudentCount && (
        <p
          style={{
            fontSize: "14px",
            color: "#5A67D8",
            marginTop: "10px",
          }}
        >
          Students: {resource.studentCount}
        </p>
      )}
      {showButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onButtonClick && onButtonClick(resource);
          }}
          style={{
            marginTop: "10px",
            backgroundColor: "#5A67D8",
            color: "#FFF",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ResourceCard;
