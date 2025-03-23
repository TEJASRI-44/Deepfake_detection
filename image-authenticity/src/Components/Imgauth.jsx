import React, { useState } from "react";
import axios from "axios";
import "../Styles/Imgauth.css";

function Imgauth() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setPrediction(""); // Clear previous result when a new file is selected
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("⚠️ Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("❌ Error uploading file:", error);
      alert("❌ Error making prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Image Authenticity Prediction</h2>
      
      <div className="upload-box">
        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
        <button onClick={handleUpload} className="upload-button" disabled={isLoading}>
          {isLoading ? "Processing..." : "Upload & Predict"}
        </button>
      </div>

      {selectedFile && (
        <div className="preview-box">
          <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="preview-image" />
        </div>
      )}

      {prediction && (
        <h3 className="prediction">Prediction: {prediction}</h3>
      )}
    </div>
  );
}

export default Imgauth;
