import React, { useState } from "react";
import { blogs } from "./blogs";
import Blog from "./Blogs.jsx";

const Button = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [getBlogs, setGetBlogs] = useState(false);
  // const [isSliding, setIsSliding] = useState(true);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Adjust duration as needed (ms)
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() => {
          handleClick();
          setGetBlogs((pre) => !pre);
        }}
        className={`button ${isAnimating ? "animated" : ""}`}
      >
        {getBlogs ? "Hide Blogs" : "Show Blogs"}
      </button>
      {getBlogs && (
        <div style={{ padding: "2rem 1rem" }}>
          <div
            style={{ display: "flex", justifyContent: "center"}}
            className="blog-list"
          >
            <h2>My Blogs</h2>
          </div>
          <div>
            {blogs?.map((blog, i) => 
            (<Blog key={i} title={blog.title} desc={blog.desc} index={i} />)
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
