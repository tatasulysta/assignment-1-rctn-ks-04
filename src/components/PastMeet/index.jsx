import React, { Component } from "react";
import Container from "../Container";
import PastCard from "../PastCard";
export default class Past extends Component {
  render() {
    return (
      <Container name="Past Meetups" see="See all">
        <div style={{ display: "flex", gap: "50px" }}>
          <PastCard
            date="27 November 2017"
            description="#39 JakartaJS April Meetup with kumparan"
            people="139"
          />
          <PastCard
            date="27 November 2017"
            description="#39 JakartaJS April Meetup with kumparan"
            people="139"
          />
          <PastCard
            date="27 November 2017"
            description="#39 JakartaJS April Meetup with kumparan"
            people="139"
          />
        </div>
      </Container>
    );
  }
}
