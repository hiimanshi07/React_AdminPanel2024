// // ScrollingBoxes.js

// import React, { useEffect, useState } from "react";
// import "./ScrollingBoxes.css";
// import { Text } from "@chakra-ui/react";

// const ScrollingBoxes = () => {
//   const [currentBox, setCurrentBox] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBox((currentBox + 1) % 3);
//     }, 2000); // Adjust the time interval as needed

//     return () => clearInterval(interval);
//   }, [currentBox]);

//   return (
//     <div className="container">
//       <div className="box">{currentBox === 0 && <Text>"Hello 1"</Text>}</div>
//       <div className="box">{currentBox === 1 && <Text>"Hello 1"</Text>}</div>
//       <div className="box">{currentBox === 2 && <Text>"Hello 1"</Text>}</div>
//     </div>
//   );
// };

// export default ScrollingBoxes;
// ImageSlider.js

import React, { useState, useEffect } from "react";
// import "./ScrollingBoxes.css";
function ScrollingBoxes() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => {
        let nextCounter = prevCounter + 1;
        if (nextCounter > 4) {
          nextCounter = 1;
        }
        return nextCounter;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero__slider">
      <div className="hero__slides">
        {/* radio buttons start */}
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          checked={counter === 1}
          readOnly
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          checked={counter === 2}
          readOnly
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          checked={counter === 3}
          readOnly
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio4"
          checked={counter === 4}
          readOnly
        />
        {/* radio buttons end */}
        {/* slide images start */}
        <div className={`hero__slide slide0${counter}`}>
          <img
            src={`https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
            alt=""
          />
        </div>
        <div className={`hero__slide slide0${counter}`}>
          <img
            src={`https://images.unsplash.com/photo-1627840935425-3d333bb627f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
            alt=""
          />
        </div>
        <div className={`hero__slide slide0${counter}`}>
          <img
            src={`https://images.unsplash.com/photo-1627921457384-2f365b7a4740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
            alt=""
          />
        </div>
        <div className={`hero__slide slide0${counter}`}>
          <img
            src={`https://images.unsplash.com/photo-1611231731916-826fe315c533?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
            alt=""
          />
        </div>
        <div className="hero__btns">
          <div className="btn__auto auto-btn1"></div>
          <div className="btn__auto auto-btn2"></div>
          <div className="btn__auto auto-btn3"></div>
          <div className="btn__auto auto-btn4"></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollingBoxes;
