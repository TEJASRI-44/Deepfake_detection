import React, { useState } from "react";
import "../Styles/videoauth.css";

function VideoAuth() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      alert(`Uploading: ${selectedFile.name}`);
      // Add actual upload logic here
    } else {
      alert("Please select a video file first!");
    }
  };

  return (
    <div className="video-auth-container">
      <div className="video-auth-box">
        <h2 className="title">VIDEO AUTHENTICITY PREDICTION</h2>
        
        <div className="file-input-container">
          <input type="file" id="video-upload" accept="video/*" onChange={handleFileChange} />
          <label htmlFor="video-upload">
            {selectedFile ? selectedFile.name : "Choose Video"}
          </label>
        </div>

        <button className="upload-button" onClick={handleUpload}>
          🎥 Upload & Predict
        </button>
      </div>
    </div>
  );
}

export default VideoAuth;
