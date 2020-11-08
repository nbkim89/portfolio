import React from "react";
import Name from "./Name";

const style = {
  position: "relative",
  marginTop: "5%",
  fontFamily: "'Quicksand', sans-serif"
};

export default ({ children }) => (
  <div className="container" style={style}>
    <Name />
    <div
      className="row"
      style={{
        backgroundColor: "#27293299"
      }}>
      {children}
    </div>
  </div>
);