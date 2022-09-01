import React, { Component } from "react";
import styles from "./styles.module.css";
import Button from "../Button";

export default class Profile extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.img}>
          <img src="" alt="" srcset="" />
        </div>
        <div>
          <b>Hacktiv8 Meetup</b>
          <tr className={styles.table}>
            <td>Location</td>
            <td>Jakarta, Indonesia</td>
          </tr>
          <tr className={styles.table}>
            <td>Members</td>
            <td>1,078</td>
          </tr>
          <tr className={styles.table}>
            <td>Organizers</td>
            <td>Adhy Wiranata</td>
          </tr>
          <br />
          <Button>Join Us</Button>
        </div>
      </div>
    );
  }
}
