import React from "react";

const labelStyle = {
  fontSize: "25px",
  fontWeight: "bolder",
    color: "#DEE5E5",
    position: "relative",
    bottom: "60px",
    left: "30px",
};

class ContactCard extends React.Component {
  render() {
    return (
      <div className="col s12 m6 offset-m1" style={{ width: "300px", paddingTop: "10px" }}>
        <a href={this.props.link} target="_blank">
          <img
            src={`${window.location.origin}/assets/images/${
              this.props.icon
            }.png`}
            alt={this.props.label}
          />
          <span style={labelStyle}>{this.props.label}</span>
        </a>
      </div>
    );
  }
}

export default ContactCard;