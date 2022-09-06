import React, { Component } from "react";
import styles from "./styles.module.css";
import Button from "../Button";
export default class PastCard extends Component {
  render() {
    const { date, description, people } = this.props.data;
    return (
      <div className={styles.container}>
        <p>{date}</p>
        <hr className={styles.line} />
        <p>{description}</p>
        <p>
          {people} &nbsp;
          <span className={styles.went}>went</span>
        </p>
        <Button>View</Button>
      </div>
    );
  }
}
