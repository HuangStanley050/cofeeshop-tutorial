import React, { Component } from "react";
import Title from "../global/title";
import Img from "gatsby-image";
import { Container, Row, Col } from "reactstrap";

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: this.props.items.edges,
  //   };
  // }
  state = {
    items: [],
    coffeeItems: [],
  };
  componentDidMount() {
    this.setState({
      items: this.props.items.edges,
    });
  }

  render() {
    let content = (
      <section className="menu py-5">
        <Container>
          <Title title="best of our menu" />
          <Row className="mb-5">
            <Col xs="10" sm="6" className="mx-auto text-capitalize text-center">
              <h1>There are no items to display</h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
    if (this.state.items.length > 0) {
      content = (
        <section className="menu py-5">
          <Container>
            <Title title="best of our menu" />
            <Row className="mb-5">
              <Col
                xs="10"
                sm="6"
                className="mx-auto text-capitalize text-center"
              >
                <h1>Hi there</h1>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }
    return content;
  }
}

export default Menu;
