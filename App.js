import React, { useState } from 'react';
import './App.css';  // Import CSS file

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <button className="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Element
      </button>

      {/* Adding a delay for smooth exit animation */}
      <div className={`visible-box ${isVisible ? "show" : ""}`}>
        This is a visible element
      </div>
    </div>
  );
}

export default App;
