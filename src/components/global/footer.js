import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = props => {
  return (
    <footer className="footer py-3">
      <Container>
        <Row>
          <Col
            xs="10"
            md="6"
            className="text-center mx-auto text-center text-capitalize text-yellow"
          >
            <h3>
              All rights reserved &copy; {new Date().getFullYear().toString()}
            </h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
