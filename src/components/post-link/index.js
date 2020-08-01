import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export default function PostLink({ post }) {

  const BlogsWrapper = styled.div`
    width: calc(100% - 200px);
    max-width: 1280px;
    min-width: 960px;
    margin: 0 auto;
  `

  const BlogsBox = styled.div`
    a {
      display: flex;
      align-items: center;
      width: 800px;
      height: 120px;
      margin: 0 auto 12px auto;
      background-color: rgba(100,232, 48, 0.5);
    }
  `

  const BlogsDate = styled.p`
    font-size: 16px;
    color: rgba(0,0,0,0.7);
    letter-spacing: 1px;
    font-weight: 600;
    padding-left: 36px;
  `

  const BlogsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    word-break: break-all;
    padding: 0 36px;
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