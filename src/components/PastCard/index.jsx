import React, { Component } from "react";
import styles from "./styles.module.css";
import Button from "../Button";
export default class PastCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>{this.props.date}</p>
        <hr className={styles.line} />
        <p>{this.props.description}</p>
        <p>
          {this.props.people} &nbsp;
          <span className={styles.went}>went</span>
        </p>
        <Button>View</Button>
      </div>
    );
  }
}
