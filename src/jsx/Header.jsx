import React, { Component } from "react";
import Logo from "./Logo";
import "../sass/Header.sass";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo></Logo>
      </div>
    );
  }
}
