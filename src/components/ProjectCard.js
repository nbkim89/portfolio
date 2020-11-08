import React from "react";

const style = {
  minHeight: "220px",
  backgroundColor: "#F4F7F500",
  color: "#DEE5E5",
  maxHeight: "220px",
};

const actionStyle = {
  color: "#B2FFE0",
  fontWeight: "bolder"
};

class ProjectCard extends React.Component {
  state = {
    content: this.props.title,
    hover: false,
  };

  handleOnHover = event => {
    this.setState({
      content: this.props.note,
      hover: true
    });
  };

  handleOffHover = () => {
    this.setState({ content: this.props.title, hover: false });
  };

  render() {
    return (
      <div className="col s12 l6">
        <div
          className="card horizontal hoverable"
          onMouseEnter={this.handleOnHover}
          onMouseLeave={this.handleOffHover}
          style={style}>
          {/* <div className="card-image">
            <img style={{maxHeight: "220px", width: "auto"}} src={`${window.location.origin}/assets/images/${this.props.image}.jpeg`} alt={this.props.image} />
      </div> */}
          <div className="card-stacked col s8 center-align">
            <div
              className="card-content">
              <span>
                {this.state.hover ? (
                  <h6>{this.state.content}</h6>
                ) : (
                  <h5 style={{fontWeight:"900"}}>{this.state.content}</h5>
                )}
              </span>
            </div>
            <div className="card-action">
              <a href={this.props.app} target="_blank" style={actionStyle}>
                App
              </a>
              <a href={this.props.github} target="_blank" style={actionStyle}>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;