import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Science Engineer",
          "Deep Learning",
          "Machine Learning",
          "Data Handling and Visualisation"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }} 
    />
  );
}

export default Type;
