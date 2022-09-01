import React, { Component } from "react";
import Container from "../Container";
import MemberCard from "../MemberCard";

export default class Members extends Component {
  render() {
    return (
      <Container name="Members" see="See all">
        <MemberCard name="Adhy Wiranta" role="Organizers" others="4others." />
      </Container>
    );
  }
}
