import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SAT Coach",
          "Ivy League Graduate",
          "College Advisor",
          "95th Percentile SAT scorer",
          "National Merit Commended Scholar"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
