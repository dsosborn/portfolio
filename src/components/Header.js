import React, { Component } from "react";
import "./Header.scss";

const logo = "../images/doug-osborne_logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="logo" src={logo} alt="" />
      </header>
    );
  }
}

export default Header;
