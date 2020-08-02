import React, { useState } from "react"
import { window } from "ssr-window"
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
  const windowWidth = window.innerWidth;
  const isPcDefault = windowWidth >= 1080;
  const [isPc, setIsPc ] = useState(isPcDefault);
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const isPc = windowWidth >= 1080;
    setIsPc(isPc);
  });

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} isPc={isPc}/>)


  const Section = styled.div`
    width: 100vw;
    background-color: white;
    padding-bottom: 128px;
  `

  const SectionWrapper = styled.div`
    @media (max-width: 1079px) {
      width: 90%;
      padding: 32px 0px 24px 0px;
    }

    @media (min-width: 1080px) {
      width: calc(100% - 200px);
      max-width: 1280px;
      min-width: 960px;
      padding: 32px 0px 48px 0px;
    }
    margin: 0 auto;
  `


  const SectionTitle = styled.h2`
    @media (max-width: 1079px) {
      font-size: 24px;
      margin: 32px auto 64px auto;
      width: 100%;
    }
    @media (min-width: 1080px) {
      font-size: 48px;
      margin: 64px auto;
      width: 80%;
    }
    color: #64e830;
    font-weight: 600;
    text-align: center;
    line-height: 1;
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
      <Header isPc={isPc}/>
      <FirstView TitleText="Blogs"/>
      <Section>
        <SectionWrapper>
          <SectionTitle>Blogs</SectionTitle>
          {Posts}
        </SectionWrapper>
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