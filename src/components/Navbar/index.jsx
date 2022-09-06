import React, { Component } from "react";
import styles from "./styles.module.css";
import NavItem from "../NavItem";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = [
      {
        id: 1,
        link: "/",
        name: "Create Meetup",
      },
      {
        id: 2,
        link: "/",
        name: "Explore",
      },
    ];
  }
  render() {
    return (
      <div className={styles.navbar}>
        <p className={styles.brandname}>
          <b>Qtemu</b>
        </p>
        <nav className={styles.nav}>
          <ul>
            <span>
              {this.state.length > 1 ? (
                this.state.map((data) => <NavItem data={data} />)
              ) : (
                <NavItem data={this.state[0]} />
              )}
            </span>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
