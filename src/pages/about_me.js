import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Header from "../components/header/index"
import Container from "../components/container/index"
import FirstView from "../components/firstview/index"
import PostLink from "../components/post-link/index"


export default function AboutMe() {

  const Section = styled.div`
    width: 100vw;
    background-color: white;
  `

  const SectionWrapper = styled.div`
    width: calc(100% - 200px);
    max-width: 1280px;
    min-width: 960px;
    padding: 32px 0 48px 0px;
    margin: 0 auto;
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

  const SectionText = styled.p`
    font-size: 16px;
    text-align: left;
    line-height: 2;
    width: 800px;
    margin: 0 auto;
  `
  const SubSectionTitle = styled.h3`
    color: #64e830;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin: 36px 0px;
  `
  const SnsBox = styled.div`
    width: 800px;
    margin-top: 48px;
    margin: 0 auto;
    iframe {
      width: 100%;
      margin: 0 auto;
      display: block;
    }
  `

  return (
    <Container>
      <Header />
      <FirstView/>
      <Section>
        <SectionWrapper>
          <SectionTitle>About Me</SectionTitle>
          <SectionText>
            初めまして！あんでぃです！<br/>
            ApexをメインにYouTubeで動画投稿をしてます！<br/>
            動画で解説するのが難しい部分や、動画の内容、自分の思考のメモとしてブログを書いてます。<br/><br/>
            YouTubeとTwitterをメインに活動してるので、是非フォローお願いします！
          </SectionText>
          <SnsBox>
            <SubSectionTitle>YouTube</SubSectionTitle>
            <iframe width="949" height="534" src="https://www.youtube.com/embed/?list=UU8HLMxZzE4OAedpnQwiiRfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <SubSectionTitle>Twitter</SubSectionTitle>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="honey_king_andy"
              options={{ width: 800, height: 450 }}
            />
          </SnsBox>
        </SectionWrapper>
      </Section>
    </Container>
  );
}