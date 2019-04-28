import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "reactstrap";
import Title from "../global/title";
const Info = props => {
  return (
    <section className="py-5">
      <Container>
        <Title title="our story" />
        <Row>
          <Col className="mx-auto text-center" xs="10" sm="8">
            <p className="lead text-mute mb-5">
              Bresaola burgdoggen shoulder pork chop. Ball tip short ribs cow
              ground round shoulder beef. Kielbasa pastrami meatball, short loin
              biltong shank kevin pork belly pork chop hamburger. Corned beef
              bresaola pork belly rump alcatra chuck. Kielbasa ground round
              filet mignon spare ribs cupim.
            </p>
            <Link to="/about">
              <Button outline className="btn-yellow">
                About
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
