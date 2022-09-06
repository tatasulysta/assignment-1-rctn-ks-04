import React, { Component } from "react";
import styles from "./styles.module.css";
export default class Image extends Component {
  render() {
    const type = this.props.variant;
    return (
      <div className={type ? styles[type] : styles.square}>
        <img src={this.props.src} alt="" srcset="" />
      </div>
    );
  }
}
