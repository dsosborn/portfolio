import React, { Component } from "react";
import "./Footer.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <AnchorLink className="linkOnDark" id="toTop" href="#root">
          <span
            className="glyphicon glyphicon-triangle-top"
            aria-hidden="true"
          />
          Back to Top
        </AnchorLink>
      </footer>
    );
  }
}

export default Footer;
