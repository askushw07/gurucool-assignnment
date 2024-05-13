import React, { useState } from "react";

const Button = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Adjust duration as needed (ms)
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={handleClick}
        className={`button ${isAnimating ? "animated" : ""}`}
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
