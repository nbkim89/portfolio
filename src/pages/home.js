import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <div
    className="col s10 offset-s1"
    style={{
      color: "#DEE5E5"
    }}>
    <div className="section">
      <p className="flow-text">
        Welcome! You've stumbled onto my portfolio! I'm a welder by day and web dev student by night (and weekends). I've always been fascinated by tech and its place in society. So I have decided to follow my head (and heart) and transition to a career in development. Please check out my 
        <NavLink to="/projects"> projects!</NavLink>
      </p>
    </div>
  </div>
);