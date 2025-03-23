import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      
      {/* Main Container */}
      <div className="home-container">
        <h1 className="title">DeepFake Detection</h1>
        <p className="subtitle">AI-powered detection for images & videos</p>

        {/* Buttons */}
        <div className="button-container">
          <button className="option-button" onClick={() => navigate("/Imgauth")}>
            <span role="img" aria-label="Image">🖼️</span> Image Prediction
          </button>
          <button className="option-button" onClick={() => navigate("/videoauth")}>
            <span role="img" aria-label="Video">🎥</span> Video Prediction
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
