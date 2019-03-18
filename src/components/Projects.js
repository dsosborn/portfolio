import React, { Component } from "react";
import "./Project.scss";
import Project from "./Project";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { projectStatus: "loading" };
  }

  render() {
    console.log(this.props.projects.length);
    var isLoaded =
      this.props.projects.length > 0
        ? "lds-ellipsis projectsLoaded"
        : "lds-ellipsis";

    return (
      <div className="container">
        <h2 className="sectionTitle">
          <span>DESIGN & DEV</span>
        </h2>
        <div className={isLoaded}>
          <div />
          <div />
          <div />
          <div />
        </div>
        {this.props.projects.map((project, index) => (
          <Project key={project.ID} project={project} index={index} />
        ))}
      </div>
    );
  }
}

export default Projects;
