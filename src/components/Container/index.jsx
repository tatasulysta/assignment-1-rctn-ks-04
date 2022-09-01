import React, { Component } from "react";
import styles from "./styles.module.css";

export default class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span className={styles.head}>
          {this.props.name}{" "}
          <span className={styles.see}>
            <a href="/">{this.props.see}</a>
          </span>
        </span>
        <div className={styles.child}>{this.props.children}</div>
      </div>
    );
  }
}
