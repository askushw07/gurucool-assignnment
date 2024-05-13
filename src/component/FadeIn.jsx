import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AnimatedList from "./AnimatedList";
import Button from "./Button";


const FadeIn = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
      style={{
        display: "flex",
        justifyContent: "space-between",
          alignItems: "center",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: "2rem",
          cursor: "pointer",
          zIndex: 100,
          color:open?"white":"black"
        }}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <h1 style={{fontSize:"2rem", color:"green"}}>GuruCool</h1> 
      </div>

      
      
      <div style={{position:"relative"}}>
        <AnimatedList open={open} />

      </div>
      <Button/>
      
    </>
  );
};

export default FadeIn;
