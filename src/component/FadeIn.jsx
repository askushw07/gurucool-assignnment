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
      <div style={{padding:"2rem 1rem"}}>
        <h2>My Blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nulla libero quia, eaque tempora nihil repellat molestiae blanditiis nostrum qui omnis sequi dolore mollitia natus reiciendis impedit voluptatem animi quibusdam? Nisi maxime asperiores harum! Perferendis magni odit animi totam nobis.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti. Ea assumenda deleniti dolore magni!</p>
        </div>
      <Button/>
    </>
  );
};

export default FadeIn;
