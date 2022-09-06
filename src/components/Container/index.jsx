import React, { Component } from "react";
import styles from "./styles.module.css";
import Title from "../Title";

export default class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.head}>
          <Title>{this.props.name}</Title>
          <span className={styles.see}>
            <a href="/">{this.props.see}</a>
          </span>
        </span>
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}
