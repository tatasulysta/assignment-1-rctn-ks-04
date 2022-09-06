import React, { Component } from "react";

export default class NavItem extends Component {
  render() {
    const { link, name, id } = this.props.data;
    return (
      <li key={id}>
        <a href={link}>{name}</a>
      </li>
    );
  }
}
