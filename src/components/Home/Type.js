import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer 🌐",
          "MERN Stack Developer 💻",
          "Student 👨🏼‍🎓",
          "Smart India Hackathon Winner 2023 🏆",
          "Flutter Developer 📱"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
