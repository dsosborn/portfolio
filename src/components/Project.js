import React, { Component } from "react";
import "./Project.scss";

class Project extends Component {
  render() {
    const { post_title, post_content, acf } = this.props.project;
    var orderClass1 = this.props.index % 2 === 0 ? "" : "col-md-push-6";
    var orderClass2 = this.props.index % 2 === 0 ? "" : "col-md-pull-6";
    return (
      <section className="project">
        <div className="row">
          <div className={"dimage dimage--glass col-md-6 " + orderClass1}>
            <img src={acf.image.url} alt={post_title} />
          </div>
          <div className={"siteDesc col-md-6 " + orderClass2}>
            <h3>{post_title}</h3>
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: post_content
              }}
            />
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={acf.weblink}
                className="btn btn-teal"
              >
                <span
                  className="glyphicon glyphicon-new-window"
                  aria-hidden="true"
                />{" "}
                {acf.cta}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
