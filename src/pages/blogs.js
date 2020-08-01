import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link/index"
import Header from "../components/header/index"
import Container from "../components/container/index"
import FirstView from "../components/firstview/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Blogs = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)


  const Section = styled.div`
    width: 100vw;
    background-color: white;
    padding: 128px 0;
  `
  const SectionTitle = styled.h2`
    color: #64e830;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin: 64px auto;
    width: 80%;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #64e830;
      bottom: -20px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    a:any-link{
      color: #64e830;
    }
  `
  return (
    <Container>
      <Header />
      <FirstView/>
      <Section>
        <SectionTitle>Blogs</SectionTitle>
        {Posts}
      </Section>
    </Container>
  );
}

export default Blogs

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`