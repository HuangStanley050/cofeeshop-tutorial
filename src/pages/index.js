import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Background from "../components/global/background";
import Info from "../components/home/info";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Regular Joe's"
      styleClass="default-background"
    />
    <Info />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
