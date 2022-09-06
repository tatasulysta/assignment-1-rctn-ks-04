import React, { Component } from "react";
import Container from "../Container";
import PastCard from "../PastCard";
export default class Past extends Component {
  constructor() {
    super();
    this.state = [
      {
        date: "27 November 2017",
        description: "#39 JakartaJS April Meetup with Kumparan",
        people: 139,
      },
      {
        date: "27 October 2017",
        description: "#38 JakartaJS April Meetup with Blibli",
        people: 113,
      },
      {
        date: "27 September 2017",
        description: "#37 JakartaJS April Meetup with Hacktiv8",
        people: 110,
      },
    ];
  }
  render() {
    return (
      <Container name="Past Meetups" see="See all">
        <div style={{ display: "flex", gap: "50px" }}>
          {this.state.length > 1 ? (
            this.state.map((data) => <PastCard data={data} />)
          ) : (
            <PastCard data={this.state[0]} />
          )}
        </div>
      </Container>
    );
  }
}
