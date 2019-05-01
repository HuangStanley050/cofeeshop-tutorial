import React, { Component } from "react";
import Title from "../global/title";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

class Contact extends Component {
  state = {
    username: "",
    email: "",
    text: "",
  };
  handleInput = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    alert("hi");
  };
  render() {
    return (
      <section className="contact py-5">
        <Title title="contact us" />
        <Row>
          <Col className="mx-auto" xs="10" sm="8" md="6">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  onChange={this.handleInput}
                  value={this.state.username}
                  type="text"
                  name="name"
                  id="username"
                  placeholder="your name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={this.handleInput}
                  type="email"
                  value={this.state.email}
                  name="email"
                  id="email"
                  placeholder="your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="comment">Description</Label>
                <Input
                  type="textarea"
                  onChange={this.handleInput}
                  value={this.state.text}
                  name="text"
                  id="text"
                  placeholder="your feedback"
                />
              </FormGroup>
              <Button type="submit" outline block className="btn-yellow">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    );
  }
}

export default Contact;
