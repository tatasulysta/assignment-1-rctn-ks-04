import React, { Component } from "react";
import styles from "./styles.module.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <p className={styles.brandname}>
          <b>Qtemu</b>
        </p>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/">Create Meetup</a>
            </li>
            <li>
              <a href="/">Explore</a>
            </li>
            <li className={styles.right} style={{ float: "right" }}>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}