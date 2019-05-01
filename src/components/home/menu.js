import React, { Component } from "react";
import Title from "../global/title";
import Img from "gatsby-image";
import { Container, Row, Col, Button } from "reactstrap";

class Menu extends Component {
  state = {
    items: [],
    coffeeItems: [],
  };
  componentDidMount() {
    this.setState({
      items: this.props.items.edges,
      coffeeItems: this.props.items.edges,
    });
  }
  getCategories = items => {
    let tempCategories = new Set(items.map(item => item.node.category));
    return ["all", ...Array.from(tempCategories)];
  };
  handleItems = item => {
    //console.log(item);
    let tempItems = [...this.state.items];
    if (item === "all") {
      return this.setState({ coffeeItems: tempItems });
    } else {
      let filterItems = this.state.items.filter(({ node }) => {
        return node.category === item;
      });
      this.setState({ coffeeItems: filterItems });
    }
  };

  render() {
    // console.log(this.getCategories(this.state.coffeeItems));
    let content = (
      <section className="menu py-5">
        <Container>
          <Title title="best of our menu" />
          <Row>
            <Col xs="10" sm="6" className="mx-auto text-capitalize text-center">
              <h1>There are no items here</h1>
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
              <Col xs="10" className="mx-auto text-center">
                {this.getCategories(this.state.items).map(item => (
                  <Button
                    onClick={() => this.handleItems(item)}
                    outline
                    className="btn-yellow m-3 text-capitalize"
                    key={item}
                  >
                    {item}
                  </Button>
                ))}
              </Col>
            </Row>
            <Row>
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <Col
                    key={node.id}
                    xs="11"
                    md="6"
                    className="d-flex mx-auto my-3"
                  >
                    {" "}
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.titile}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      );
    }
    return content;
  }
}

export default Menu;
