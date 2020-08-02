import React, { useState } from "react"
import { window } from "ssr-window"

import { graphql } from "gatsby"
import Header from "../components/header/index"
import Container from "../components/container/index"
import FirstView from "../components/firstview/index"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const windowWidth = window.innerWidth;
  const isPcDefault = windowWidth >= 1080;
  const [isPc, setIsPc ] = useState(isPcDefault);
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;
    const isPc = windowWidth >= 1080;
    setIsPc(isPc);
  });
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const BlogSection = styled.div`
    width: 100vw;
    padding-bottom: 48px;
  `
  const BlogWrapper = styled.div`
    width: ${isPc ? 'calc(100% - 200px);' : '90%;'}
    max-width: ${isPc && '1280px'};
    min-width: ${isPc && '960px'};
    margin: 32px auto 0px auto;
  `
  const BlogTitle = styled.h2`
    color: #64e830;
    font-size: ${isPc ? '48px': '24px'};
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin: ${isPc ? '64px auto':'32px auto 64px auto'};
    width: ${isPc ? '80%':'100%'};
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
  `

  const BlogDate = styled.p`
    width: ${isPc ? '800px':'100%'};
    margin: 0 auto 24px auto;
    font-size: 16px;
    font-weight: 600;
    color: rgba(0,0,0,0.7);
  `
  const BlogText = styled.p`
    font-size: 16px;
    text-align: left;
    line-height: 2;
    width: 800px;
    margin: 0 auto;
  `

  const BlogContent = styled.div`
    width: ${isPc ? '800px':'100%'};
    margin: 0 auto;

    h1 {
       font-size: 35px;
       border: none;
       margin: 30px auto;
       text-align: center;
       letter-spacing: 5px
    }
    h2 {
     font-size: 25px;
     letter-spacing: 3px;
     margin: 50px auto 25px;
    }
    h3 {
     font-size: 18px;
     font-weight: bold;
     margin-bottom: 10px
    }
    p, table, ul, ol, dl, pre, blockquote {
      line-height: 2;
      margin-left: 25px;
    }
    li {
      list-style: disc;
      margin-left: 4em;
    }
    ul,ol,dl {
      margin: 24px 0;
      ul, ol, dl{
        margin: 0;
      }
    }
    a {
      margin 24px 0!important;
    }
  `

  return (
    <Container>
      <Header isPc={isPc}/>
      <FirstView TitleText="Blog" isPc={isPc}/>
      <BlogSection>
        <BlogWrapper>
          <BlogTitle>{frontmatter.title}</BlogTitle>
          <BlogDate>{frontmatter.date}</BlogDate>
          <BlogContent
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </BlogWrapper>
      </BlogSection>
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`