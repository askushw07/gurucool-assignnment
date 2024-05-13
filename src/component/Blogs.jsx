import React, { useEffect, useState } from 'react';

const Blog = ({ title, desc, index }) => {
    const [slide, setSlide] = useState(false);
    const [unmount, setUnmount] = useState(false);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setSlide(true);
        }, parseInt(index) * 1000)
    },[])
  return (
    <div className={`blog ${slide?"slide-in":""} ${unmount?"slide-out":""} ${display?"displayNone":""}`}>
      <h3>{title}</h3>
          <p>{desc}</p>
          <br />
          <button onClick={() => {
              setUnmount(true);
              setTimeout(() => {
                  setDisplay(true);
              },1000)
          }}>Remove</button>
    </div>
  );
};

export default Blog;
