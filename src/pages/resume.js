import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%",
    color: "#DEE5E5",
    fontFamily: "'Quicksand', sans-serif",
    paddingTop: "10px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  content: {
    fontSize: theme.typography.pxToRem(20)
  },
  panel: {
    backgroundColor: "#F4F7F500"
  },
  column: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "900px"
  }
});

class Resume extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Skills</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>Node</li>
              <li>Express</li>
            </ul>
            <ul style={{ marginLeft: "10%" }}>
              <li>React</li>
              <li>Git</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Employment</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul style={{ width: "100%" }}>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    KW Cages
                  </span>
                  <span className="col s12 m4">
                    Lead Welder
                  </span>
                  <span className="col s12 m4">July 2015-Present</span>
                </div>
              </li>
              <li>
                <div className="row">
                  <span className={classNames(classes.heading, "col s12 m4")}>
                    So Cal Dominoids Inc.
                  </span>
                  <span className="col s12 m4">Driver</span>
                  <span className="col s12 m4">October 2010-July 2015</span>
                </div>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
          className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <span className={classes.heading}>Education</span>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.content}>
            <ul>
              <li>
                <h5>UCSD Extension</h5>
                <span>Full Stack Web Development</span>
              </li>
              <li>
                <h5>Long Beach City College</h5>
                <span>Associate's in Audio Production</span>
              </li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);