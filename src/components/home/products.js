import React from "react";
import Product from "./product";
import Title from "../global/title";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row } from "reactstrap";

const query = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Products = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        //console.log(data.products);
        return (
          <section className="py-5">
            <Container>
              <Title title="our products" />
              <Row>
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </Row>
            </Container>
          </section>
        );
      }}
    />
  );
};

export default Products;
