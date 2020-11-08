import React from "react";
import Particles from "react-particles-js";
import particlejson from "./particlesjs-config.json"

export default () => (
  <Particles
    params={particlejson}
    style={{
      position: "fixed",
      backgroundColor: "#000000",
      top: "0px",
      left: "0px"
    }}
  />
);