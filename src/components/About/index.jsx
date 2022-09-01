import React, { Component } from "react";

import Container from "../Container";
export default class About extends Component {
  render() {
    return (
      <Container name="About Meetup">
        <span style={{ fontSize: "14px", fontWeight: "500" }}>
          <p>
            Come and meet other developers interested in the JavaScript and it's
            library in the Greater Jakarta area.
          </p>
          <p>Twtter: @JakartaJS and we use the hastag #jakartajs</p>
        </span>
      </Container>
    );
  }
}
