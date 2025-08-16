import React from "react";
import "./FeatureCard.css";

function FeatureCard({ iconUrl, title, description }) {
  return (
    <div className="card-box">
      <div  className="feature-card">
      <div className="feature-icon">{iconUrl && <img src={iconUrl}  />}</div>
      <div>
        <h3>{title}</h3>
      <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

export default FeatureCard;
