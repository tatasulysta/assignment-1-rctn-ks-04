import React, { Component } from "react";
import Container from "../Container";
import styles from "./styles.module.css";
export default class Next extends Component {
  render() {
    return (
      <Container name="Next Meetup">
        <div className={styles.container}>
          <span className={styles.title}>Awesome meetup and event </span> <br />
          <span className={styles.date}> 25 January 2019</span>
          <p>
            Hello, Javascript & Node.js Ninjas! <br />
            Get ready for our monthly meetup JakartaJS! This will be our fifth
            meetup of 2018! <br />
            The meetup format will contain some short stories and technical
            talks. <br />
            If you have a short announcement you'd be like to share with the
            audience, you may do so during open mic announcements.
            <br />
            <br />
            Remember to bring a photo ID to get through building security.
            <br />
            <br />
            -----
            <br />
            <br />
            See you there!
            <br />
            <br />
            Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
      </Container>
    );
  }
}
