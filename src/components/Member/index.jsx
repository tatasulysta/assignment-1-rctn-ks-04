import React, { Component } from "react";
import Container from "../Container";
import MemberCard from "../MemberCard";

export default class Members extends Component {
  constructor() {
    super();
    this.state = [
      {
        name: "Adhy Wiranta",
        role: "Organizers",
        others: "4 others",
      },
    ];
  }
  render() {
    return (
      <Container name="Members" see="See all">
        {this.state?.length > 1 ? (
          this.state.map((data) => (
            <MemberCard
              name={data.name}
              role={data.role}
              others={data.others}
            />
          ))
        ) : (
          <MemberCard
            name={this.state[0].name}
            role={this.state[0].role}
            others={this.state[0].others}
          />
        )}
      </Container>
    );
  }
}
