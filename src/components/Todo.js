import React, { Component, PropTypes } from "react";

export default class Todo extends Component {
  render() {
    const textColor = this.props.status ? "red" : "black";
    return (
      <li>
        <p style={{ color: textColor }}>{this.props.text}</p>
      </li>
    );
  }
}
