import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default function PostLink({ post, isPc }) {

  const BlogsWrapper = styled.div`
    @media (max-width: 1079px) {
      width: 90%;
    }

    @media (min-width: 1080px) {
      width: calc(100% - 200px);
      max-width: 1280px;
      min-width: 960px;
    }
    margin: 0 auto;
  `

  const BlogsBox = styled.div`
    @media (max-width: 1079px) {
      a {
        width: 100%;
      }
    }
    @media (min-width: 1080px) {
      a {
        width: 800px;
      }
    }
    a {
      display: flex;
      align-items: center;
      height: 120px;
      margin: 0 auto 12px auto;
      background-color: rgba(100,232, 48, 0.5);
    }
  `

  const BlogsDate = styled.p`
    @media (max-width: 1079px) {
      padding-left: 24px;
    }
    @media (min-width: 1080px) {
      padding-left: 36px;
    }
    font-size: 16px;
    color: rgba(0,0,0,0.7);
    letter-spacing: 1px;
    font-weight: 600;
    white-space: nowrap;
  `

  const BlogsTitle = styled.h2`
    @media (max-width: 1079px) {
      padding-left: 24px;
      font-size: 16px;
    }
    @media (min-width: 1080px) {
      padding-left: 36px;
      font-size: 20px;
    }
    font-weight: 600;
    word-break: break-all;
  `


  return(
    <BlogsWrapper>
      <BlogsBox>
        <Link to={post.frontmatter.slug}>
          <BlogsDate>{post.frontmatter.date}</BlogsDate>
          <BlogsTitle>{post.frontmatter.title} </BlogsTitle>
        </Link>
      </BlogsBox>
    </BlogsWrapper>
  );
}