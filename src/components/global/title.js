import React from "react";
import { Row, Col } from "reactstrap";

const Title = ({ title }) => {
  return (
    <Row>
      <Col className="text-center mb-3">
        <h1 className="display-4 font-weight-bold text-capitalize">{title}</h1>
      </Col>
    </Row>
  );
};

export default Title;
