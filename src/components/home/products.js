import React from "react";
import Product from "./product";
import Title from "../global/title";
import { StaticQuery, graphql } from "gatsby";

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
        console.log(data.products);
        return <h1>hello world</h1>;
      }}
    />
  );
};

export default Products;
