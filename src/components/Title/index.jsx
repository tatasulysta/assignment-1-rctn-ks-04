import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return <b styles={{ fontSize: "large" }}>{this.props.children}</b>;
  }
}
