import React from "react";
import { NavLink } from "react-router-dom";

const listStyle = {
  dispaly: "flex",
  flexDirection: "column",
  paddingLeft: "0px",
  marginTop: "0px",
};

const tabStyle = {
  backgroundColor: "#B2FFE0",
  fontWeight: "bolder",
  fontSize: "15px",
  height: "50px",
  color: "#272932",
  display: "block",
  paddingTop: "5%",
  paddingBottom: "5%",
};

const active = {
  backgroundColor: "#27293200",
  color: "#B2FFE0"
};


class TabBar extends React.Component {
  render() {
    return <div id="tabBar" className="col s12 m3 center-align" style={listStyle}>
        <NavLink exact to="/" style={tabStyle} activeStyle={active}>
          Home
        </NavLink>
        <NavLink to="/projects" style={tabStyle} activeStyle={active}>
          Projects
        </NavLink>
        <NavLink to="/resume" style={tabStyle} activeStyle={active}>
        Resume
        </NavLink>
        <NavLink to="/contact" style={tabStyle} activeStyle={active}>
          Contact
        </NavLink>
        
      </div>;
  }
}

export default TabBar;