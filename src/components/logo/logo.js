import React from "react";
import { logo as logoImage } from "./images/profile1.jpg";  // Import the logo and rename it to logoImage to avoid conflict

const Logo = () => {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width: "20px", height: "20px" }} />
    </div>
  );
};

export default Logo;
