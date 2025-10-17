import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={isMobile ? "container mobile" : "container desktop"}>
      <h2>Student Information</h2>
      <div className="student-info">
        <div className="info-item">
          <strong>Name:</strong> Reshwanth Bagam
        </div>
        <div className="info-item">
          <strong>Roll No:</strong> 12345
        </div>
        <div className="info-item">
          <strong>Course:</strong> B.Tech AL&ML
        </div>
        <div className="info-item">
          <strong>Email:</strong> reshwanth@example.com
        </div>
      </div>
    </div>
  );
}

export default App;
