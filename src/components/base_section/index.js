import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Image from "..//image/index"

export default function BaseSection({ SectionTitleText, SectionDescTextArray, SectionType, SubSections}) {
  const Section = SectionType ?
    styled.div`
      width: 100vw;
      background-color: #d0efff;
    `:
    styled.div`
      width: 100vw;
      background-color: white;
    `

  const SectionWrapper = styled.div`
    width: calc(100% - 200px);
    max-width: 1280px;
    min-width: 960px;
    padding-top: 128px;
    margin: 0 auto;
  `
  const SectionTitle = styled.h2`
    color: #03254c;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin: 0 auto 64px auto;
    width: 80%;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #03254c;
      bottom: -20px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  `
  const SectionText = styled.p`
    font-size: 16px;
    text-align: left;
    line-height: 2;
    width: 80%;
    margin: 0 auto;
  `

  const SubSectionTitle = styled.h3`
    color: #03254c;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    line-height: 1;
    margin: 36px 0px;
  `
  const SubSectionImages = styled.div`
    width: 50%;
    margin: 36px auto 48px auto;
  `

  return (
    <Section>
      <SectionWrapper>
        {SectionTitleText && <SectionTitle>{ SectionTitleText }</SectionTitle>}
        <SectionText>{ SectionDescTextArray && SectionDescTextArray.map((desc) => {
          return <p>{desc}<br /><br /></p>;
        }) }</SectionText>
        { SubSections && SubSections.map((SubSection) => {
          return (
            <div>
              <SubSectionTitle>{ SubSection.title }</SubSectionTitle>
              <SectionText>{ SubSection.desc.map((desc) => {
                return <p>{desc}<br /><br /></p>;
              }) }</SectionText>
            <SubSectionImages>
              { SubSection.images && SubSection.images.map(image => {
                return <Image filename={image} />
              })}
            </SubSectionImages>
            </div>
          );
        })}
      </SectionWrapper>
    </Section>
  );
}