import React from "react";
import Img from "gatsby-image";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Product = ({ product }) => {
  return (
    <Col xs="10" sm="8" md="6" lg="4" className="mx-auto my-3">
      <Card style={{ minHeight: "100%" }}>
        <Img className="card-image-top" fluid={product.image.fluid} />
        <CardBody className="text-center">
          <CardTitle>{product.title}</CardTitle>
          <CardSubtitle>${product.price}</CardSubtitle>
          <Button outline className="btn-yellow mt-3 text-capitalize">
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Product;
