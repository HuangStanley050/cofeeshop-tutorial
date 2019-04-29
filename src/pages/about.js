import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Background from "../components/global/background";
const About = ({ data }) => {
  return (
    <Layout>
      <Background
        img={data.img.childImageSharp.fluid}
        title="About Page"
        styleClass="about-background"
      />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default About;
