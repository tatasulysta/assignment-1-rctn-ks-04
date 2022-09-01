import React, { Component } from "react";
import styles from "./styles.module.css";
export default class MemberCard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.img_wrapper}>
          <img src={this.props.img} alt="" srcset="" />
        </div>
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
