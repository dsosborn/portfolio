import React, { Component } from "react";
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="row">
          <div className="col-md-6 col-md-push-3" id="herotext">
            <p>Hi, I'm</p>
            <h1 className="myBigName">Doug Osborne</h1>
            <div id="hero-text2">
              <p>
                I design, code, and move ideas<br />from inception to
                completion.
              </p>
            </div>
            <a
              id="contact"
              className="btn"
              href="mailto:&#100;&#111;&#117;&#103;&#064;&#115;&#101;&#101;&#100;&#111;&#117;&#103;&#114;&#117;&#110;&#046;&#099;&#111;&#109;"
            >
              <span>
                <i className="material-icons">mail_outline</i> Contact Me
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
