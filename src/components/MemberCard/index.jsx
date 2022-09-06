import React, { Component } from "react";
import styles from "./styles.module.css";
import Image from "../Image";
export default class MemberCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Image src="" variant="round" />
        <div className={styles.wrapper}>
          {this.props.role}
          <div className={styles.child}>
            {this.props.name} &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            {this.props.others}
          </div>
        </div>
      </div>
    );
  }
}
