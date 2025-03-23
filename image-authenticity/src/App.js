import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Imgauth from "./Components/Imgauth"; // Ensure the correct import
import VideoAuth from "./Components/videoauth";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page as Default Route */}
        <Route path="/" element={<Home />} />
        {/* Image Prediction Page */}
        <Route path="/imgauth" element={<Imgauth />} />
        <Route path="/videoauth" element={<VideoAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
